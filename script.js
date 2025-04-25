// Movie data - in a real application, this would come from an API
const movies = [
    {
        id: 1,
        title: "Dune: Part Two",
        year: 2024,
        rating: "PG-13",
        duration: "166 min",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        score: 8.7,
        poster: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjhkZWY5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
        cast: [
            { name: "Timothée Chalamet", character: "Paul Atreides", photo: "https://m.media-amazon.com/images/M/MV5BOWU1Nzg0M2ItYjEzMi00ODliLThkODAtNGEyYzRkZTBmMmEzXkEyXkFqcGdeQXVyNDk2MjQ4Mzk@._V1_UY256_CR11,0,172,256_AL_.jpg" },
            { name: "Zendaya", character: "Chani", photo: "https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_UY256_CR38,0,172,256_AL_.jpg" },
            { name: "Rebecca Ferguson", character: "Lady Jessica", photo: "https://m.media-amazon.com/images/M/MV5BNzA4NDA1MTA5NV5BMl5BanBnXkFtZTcwNjMyNTQ3OA@@._V1_UY256_CR16,0,172,256_AL_.jpg" }
        ]
    },
    {
        id: 2,
        title: "Oppenheimer",
        year: 2023,
        rating: "R",
        duration: "180 min",
        genres: ["Biography", "Drama", "History"],
        score: 8.5,
        poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, exploring the moral complexities and consequences of his creation.",
        cast: [
            { name: "Cillian Murphy", character: "J. Robert Oppenheimer", photo: "https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_UX172_CR0,0,172,256_AL_.jpg" },
            { name: "Emily Blunt", character: "Katherine Oppenheimer", photo: "https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_UY256_CR4,0,172,256_AL_.jpg" },
            { name: "Robert Downey Jr.", character: "Lewis Strauss", photo: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX172_CR0,0,172,256_AL_.jpg" }
        ]
    },
    {
        id: 3,
        title: "Blade Runner 2049",
        year: 2017,
        rating: "R",
        duration: "164 min",
        genres: ["Sci-Fi", "Action", "Drama"],
        score: 8.0,
        poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
        trailerUrl: "https://www.youtube.com/embed/gCcx85zbxz4",
        description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        cast: [
            { name: "Ryan Gosling", character: "K", photo: "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY256_CR15,0,172,256_AL_.jpg" },
            { name: "Harrison Ford", character: "Rick Deckard", photo: "https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_UX172_CR0,0,172,256_AL_.jpg" },
            { name: "Ana de Armas", character: "Joi", photo: "https://m.media-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg" }
        ]
    },
    {
        id: 4,
        title: "Interstellar",
        year: 2014,
        rating: "PG-13",
        duration: "169 min",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        score: 8.6,
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth's resources are depleted.",
        cast: [
            { name: "Matthew McConaughey", character: "Cooper", photo: "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_UX172_CR0,0,172,256_AL_.jpg" },
            { name: "Anne Hathaway", character: "Brand", photo: "https://m.media-amazon.com/images/M/MV5BNjQ5MTAxMDc5OF5BMl5BanBnXkFtZTcwOTI0OTE4OA@@._V1_UY256_CR1,0,172,256_AL_.jpg" },
            { name: "Jessica Chastain", character: "Murph", photo: "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_UY256_CR9,0,172,256_AL_.jpg" }
        ]
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initParticles();
    initCustomCursor();
    initMovieCarousel();
    initTrailerModal();
    initMobileMenu();
    initGSAPAnimations();
    initInteractiveElements();

    initSignupModal();
    connectCTAtoSignupModal();

    
});

// Initialize particles.js
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#8b5cf6'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#8b5cf6',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}










// Initialize custom cursor with optimized performance
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-dot-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    // Variables for cursor position
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isVisible = false;
    let isHovering = false;
    let cursorScale = 1;
    let requestId;
    let lastMoveTime = 0;
    
    // Use requestAnimationFrame for smoother animation
    function updateCursorPosition() {
        // Calculate smooth movement with easing
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        // Apply transforms instead of left/top for better performance
        gsap.set(cursorDot, {
            xPercent: -50,
            yPercent: -50,
            x: mouseX,
            y: mouseY,
            force3D: true
        });
        
        gsap.set(cursorOutline, {
            xPercent: -50,
            yPercent: -50,
            x: cursorX,
            y: cursorY,
            scale: cursorScale,
            force3D: true
        });
        
        // Continue animation loop
        requestId = requestAnimationFrame(updateCursorPosition);
    }
    
    // Start animation loop
    function startCursorAnimation() {
        if (!requestId) {
            requestId = requestAnimationFrame(updateCursorPosition);
        }
    }
    
    // Stop animation loop when idle
    function stopCursorAnimation() {
        if (requestId) {
            cancelAnimationFrame(requestId);
            requestId = null;
        }
    }
    
    // Throttled mousemove handler
    function handleMouseMove(e) {
        // Update mouse position
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursor if not already visible
        if (!isVisible) {
            isVisible = true;
            gsap.to([cursorDot, cursorOutline], {
                opacity: 1,
                duration: 0.3,
                stagger: 0.1
            });
        }
        
        // Start animation if not running
        startCursorAnimation();
        
        // Reset idle timer
        lastMoveTime = Date.now();
    }
    
    // Throttle mousemove events for better performance
    const throttledMouseMove = throttle(handleMouseMove, 5);
    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    
    // Check for cursor idle state
    setInterval(() => {
        if (isVisible && Date.now() - lastMoveTime > 3000) {
            // Stop animation if cursor hasn't moved for 3 seconds
            stopCursorAnimation();
        }
    }, 1000);
    
    // Hide cursor when leaving window
    window.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            isVisible = false;
            gsap.to([cursorDot, cursorOutline], {
                opacity: 0,
                duration: 0.3,
                stagger: 0.1,
                onComplete: stopCursorAnimation
            });
        }
    }, { passive: true });
    
    // Handle interactive elements with event delegation
    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        
        // Check if target is an interactive element
        if (target.closest('a, button, .tag, .movie-slide, .slide-indicator, .trending-item, .trending-item-btn, .trending-tab')) {
            isHovering = true;
            cursorScale = 1.5;
        }
    }, { passive: true });
    
    document.addEventListener('mouseout', (e) => {
        const target = e.target;
        
        // Check if target is an interactive element
        if (target.closest('a, button, .tag, .movie-slide, .slide-indicator, .trending-item, .trending-item-btn, .trending-tab')) {
            isHovering = false;
            cursorScale = 1;
        }
    }, { passive: true });
    
    // Special handling for trending carousel section
    const trendingSection = document.querySelector('.trending-section');
    if (trendingSection) {
        trendingSection.addEventListener('mouseenter', () => {
            // Optimize cursor for trending section
            gsap.to(cursorOutline, {
                borderColor: 'rgba(139, 92, 246, 0.5)',
                borderWidth: '1px',
                duration: 0.3
            });
        }, { passive: true });
        
        trendingSection.addEventListener('mouseleave', () => {
            // Reset cursor when leaving trending section
            gsap.to(cursorOutline, {
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: '2px',
                duration: 0.3
            });
        }, { passive: true });
    }
    
    // Start initial animation
    startCursorAnimation();
}










