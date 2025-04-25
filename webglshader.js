// WebGL Shader Transition System
class ShaderTransition {
    constructor() {
      this.container = document.getElementById('webgl-transition');
      this.scene = new THREE.Scene();
      this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.container.appendChild(this.renderer.domElement);
      
      this.uniforms = {
        progress: { value: 0 },
        resolution: { value: new THREE.Vector2() },
        texture1: { value: null },
        texture2: { value: null }
      };
      
      this.resize();
      window.addEventListener('resize', this.resize.bind(this));
    }
    
    resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      this.renderer.setSize(width, height);
      this.uniforms.resolution.value.set(width, height);
    }
    
    createTransitionShader(shaderCode) {
      if (this.mesh) this.scene.remove(this.mesh);
      
      this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: shaderCode,
        transparent: true
      });
      
      this.mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        this.material
      );
      
      this.scene.add(this.mesh);
    }
    
    async transition(fromElement, toElement, shaderName, duration = 1.5) {
      // Capture screenshots of elements
      const textures = await Promise.all([
        this.captureTexture(fromElement),
        this.captureTexture(toElement)
      ]);
      
      this.uniforms.texture1.value = textures[0];
      this.uniforms.texture2.value = textures[1];
      
      // Create the specific shader
      this.createTransitionShader(this.getShaderCode(shaderName));
      
      // Animate the transition
      this.container.style.opacity = 1;
      this.container.style.pointerEvents = 'auto';
      
      return new Promise(resolve => {
        gsap.to(this.uniforms.progress, {
          value: 1,
          duration,
          ease: "power2.inOut",
          onComplete: () => {
            this.container.style.opacity = 0;
            this.container.style.pointerEvents = 'none';
            this.uniforms.progress.value = 0;
            resolve();
          }
        });
      });
    }
    
    async captureTexture(element) {
      return new Promise(resolve => {
        html2canvas(element, {
          scale: 1,
          logging: false,
          useCORS: true,
          allowTaint: true
        }).then(canvas => {
          const texture = new THREE.Texture(canvas);
          texture.needsUpdate = true;
          resolve(texture);
        });
      });
    }
    
    getShaderCode(name) {
      // Collection of shader effects
      const shaders = {
        'filmBurn': `
          varying vec2 vUv;
          uniform sampler2D texture1;
          uniform sampler2D texture2;
          uniform float progress;
          uniform vec2 resolution;
          
          void main() {
            vec2 uv = vUv;
            float p = progress;
            
            // Film burn effect
            float burn = p * 1.2;
            float edge = burn * (1.0 + burn * 0.5);
            
            vec4 tex1 = texture2D(texture1, uv);
            vec4 tex2 = texture2D(texture2, uv);
            
            float inv = 1.0 - p;
            vec4 color = mix(tex1, tex2, p);
            
            // Add burn effect
            float dist = distance(uv, vec2(0.5, 0.5));
            if (dist < edge) {
              float t = (edge - dist) / edge;
              color.rgb += t * 0.8 * vec3(1.0, 0.5, 0.2);
            }
            
            gl_FragColor = color;
          }
        `,
        'swirl': `
          varying vec2 vUv;
          uniform sampler2D texture1;
          uniform sampler2D texture2;
          uniform float progress;
          uniform vec2 resolution;
          
          void main() {
            vec2 uv = vUv;
            float p = progress;
            
            // Swirl effect
            vec2 center = vec2(0.5, 0.5);
            vec2 dir = uv - center;
            float dist = length(dir);
            
            if (dist < 0.5) {
              float angle = p * p * 10.0 * (0.5 - dist);
              float s = sin(angle);
              float c = cos(angle);
              dir = vec2(dir.x * c - dir.y * s, dir.x * s + dir.y * c);
              uv = center + dir;
            }
            
            vec4 tex1 = texture2D(texture1, uv);
            vec4 tex2 = texture2D(texture2, uv);
            
            gl_FragColor = mix(tex1, tex2, p);
          }
        `,
        'waterDrop': `
          varying vec2 vUv;
          uniform sampler2D texture1;
          uniform sampler2D texture2;
          uniform float progress;
          uniform vec2 resolution;
          
          void main() {
            vec2 uv = vUv;
            float p = progress;
            
            // Water drop effect
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(uv, center);
            
            if (dist < p) {
              float diff = (p - dist);
              float powDiff = 1.0 - pow(diff * 2.0, 2.0);
              uv = center + normalize(uv - center) * dist * powDiff;
            }
            
            vec4 tex1 = texture2D(texture1, uv);
            vec4 tex2 = texture2D(texture2, uv);
            
            gl_FragColor = mix(tex1, tex2, p);
          }
        `,
        'dreamy': `
          varying vec2 vUv;
          uniform sampler2D texture1;
          uniform sampler2D texture2;
          uniform float progress;
          uniform vec2 resolution;
          
          void main() {
            vec2 uv = vUv;
            float p = progress;
            
            // Dreamy zoom blur effect
            vec4 tex1 = texture2D(texture1, uv);
            vec4 tex2 = texture2D(texture2, uv);
            
            float power = p * 0.2;
            vec2 center = vec2(0.5, 0.5);
            vec2 dir = uv - center;
            
            vec4 color = vec4(0.0);
            float total = 0.0;
            for (float i = 0.0; i < 10.0; i += 1.0) {
              float percent = (i + 0.5) / 10.0;
              float weight = 4.0 * (percent - percent * percent);
              vec2 uv2 = uv - dir * percent * power;
              color += texture2D(texture2, uv2) * weight;
              total += weight;
            }
            
            gl_FragColor = color / total;
          }
        `
      };
      
      return shaders[name] || shaders['filmBurn'];
    }
}












// Initialize the transition system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create the transition system
    const shaderTransition = new ShaderTransition();
    
    // Add transition effect to all external links
    document.querySelectorAll('a[href^="http"], a[href^="/"]').forEach(link => {
        if (!link.getAttribute('href').includes('#') && !link.hasAttribute('data-no-transition')) {
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                
                const currentPage = document.querySelector('body');
                const nextPageUrl = link.getAttribute('href');
                
                // Create a temporary div for the next page background
                const nextPageDiv = document.createElement('div');
                nextPageDiv.style.position = 'fixed';
                nextPageDiv.style.top = '0';
                nextPageDiv.style.left = '0';
                nextPageDiv.style.width = '100%';
                nextPageDiv.style.height = '100%';
                nextPageDiv.style.backgroundColor = '#0a0e17';
                document.body.appendChild(nextPageDiv);
                
                // Do shader transition
                await shaderTransition.transition(
                    currentPage, 
                    nextPageDiv, 
                    'swirl', 
                    1.2
                );
                
                // Navigate to the new page
                window.location.href = nextPageUrl;
            });
        }
    });
});