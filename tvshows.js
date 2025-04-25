// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#8b5cf6" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8b5cf6",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    }
  });
  
  // Force visibility of the filter section
  document.querySelector('.filter-by-section').style.opacity = "1";
  document.querySelector('.filter-underline').style.opacity = "1";
  document.querySelector('.filters').style.opacity = "1";
});

// Custom Cursor
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-dot-outline');
let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

// Check if custom cursor elements exist
if (cursorDot && cursorOutline) {
  document.body.style.cursor = 'none';
  
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });
  
  function animateCursor() {
    outlineX += (mouseX - outlineX) * 0.2;
    outlineY += (mouseY - outlineY) * 0.2;
    
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';
  });
  
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
  });
} else {
  document.body.style.cursor = 'auto';
}

// Make sure cursor is visible if custom cursor fails
setTimeout(() => {
  if (document.body.style.cursor === 'none' && 
      (!cursorDot || !cursorOutline || 
       window.getComputedStyle(cursorDot).opacity === '0')) {
    document.body.style.cursor = 'auto';
    const elements = document.querySelectorAll('button, .filter-tag, .watchlist-badge, .show-card, .modal-close');
    elements.forEach(el => el.style.cursor = 'pointer');
  }
}, 2000);

// Interactive elements cursor effects
const interactiveElements = document.querySelectorAll('button, .filter-tag, .watchlist-badge, .show-card');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursorOutline) {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.borderColor = 'var(--secondary)';
    }
  });
  
  el.addEventListener('mouseleave', () => {
    if (cursorOutline) {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.borderColor = 'var(--primary)';
        }
      });
    });

// Tilt effect for show cards
  const showCards = document.querySelectorAll('.show-card');
  showCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;
    
    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
    card.classList.add('tilted');
    });
    
    card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
    card.classList.remove('tilted');
      });
    });
    
// Create "No Results" message if it doesn't exist
if (!document.querySelector('.no-results')) {
  const noResultsMessage = document.createElement('div');
  noResultsMessage.className = 'no-results';
  noResultsMessage.textContent = 'No shows found for this filter. Try another category.';
  document.querySelector('.shows-container').appendChild(noResultsMessage);
}

// Manually set visibility and animate "Filter by Genre" section
function initializeFilterSection() {
  // First make sure elements exist
  const filterSection = document.querySelector('.filter-by-section');
  const filterUnderline = document.querySelector('.filter-underline');
  const filtersContainer = document.querySelector('.filters');
  
  if (filterSection) {
    // Force visibility by overriding CSS
    filterSection.style.opacity = "1";
  }
  
  if (filterUnderline) {
    filterUnderline.style.opacity = "1";
    // Add animation manually
    filterUnderline.style.animation = "scaleWidth 0.8s ease forwards";
  }
  
  if (filtersContainer) {
    filtersContainer.style.opacity = "1";
  }
  
  // Use GSAP for additional animations
  gsap.from('.filter-heading', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.3,
        onComplete: () => {
      document.querySelector('.filter-heading').style.opacity = "1";
    }
  });
  
  gsap.from('.filter-underline', {
    scaleX: 0,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.5,
    onComplete: () => {
      document.querySelector('.filter-underline').style.opacity = "1";
    }
  });
  
  gsap.from('.filter-tag', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.7,
    ease: 'back.out(1.7)',
        onComplete: () => {
      document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.style.opacity = "1";
      });
    }
  });
}

// Genre filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the filter section with forced visibility
  initializeFilterSection();
  
  // Wait for DOM to be fully loaded
  const filterTags = document.querySelectorAll('.filter-tag');
  const showCards = document.querySelectorAll('.show-card');
  const noResultsMessage = document.querySelector('.no-results') || 
    document.querySelector('.shows-container').appendChild(
      Object.assign(document.createElement('div'), {
        className: 'no-results',
        textContent: 'No shows found for this filter. Try another category.'
      })
    );

  // Apply filter function - Extract to reuse
  function applyFilter(filterText) {
    // Track if we found any matches
    let hasMatches = false;
    
    filterText = filterText.toLowerCase();
    
    // Filter the show cards
    showCards.forEach(card => {
      // Get all genre tags from this card - IMPORTANT: Select within the current card!
      const genreElements = card.querySelectorAll('.genre-tag');
      const genres = Array.from(genreElements).map(el => el.textContent.toLowerCase());
      
      if (filterText === 'all' || genres.includes(filterText)) {
        card.style.display = 'block';
        setTimeout(() => card.classList.add('visible'), 10);
        hasMatches = true;
    } else {
        card.style.display = 'none';
        card.classList.remove('visible');
    }
    });
    
    // Show/hide no results message
    if (hasMatches) {
      noResultsMessage.classList.remove('visible');
    } else {
      noResultsMessage.classList.add('visible');
    }
  }

  // Add click events to all filter tags
  filterTags.forEach(tag => {
    tag.addEventListener('click', function() {
      // Update active class
      filterTags.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Apply the filter
      applyFilter(this.textContent);
      
      // Animate the active filter
      gsap.from(this, {
        scale: 1.2,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    });
  });
  
  // Trigger "All" filter on load to ensure everything is visible initially
  const allFilter = document.querySelector('.filter-tag.active') || document.querySelector('.filter-tag');
  if (allFilter) {
    // Set timeout to ensure DOM is ready
    setTimeout(() => {
      allFilter.classList.add('active');
      applyFilter(allFilter.textContent);
    }, 100);
  }
});

// Staggered animation for show cards
function animateCards() {
  showCards.forEach((card, index) => {
    setTimeout(() => card.classList.add('visible'), index * 100);
  });
}
window.addEventListener('load', animateCards);

// Watchlist functionality
const watchlistBadges = document.querySelectorAll('.watchlist-badge');
watchlistBadges.forEach(badge => {
  badge.addEventListener('click', () => {
    badge.classList.toggle('active');
    badge.textContent = badge.classList.contains('active') ? '✓' : '+';
    
    // Add a small pop animation when toggling
    gsap.from(badge, {
      scale: 1.2,
      duration: 0.3,
      ease: 'back.out(1.7)'
    });
  });
});

// Modal functionality
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const watchButtons = document.querySelectorAll('.watch-btn');

function populateModal(show) {
  const title = show.querySelector('.show-title').textContent;
  const poster = show.querySelector('.show-poster').src;
  const year = show.querySelector('.show-year').textContent;
  
  document.querySelector('.modal-title').textContent = title;
  document.querySelector('.modal-poster').src = poster;
  document.querySelector('.modal-backdrop').src = poster.replace('/w500/', '/original/');
  document.querySelector('.modal-info').querySelectorAll('span')[0].textContent = year;
}

watchButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.show-card');
    populateModal(card);
    
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.style.opacity = '1';
      modal.classList.add('active');
    }, 10);
  });
});

function closeModal() {
  modal.style.opacity = '0';
  modal.classList.remove('active');
  setTimeout(() => modal.style.display = 'none', 300);
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

showCards.forEach(card => observer.observe(card));

// GSAP animations for header
function animateHeader() {
  gsap.from('.header h1', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
  
  gsap.from('.header p', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power2.out'
  });
}

// Additional initialization on window load
window.addEventListener('load', () => {
  // Initialize header animations
  animateHeader();
  
  // Force visibility of filter section again (redundant but ensures it works)
  setTimeout(() => {
    document.querySelector('.filter-by-section').style.opacity = "1";
    document.querySelector('.filter-underline').style.opacity = "1";
    document.querySelector('.filters').style.opacity = "1";
    
    // Force visibility on all filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
      tag.style.opacity = "1";
    });
  }, 500);
});