// Throttle function to limit function calls
// Improve throttle function
// Improve throttle function
function throttle(callback, limit) {
    let waiting = false;
    return function() {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(() => {
                waiting = false;
            }, limit);
        }
    };
}


function handleMouseMove(e) {
    // Update positions directly
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Make cursor visible if needed
    if (!isVisible) {
        isVisible = true;
        gsap.set([cursorDot, cursorOutline], { opacity: 1 });
    }
    
    // Always ensure animation is running
    startCursorAnimation();
    lastMoveTime = Date.now();
}

// Use a more aggressive throttle for better performance
const throttledMouseMove = throttle(handleMouseMove, 16); // 60fps equivalent










// Initialize movie carousel
function initMovieCarousel() {
    const movieSlides = document.querySelector('.movie-slides');
    const slideIndicators = document.getElementById('slide-indicators');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const movieTitle = document.querySelector('.movie-title');
    const movieYear = document.querySelector('.movie-year');
    const movieRating = document.querySelector('.movie-rating');
    const movieDuration = document.querySelector('.movie-duration');
    const movieScore = document.querySelector('.movie-score');
    const playTrailerBtn = document.querySelector('.play-trailer');
    const moreInfoBtn = document.querySelector('.more-info');
    
    if (!movieSlides) return;
    
    let currentIndex = 0;
    let autoplayInterval;
    const autoplayDuration = 5000; // 5 seconds
    
    // Create movie slides
    movies.forEach((movie, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.classList.add('movie-slide');
        slide.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" class="movie-poster">`;
        movieSlides.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.classList.add('slide-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        slideIndicators.appendChild(indicator);
    });
    
    // Update movie info
    function updateMovieInfo() {
        const movie = movies[currentIndex];
        
        // Use GSAP for smooth transitions
        gsap.to([movieTitle, movieYear, movieRating, movieDuration, movieScore], {
            opacity: 0,
            y: 10,
            duration: 0.3,
            onComplete: () => {
                movieTitle.textContent = movie.title;
                movieYear.textContent = movie.year;
                movieRating.textContent = movie.rating;
                movieDuration.textContent = movie.duration;
                movieScore.textContent = movie.score;
                
                gsap.to([movieTitle, movieYear, movieRating, movieDuration, movieScore], {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.05
                });
            }
        });
        
        // Update buttons data
        playTrailerBtn.dataset.id = movie.id;
        moreInfoBtn.dataset.id = movie.id;
    }
    
    // Go to slide
    function goToSlide(index) {
        if (index < 0) {
            index = movies.length - 1;
        } else if (index >= movies.length) {
            index = 0;
        }
        
        currentIndex = index;
        
        // Update slides position
        gsap.to(movieSlides, {
            x: `-${currentIndex * 100}%`,
            duration: 0.7,
            ease: "power2.out"
        });
        
        // Update indicators
        document.querySelectorAll('.slide-indicator').forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
        
        // Update movie info
        updateMovieInfo();
    }
    
    // Start autoplay
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, autoplayDuration);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        stopAutoplay();
        startAutoplay();
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        stopAutoplay();
        startAutoplay();
    });
    
    // Indicator clicks
    slideIndicators.addEventListener('click', (e) => {
        if (e.target.classList.contains('slide-indicator')) {
            const index = parseInt(e.target.dataset.index);
            goToSlide(index);
            stopAutoplay();
            startAutoplay();
        }
    });
    
    // Play trailer button
    playTrailerBtn.addEventListener('click', () => {
        const movieId = parseInt(playTrailerBtn.dataset.id);
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            openTrailerModal(movie);
            stopAutoplay();
        }
    });
    
    // More info button
    moreInfoBtn.addEventListener('click', () => {
        const movieId = parseInt(moreInfoBtn.dataset.id);
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            openTrailerModal(movie);
            stopAutoplay();
        }
    });
    
    // Initialize
    updateMovieInfo();
    startAutoplay();
    
    // Pause autoplay on hover
    movieSlides.addEventListener('mouseenter', stopAutoplay);
    movieSlides.addEventListener('mouseleave', startAutoplay);
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    movieSlides.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });
    
    movieSlides.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    }, { passive: true });
    
    function handleSwipe() {
        const threshold = 50;
        if (touchStartX - touchEndX > threshold) {
            // Swipe left
            goToSlide(currentIndex + 1);
        } else if (touchEndX - touchStartX > threshold) {
            // Swipe right
            goToSlide(currentIndex - 1);
        }
    }
}

// Initialize trailer modal
function initTrailerModal() {
    const modal = document.querySelector('.trailer-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modal || !closeBtn) return;
    
    closeBtn.addEventListener('click', closeTrailerModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeTrailerModal();
        }
    });
}

// Open trailer modal
function openTrailerModal(movie) {
    const modal = document.querySelector('.trailer-modal');
    const iframe = modal.querySelector('.trailer-iframe');
    const title = modal.querySelector('.modal-movie-title');
    const year = modal.querySelector('.modal-movie-year');
    const rating = modal.querySelector('.modal-movie-rating');
    const duration = modal.querySelector('.modal-movie-duration');
    const description = modal.querySelector('.modal-movie-description');
    const castList = modal.querySelector('.cast-list');
    
    // Set movie details
    iframe.src = movie.trailerUrl;
    title.textContent = movie.title;
    year.textContent = movie.year;
    rating.textContent = movie.rating;
    duration.textContent = movie.duration;
    description.textContent = movie.description;
    
    // Clear and populate cast list
    castList.innerHTML = '';
    movie.cast.forEach(person => {
        const castItem = document.createElement('div');
        castItem.classList.add('cast-member');
        castItem.innerHTML = `
            <img src="${person.photo}" alt="${person.name}" class="cast-photo">
            <div class="cast-name">${person.name}</div>
            <div class="cast-character">${person.character}</div>
        `;
        castList.appendChild(castItem);
    });
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animate modal content
    gsap.fromTo(modal.querySelector('.modal-content'), 
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
    );
}

// Close trailer modal
function closeTrailerModal() {
    const modal = document.querySelector('.trailer-modal');
    const iframe = modal.querySelector('.trailer-iframe');
    
    // Animate modal closing
    gsap.to(modal.querySelector('.modal-content'), {
        scale: 0.9,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset iframe src to stop video
            setTimeout(() => {
                iframe.src = '';
            }, 300);
            
            // Restart carousel autoplay
            const movieSlides = document.querySelector('.movie-slides');
            if (movieSlides) {
                movieSlides.dispatchEvent(new Event('mouseleave'));
            }
        }
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuBtn || !closeMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        
        // Animate menu items
        gsap.from('#mobile-menu ul li', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.4,
            delay: 0.2
        });
    });
    
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

// Initialize GSAP animations
function initGSAPAnimations() {
    // Create a timeline
    const tl = gsap.timeline();
    
    // Header animations
    tl.from('#logo', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.nav-item', {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5')
    .from('.nav-right > *', {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5');
    
    // Hero content animations
    tl.from('#hero-content h1 > *', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.3')
    .from('#hero-content p', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')

    .fromTo('#hero-content .cta-primary, #hero-content .cta-secondary', 
        { scale: 0.8, opacity: 0 },
        { 
            scale: 1, 
            opacity: 1, 
            stagger: 0.2, 
            duration: 0.8, 
            ease: 'back.out(1.7)',
            clearProps: "all" // This ensures all inline styles are removed after animation
        }, '-=0.5')





        .fromTo('#hero-content .tag', 
            { y: 20, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                stagger: 0.1, 
                duration: 0.8, 
                ease: 'power2.out',
                clearProps: "all" // This ensures all inline styles are removed after animation
            }, '-=0.5');



    // Movie showcase animations
    tl.from('#movie-showcase', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=1.5')
    .from('#prev-btn, #next-btn', {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('#slide-indicators .slide-indicator', {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)'
    }, '-=0.5');
    
    // Parallax effect on scroll
    gsap.to('#particles-js', {
        y: 100,
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
}










function initInteractiveElements() {
    // Enhanced nav item hover effects
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const text = link.getAttribute('data-text');
        
        // Create hover line element
        const hoverLine = document.createElement('span');
        hoverLine.classList.add('nav-hover-line');
        link.appendChild(hoverLine);
        
        // Set initial position and styling for the hover line
        gsap.set(hoverLine, {
            position: 'absolute',
            bottom: '0',
            left: '50%',
            width: '0%',
            height: '2px',
            backgroundColor: '#8b5cf6',
            transformOrigin: 'center'
        });
        
        // Mouse enter effect
        item.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                // Animate the hover line from center outward
                gsap.to(hoverLine, {
                    width: '100%',
                    left: '0%',
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                // Text effect
                gsap.to(link, {
                    color: '#8b5cf6', // Accent violet color
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                // Subtle scale effect
                gsap.to(link, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            }
        });
        
        // Mouse leave effect
        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                // Animate the hover line back to center
                gsap.to(hoverLine, {
                    width: '0%',
                    left: '50%',
                    duration: 0.3,
                    ease: 'power2.in'
                });
                
                // Reset text color
                gsap.to(link, {
                    color: 'white',
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            }
        });
        
        // Click effect
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the text content to identify which nav item was clicked
            const navText = link.textContent.trim();
            
            // Handle navigation based on which item was clicked
            if (navText === "Movies") {
                window.location.href = "movies.html";
                return; // Exit early to prevent the visual effects below
            }
            
            // For other nav items, just apply the visual effect without navigation
            // Remove active class and reset all items
            navItems.forEach(i => {
                i.classList.remove('active');
                const iLink = i.querySelector('a');
                const iLine = i.querySelector('.nav-hover-line');
                
                gsap.to(iLink, {
                    color: 'white',
                    scale: 1,
                    duration: 0.3
                });
                
                gsap.to(iLine, {
                    width: '0%',
                    left: '50%',
                    duration: 0.3
                });
            });
            
            // Add active class to clicked item with animation
            item.classList.add('active');
            
            // Active state animations
            gsap.to(link, {
                color: '#8b5cf6', // Accent violet color
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // Animate the active line
            gsap.fromTo(hoverLine, 
                { width: '0%', left: '50%' },
                { 
                    width: '100%', 
                    left: '0%', 
                    duration: 0.5, 
                    ease: 'elastic.out(1, 0.8)',
                    backgroundColor: '#8b5cf6' // Accent color for active state
                }
            );
            
            // Add a subtle pulse animation
            gsap.fromTo(link,
                { boxShadow: '0 0 0 0 rgba(139, 92, 246, 0)' },
                { 
                    boxShadow: '0 0 10px 5px rgba(139, 92, 246, 0)', 
                    duration: 1,
                    ease: 'power2.out'
                }
            );
        });
    });
}












    
    // Button hover effects with GSAP
    const buttons = document.querySelectorAll('.cta-primary, .cta-secondary, .play-trailer, .more-info');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Tag click effect
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Toggle active state
            tag.classList.toggle('active');
            
            // Apply animation
            gsap.fromTo(tag, 
                { scale: 0.9 },
                { scale: 1, duration: 0.3, ease: 'back.out(1.7)' }
            );
        });
    });
    
    // Parallax effect on mouse move
    const heroContent = document.getElementById('hero-content');
    const movieShowcase = document.getElementById('movie-showcase');
    
    if (heroContent && movieShowcase) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            gsap.to(heroContent, {
                x: (x - 0.5) * 20,
                y: (y - 0.5) * 20,
                duration: 1,
                ease: 'power2.out'
            });
            
            gsap.to(movieShowcase, {
                x: (x - 0.5) * -30,
                y: (y - 0.5) * -20,
                duration: 1,
                ease: 'power2.out'
            });
        });
    }























// Trending Carousel Functionality
function initTrendingCarousel() {
    // Sample data for trending movies and shows
    const trendingMovies = [
        {
            id: 101,
            title: "Dune: Part Two",
            year: 2024,
            rating: "PG-13",
            score: 8.7,
            poster: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjhkZWY5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 102,
            title: "Oppenheimer",
            year: 2023,
            rating: "R",
            score: 8.5,
            poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 103,
            title: "Poor Things",
            year: 2023,
            rating: "R",
            score: 8.3,
            poster: "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/RlbR5N6veqw?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 104,
            title: "The Batman",
            year: 2022,
            rating: "PG-13",
            score: 7.8,
            poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtYzk4OGZhOGQwMjUxXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 105,
            title: "Everything Everywhere All at Once",
            year: 2022,
            rating: "R",
            score: 7.9,
            poster: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/wxN1T1uxQ2g?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 106,
            title: "Killers of the Flower Moon",
            year: 2023,
            rating: "R",
            score: 7.7,
            poster: "https://m.media-amazon.com/images/M/MV5BNjQwOGM2YTItMGYwNC00YTM4LWI0Y2QtZjQ2ZDcyMmRjMTFhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/EP34Yoxs3FQ?autoplay=1&mute=1&controls=0&loop=1"
        }
    ];
    
    const trendingShows = [
        {
            id: 201,
            title: "The Last of Us",
            year: 2023,
            rating: "TV-MA",
            score: 8.8,
            poster: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/uLtkt8BonwM?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 202,
            title: "Succession",
            year: 2018,
            rating: "TV-MA",
            score: 8.9,
            poster: "https://m.media-amazon.com/images/M/MV5BZTY0YjU0NTUtMGRmNS00NDMyLWI2MzYtNjM2MmM1M2FkMjkyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/OzYxJV_rmE8?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 203,
            title: "Shogun",
            year: 2024,
            rating: "TV-MA",
            score: 9.1,
            poster: "https://m.media-amazon.com/images/M/MV5BYzQxOGY4MWQtYjg3Zi00YTQ3LWFhZDYtMmNhNjVkYTI2YmJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/yAN5uspO_hk?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 204,
            title: "True Detective",
            year: 2014,
            rating: "TV-MA",
            score: 8.9,
            poster: "https://m.media-amazon.com/images/M/MV5BMmRlNDE0ZDctZTMwYi00MWQ2LWI1NTMtZDIzNDM3OWI0YzQ0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/YpUznQds8p4?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 205,
            title: "Severance",
            year: 2022,
            rating: "TV-MA",
            score: 8.7,
            poster: "https://m.media-amazon.com/images/M/MV5BMjkxMGQyMmEtMjlkMS00OTgzLTk1MWEtNzMzNzEwNTQyN2NkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/xEQP4VVuyrY?autoplay=1&mute=1&controls=0&loop=1"
        },
        {
            id: 206,
            title: "The Bear",
            year: 2022,
            rating: "TV-MA",
            score: 8.6,
            poster: "https://m.media-amazon.com/images/M/MV5BYmY1MmI5ZDMtZTRkYi00M2RjLWE2Y2ItMmI2MWIxNzQ3OWFmXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
            trailerUrl: "https://www.youtube.com/embed/y-cqqAJIXhs?autoplay=1&mute=1&controls=0&loop=1"
        }
    ];







    initCarousel();
    
    // DOM Elements - Cache for better performance
    const trendingSection = document.querySelector('.trending-section');
    const trendingTabs = document.querySelectorAll('.trending-tab');
    const trendingCarousel = document.querySelector('.trending-carousel');
    const trendingTrack = document.querySelector('.trending-track');
    const prevBtn = document.querySelector('.trending-prev');
    const nextBtn = document.querySelector('.trending-next');
    const progressDots = document.querySelector('.trending-progress');
    
    if (!trendingSection || !trendingTrack) return;
    
    // State variables
    let currentTab = 'movies';
    let currentIndex = 0;
    let itemWidth = 240; // Default width + gap
    let visibleItems = 4; // Default number of visible items
    let maxIndex = 0;
    let isAnimating = false;
    let resizeTimer;
    let trailerTimers = new Map(); // Store trailer timers for cleanup
    let loadedTrailers = new Map(); // Track loaded trailers
    
    // Initialize the carousel
    function initCarousel() {
        // Determine visible items based on screen width
        updateDimensions();
        
        // Load initial content
        loadContent(currentTab);
        
        // Create progress dots
        updateProgressDots();
        
        // Add event listeners - use passive for better performance
        window.addEventListener('resize', handleResize, { passive: true });
        
        if (prevBtn) prevBtn.addEventListener('click', goToPrev, { passive: true });
        if (nextBtn) nextBtn.addEventListener('click', goToNext, { passive: true });
        
        // Tab switching with event delegation
        const tabContainer = trendingTabs[0]?.parentElement;
        if (tabContainer) {
            tabContainer.addEventListener('click', (e) => {
                const tab = e.target.closest('.trending-tab');
                if (!tab) return;
                
                const tabType = tab.getAttribute('data-tab');
                if (tabType !== currentTab) {
                    // Update active tab
                    trendingTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Clear any active trailers
                    clearAllTrailers();
                    
                    // Switch tabs with smooth animation
                    switchTab(tabType);
                }
            }, { passive: true });
        }
        
        // Set up lazy loading with Intersection Observer
        setupLazyLoading();
        
        // Set up event delegation for item interactions
        setupItemInteractions();
    }
    
    // Update dimensions based on screen width
    function updateDimensions() {
        const width = window.innerWidth;
        
        if (width < 640) {
            visibleItems = 2;
            itemWidth = 160;
        } else if (width < 768) {
            visibleItems = 3;
            itemWidth = 180;
        } else if (width < 1024) {
            visibleItems = 4;
            itemWidth = 200;
        } else {
            visibleItems = 5;
            itemWidth = 240;
        }
    }
    
    // Switch tab with smooth animation
    function switchTab(tabType) {
        // Simple fade transition
        gsap.to(trendingTrack, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                // Load new content
                currentTab = tabType;
                currentIndex = 0;
                loadContent(tabType);
                updateProgressDots();
                
                // Fade in new content
                gsap.to(trendingTrack, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });
    }
    
    // Load content based on tab - optimized for performance
    function loadContent(tabType) {
        // Clear existing content
        trendingTrack.innerHTML = '';
        
        // Get data based on tab
        const data = tabType === 'movies' ? trendingMovies : trendingShows;
        maxIndex = Math.max(0, data.length - visibleItems);
        
        // Create items
        data.forEach((item) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('trending-item');
            itemElement.dataset.id = item.id;
            itemElement.dataset.trailer = item.trailerUrl;
            
            // Use template literals for better performance
            itemElement.innerHTML = `
                <img src="${item.poster}" alt="${item.title}" class="trending-poster" loading="lazy">
                <div class="trending-overlay">
                    <h4 class="trending-item-title">${item.title}</h4>
                    <div class="trending-item-info">
                        <span>${item.year} • ${item.rating}</span>
                        <div class="trending-item-rating">
                            <i class="fas fa-star"></i>
                            <span>${item.score}</span>
                        </div>
                    </div>
                    <div class="trending-item-actions">
                        <button class="trending-item-btn play-btn" data-id="${item.id}">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="trending-item-btn info-btn" data-id="${item.id}">
                            <i class="fas fa-info-circle"></i>
                        </button>
                        <button class="trending-item-btn add-btn" data-id="${item.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="trending-video-preview"></div>
            `;
            
            trendingTrack.appendChild(itemElement);
        });
        
        // Position the track without animation
        gsap.set(trendingTrack, { 
            x: -currentIndex * itemWidth
        });
    }
    











    // Set up event delegation for item interactions
    function setupItemInteractions() {
        // Use event delegation for hover effects
        if (trendingTrack) {
            // Mouse enter for items
            trendingTrack.addEventListener('mouseenter', (e) => {
                const item = e.target.closest('.trending-item');
                if (!item) return;
                
                const itemId = item.dataset.id;
                const trailerUrl = item.dataset.trailer;
                
                // Clear any existing timer
                if (trailerTimers.has(itemId)) {
                    clearTimeout(trailerTimers.get(itemId));
                }
                
                // Set new timer with delay to prevent loading on quick hover
                const timer = setTimeout(() => {
                    loadTrailer(item, trailerUrl, itemId);
                }, 2000);
                
                trailerTimers.set(itemId, timer);
            }, { capture: true, passive: true });
            
            // Mouse leave for items
            trendingTrack.addEventListener('mouseleave', (e) => {
                const item = e.target.closest('.trending-item');
                if (!item) return;
                
                const itemId = item.dataset.id;
                
                // Clear timer if exists
                if (trailerTimers.has(itemId)) {
                    clearTimeout(trailerTimers.get(itemId));
                    trailerTimers.delete(itemId);
                }
                
                // Hide trailer if loaded
                if (loadedTrailers.has(itemId)) {
                    const videoContainer = item.querySelector('.trending-video-preview');
                    
                    gsap.to(videoContainer, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            if (!item.matches(':hover')) {
                                videoContainer.innerHTML = '';
                                loadedTrailers.delete(itemId);
                            }
                        }
                    });
                }
            }, { capture: true, passive: true });
        }
        
















        // Button click handlers with event delegation
        document.addEventListener('click', (e) => {
            // Play button
            const playBtn = e.target.closest('.trending-item-btn.play-btn');
            if (playBtn) {
                const itemId = parseInt(playBtn.dataset.id);
                const data = [...trendingMovies, ...trendingShows];
                const item = data.find(i => i.id === itemId);
                
                if (item) {
                    // Visual feedback
                    gsap.fromTo(playBtn, 
                        { scale: 1 },
                        { 
                            scale: 0.9, 
                            duration: 0.1,
                            yoyo: true,
                            repeat: 1,
                            force3D: true,
                            onComplete: () => {
                                // Open trailer modal
                                openTrailerModal(item);
                            }
                        }
                    );
                }
                return;
            }
            
            // Info button
            const infoBtn = e.target.closest('.trending-item-btn.info-btn');
            if (infoBtn) {
                // Visual feedback
                gsap.fromTo(infoBtn,
                    { scale: 1 },
                    { 
                        scale: 1.2, 
                        duration: 0.2, 
                        yoyo: true, 
                        repeat: 1,
                        force3D: true
                    }
                );
                return;
            }
            
            // Add button
            const addBtn = e.target.closest('.trending-item-btn.add-btn');
            if (addBtn) {
                // Visual feedback
                gsap.to(addBtn, {
                    backgroundColor: '#22d3ee',
                    scale: 1.1,
                    duration: 0.3,
                    force3D: true,
                    onComplete: () => {
                        // Change icon to check
                        addBtn.innerHTML = '<i class="fas fa-check"></i>';
                        
                        // Reset after delay
                        setTimeout(() => {
                            addBtn.innerHTML = '<i class="fas fa-plus"></i>';
                            gsap.to(addBtn, {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                scale: 1,
                                duration: 0.3,
                                force3D: true
                            });
                        }, 2000);
                    }
                });
                return;
            }
        }, { passive: true });
    }





















    
    // Load trailer with optimized approach
    function loadTrailer(item, trailerUrl, itemId) {
        const videoContainer = item.querySelector('.trending-video-preview');
        
        // Only load if not already loaded
        if (!loadedTrailers.has(itemId)) {
            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.src = trailerUrl;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            
            // Track this trailer
            loadedTrailers.set(itemId, iframe);
            
            // Add to container
            videoContainer.innerHTML = '';
            videoContainer.appendChild(iframe);
            
            // Fade in with hardware acceleration
            gsap.fromTo(videoContainer, 
                { opacity: 0 },
                { 
                    opacity: 1, 
                    duration: 0.4,
                    ease: "power2.out",
                    force3D: true
                }
            );
        } else {
            // If already loaded but hidden, show it
            gsap.to(videoContainer, {
                opacity: 1,
                duration: 0.3,
                force3D: true
            });
        }
    }
























    
    // Clear all trailers
    function clearAllTrailers() {
        // Clear all timers
        trailerTimers.forEach((timer) => {
            clearTimeout(timer);
        });
        trailerTimers.clear();
        
        // Clear all loaded trailers
        loadedTrailers.forEach((iframe, id) => {
            const item = document.querySelector(`.trending-item[data-id="${id}"]`);
            if (item) {
                const container = item.querySelector('.trending-video-preview');
                if (container) {
                    container.innerHTML = '';
                }
            }
        });
        loadedTrailers.clear();
    }














    
    // Update track position with optimized animation

    function updateTrackPosition() {
        gsap.to(trendingTrack, {
            x: -currentIndex * itemWidth,
            duration: 0.5,
            ease: "power3.out",
            force3D: true, // Force hardware acceleration
            overwrite: "auto" // Prevent animation conflicts
        });
        
        // Update active dot
        const dots = document.querySelectorAll('.trending-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }













    
    // Create or update progress dots
    function updateProgressDots() {
        // Use document fragment for better performance
        const fragment = document.createDocumentFragment();
        progressDots.innerHTML = '';
        
        const data = currentTab === 'movies' ? trendingMovies : trendingShows;
        const dotCount = Math.min(5, Math.ceil(data.length / visibleItems));
        
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('trending-dot');
            if (i === 0) dot.classList.add('active');
            dot.dataset.index = i;
            fragment.appendChild(dot);
        }
        
        // Append all dots at once
        progressDots.appendChild(fragment);
        
        // Use event delegation for dot clicks
        progressDots.addEventListener('click', (e) => {
            const dot = e.target.closest('.trending-dot');
            if (!dot || isAnimating) return;
            
            // Clear any active trailers
            clearAllTrailers();
            
            currentIndex = parseInt(dot.dataset.index);
            updateTrackPosition();
        }, { passive: true });
    }
    


















    // Navigation functions with optimized animations
    // Enhanced goToNext with smoother, more buttery animation
// Enhanced goToNext with smoother, more buttery animation
function goToNext() {
    if (isAnimating) return;
    isAnimating = true;
    
    // Clear any active trailers
    clearAllTrailers();
    
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateTrackPosition();
    } else {
        // Elastic overscroll effect with hardware acceleration
        gsap.to(trendingTrack, {
            x: -(currentIndex * itemWidth) - 30,
            duration: 0.3,
            ease: "power2.out",
            force3D: true,
            onComplete: () => {
                gsap.to(trendingTrack, {
                    x: -currentIndex * itemWidth,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.5)",
                    force3D: true
                });
            }
        });
    }
    
    setTimeout(() => {
        isAnimating = false;
    }, 500);
}





















    
    function goToPrev() {
        if (isAnimating) return;
        isAnimating = true;
        
        // Clear any active trailers
        clearAllTrailers();
        
        if (currentIndex > 0) {
            currentIndex--;
            updateTrackPosition();
        } else {
            // Simple bounce effect
            gsap.to(trendingTrack, {
                x: 20,
                duration: 0.2,
                onComplete: () => {
                    gsap.to(trendingTrack, {
                        x: 0,
                        duration: 0.3
                    });
                }
            });
        }
        
        setTimeout(() => {
            isAnimating = false;
        }, 400);
    }
    
    // Handle window resize with debouncing
    function handleResize() {
        // Clear previous timer
        clearTimeout(resizeTimer);
        
        // Set new timer
        resizeTimer = setTimeout(() => {
            // Clear any active trailers
            clearAllTrailers();
            
            // Recalculate dimensions
            updateDimensions();
            
            // Update maxIndex
            const data = currentTab === 'movies' ? trendingMovies : trendingShows;
            maxIndex = Math.max(0, data.length - visibleItems);
            
            // Ensure currentIndex is valid
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            
            // Update track position without animation
            gsap.set(trendingTrack, { 
                x: -currentIndex * itemWidth,
                force3D: true
            });
            
            // Update progress dots
            updateProgressDots();
        }, 150); // 150ms debounce
    }
    

















    // Set up lazy loading with Intersection Observer
    // Set up lazy loading with Intersection Observer
    function setupLazyLoading() {
        const options = {
            root: null,
            rootMargin: '100px', // Load earlier for smoother experience
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Use GSAP timeline for synchronized animations
                    const tl = gsap.timeline({
                        defaults: {
                            ease: "power3.out",
                            force3D: true // Force hardware acceleration
                        }
                    });
                    
                    // Animate in the carousel
                    tl.to(trendingCarousel, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        clearProps: "y" // Clear transform after animation
                    });
                    
                    // Get all items for staggered animation
                    const items = document.querySelectorAll('.trending-item');
                    
                    // Stagger items with better performance
                    tl.fromTo(items, 
                        { 
                            opacity: 0, 
                            y: 20,
                            scale: 0.95
                        },
                        { 
                            opacity: 1, 
                            y: 0,
                            scale: 1,
                            duration: 0.6, 
                            stagger: { 
                                amount: 0.3, // Total stagger time
                                from: "start"
                            },
                            clearProps: "y,scale" // Clear transforms after animation
                        },
                        "-=0.3" // Overlap with previous animation
                    );
                    
                    // Stop observing after animation
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        // Start observing
        if (trendingCarousel) {
            observer.observe(trendingCarousel);
        }
    }












    
    // Initialize on page load
    initCarousel();


// Initialize trending carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Call the trending carousel initialization
    initTrendingCarousel();
});









// Initialize signup modal functionality
function initSignupModal() {
    const modal = document.getElementById('signup-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalContainer = document.querySelector('.modal-container');
    const form = document.getElementById('signup-form');
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    
    if (!modal || !modalContainer) return;
    
    // Create particles for modal background
    createModalParticles();
    
    // Toggle password visibility with animation
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon with animation
            const icon = togglePassword.querySelector('i');
            
            gsap.to(icon, {
                scale: 0,
                duration: 0.2,
                ease: "power2.in",
                onComplete: () => {
                    icon.classList.toggle('fa-eye');
                    icon.classList.toggle('fa-eye-slash');
                    
                    gsap.to(icon, {
                        scale: 1,
                        duration: 0.2,
                        ease: "back.out(1.7)"
                    });
                }
            });
        });
    }
    
    // Fix for close button - direct event handler
    if (closeBtn) {
        closeBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Animate out with GSAP
            const tl = gsap.timeline({
                onComplete: () => {
                    modal.style.pointerEvents = 'none';
                }
            });
            
            tl.to(modalContainer, {
                opacity: 0,
                scale: 0.95,
                y: -20,
                duration: 0.4,
                ease: "power3.in"
            })
            .to(modal, {
                opacity: 0,
                duration: 0.3,
                ease: "power3.in"
            }, "-=0.2");
        };
    }
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal && closeBtn) {
            closeBtn.onclick(new Event('click'));
        }
    });
    
    // Form submission with enhanced animations
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Animate button
            const submitBtn = form.querySelector('button[type="submit"]');
            
            gsap.timeline()
                .to(submitBtn, {
                    scale: 0.95,
                    duration: 0.1,
                    ease: "power2.in"
                })
                .to(submitBtn, {
                    scale: 1,
                    duration: 0.2,
                    ease: "back.out(1.7)",
                    onComplete: () => {
                        // Create success animation
                        const successTl = gsap.timeline();
                        
                        // First shrink the text
                        successTl.to(submitBtn.querySelector('span'), {
                            opacity: 0,
                            scale: 0.5,
                            duration: 0.2,
                            ease: "power2.in"
                        })
                        .to(submitBtn.querySelector('i'), {
                            opacity: 0,
                            scale: 0.5,
                            duration: 0.2,
                            ease: "power2.in"
                        }, "-=0.2")
                        // Change the background
                        .to(submitBtn, {
                            background: 'linear-gradient(to right, #10B981, #059669)',
                            duration: 0.3,
                            ease: "power2.inOut"
                        }, "-=0.1")
                        // Show success message
                        .call(() => {
                            submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Success!';
                        })
                        // Animate in the success message
                        .fromTo(submitBtn.children, {
                            opacity: 0,
                            scale: 0.5
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.3,
                            ease: "back.out(1.7)"
                        })
                        // Add a glow effect
                        .to(submitBtn, {
                            boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
                            duration: 0.5
                        }, "-=0.3");
                        
                        // Close modal after delay with success animation
                        setTimeout(() => {
                            // First animate success button
                            gsap.to(submitBtn, {
                                y: -10,
                                opacity: 0,
                                duration: 0.4,
                                ease: "power3.in"
                            });
                            
                            // Then close modal
                            setTimeout(() => {
                                if (closeBtn) closeBtn.onclick(new Event('click'));
                                
                                // Reset form after closing
                                setTimeout(() => {
                                    form.reset();
                                    submitBtn.innerHTML = '<span>Create Account</span><i class="fas fa-arrow-right ml-2"></i>';
                                    gsap.set(submitBtn, {
                                        clearProps: "all"
                                    });
                                }, 500);
                            }, 400);
                        }, 1500);
                    }
                });
        });
    }
    
    // Enhanced input focus animations
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        const parent = input.closest('.form-group');
        
        input.addEventListener('focus', () => {
            gsap.to(parent, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
            
            // Add glow effect
            gsap.to(input, {
                boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.3), 0 0 15px rgba(139, 92, 246, 0.2)',
                duration: 0.3
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(parent, {
                scale: 1,
                duration: 0.3,
                ease: "power2.in"
            });
            
            // Remove glow effect if not filled
            if (!input.value) {
                gsap.to(input, {
                    boxShadow: 'none',
                    duration: 0.3
                });
            }
        });
    });
    
    // Social button hover effects
    const socialBtns = document.querySelectorAll('.social-btn');
    
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                y: -3,
                boxShadow: '0 6px 15px rgba(139, 92, 246, 0.3)',
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                y: 0,
                boxShadow: '0 0 0 rgba(139, 92, 246, 0)',
                duration: 0.3,
                ease: "power2.in"
            });
        });
    });
}

// Create particles for modal background
function createModalParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random opacity and color
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Random color variation
        const hue = Math.random() * 60 + 240; // Blue to purple range
        particle.style.backgroundColor = `hsla(${hue}, 70%, 60%, 0.3)`;
        
        // Add to container
        container.appendChild(particle);
        
        // Animate with GSAP - more complex movement
        gsap.to(particle, {
            x: `${Math.random() * 120 - 60}px`,
            y: `${Math.random() * 120 - 60}px`,
            duration: Math.random() * 15 + 15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 5
        });
        
        // Pulse animation
        gsap.to(particle, {
            opacity: Math.random() * 0.7 + 0.1,
            scale: Math.random() * 1.5 + 0.5,
            duration: Math.random() * 4 + 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 5
        });
    }
}

// Connect CTA button to signup modal
function connectCTAtoSignupModal() {
    const ctaButton = document.getElementById('open-signup');
    const modal = document.getElementById('signup-modal');
    const modalContainer = document.querySelector('.modal-container');
    
    if (!ctaButton || !modal || !modalContainer) return;
    
    // Add click event to CTA button
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Show modal and enable pointer events
        modal.style.pointerEvents = 'auto';
        
        // Animate with GSAP
        const tl = gsap.timeline();
        
        tl.to(modal, {
            opacity: 1,
            duration: 0.4,
            ease: "power3.out"
        })
        .to(modalContainer, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.2")
        .fromTo('.form-group', {
            opacity: 0,
            y: 30,
            scale: 0.95
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out"
        }, "-=0.3")
        .fromTo('#signup-form button, #signup-form .flex, #signup-form .grid, #signup-form .text-center', {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.4,
            ease: "power2.out"
        }, "-=0.2");
        
        // Add glow effect to modal
        gsap.fromTo(modalContainer, 
            { boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)' },
            { 
                boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.2)',
                duration: 1,
                ease: "power2.inOut"
            }
        );
    });
    
    // Add hover animation to CTA button
    ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
            scale: 1.05,
            boxShadow: '0 8px 25px rgba(139, 92, 246, 0.5)',
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
            scale: 1,
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
            duration: 0.3,
            ease: "power2.in"
        });
    });
} }