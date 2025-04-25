// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-dot-outline');
let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // Position the dot cursor directly at the mouse position
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

// Animation loop for smooth cursor outline movement
function animateCursor() {
  // Calculate the outline position with smooth follow effect
  outlineX += (mouseX - outlineX) * 0.2;
  outlineY += (mouseY - outlineY) * 0.2;
  
  // Apply the calculated position to the outline
  cursorOutline.style.left = `${outlineX}px`;
  cursorOutline.style.top = `${outlineY}px`;
  
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hide/show cursor when leaving/entering the window
document.addEventListener('mouseenter', () => {
  cursorDot.style.opacity = '1';
  cursorOutline.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  cursorDot.style.opacity = '0';
  cursorOutline.style.opacity = '0';
});

// Custom cursor behavior for interactive elements
const interactiveElements = document.querySelectorAll('button, .filter-tag, .watchlist-badge, .movie-card');

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorOutline.style.borderColor = 'var(--secondary)';
  });
  
  el.addEventListener('mouseleave', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorOutline.style.borderColor = 'var(--primary)';
  });
});

// Tilt effect for movie cards
const movieCards = document.querySelectorAll('.movie-card');

movieCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation values based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
    const rotateX = -((y - centerY) / centerY) * 5; // Max 5 degrees
    
    // Apply the 3D rotation
    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
    card.classList.add('tilted');
  });
  
  card.addEventListener('mouseleave', () => {
    // Reset rotation on mouse leave
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
    card.classList.remove('tilted');
  });
});

// Staggered animation for movie cards
function animateCards() {
  const cards = document.querySelectorAll('.movie-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 100);
  });
}

window.addEventListener('load', animateCards);

// Filter functionality
const filterTags = document.querySelectorAll('.filter-tag');

filterTags.forEach(tag => {
  tag.addEventListener('click', () => {
    // Remove active class from all filters
    filterTags.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked filter
    tag.classList.add('active');
    
    const filter = tag.textContent.toLowerCase();
    
    // Filter the movie cards
    movieCards.forEach(card => {
      const genres = Array.from(card.querySelectorAll('.genre-tag'))
        .map(genre => genre.textContent.toLowerCase());
      
      if (filter === 'all' || genres.includes(filter)) {
        card.style.display = 'block';
        // Trigger re-animation
        setTimeout(() => {
          card.classList.add('visible');
        }, 100);
      } else {
        card.style.display = 'none';
        card.classList.remove('visible');
      }
    });
  });
});

// Watchlist functionality
const watchlistBadges = document.querySelectorAll('.watchlist-badge');

watchlistBadges.forEach(badge => {
  badge.addEventListener('click', () => {
    badge.classList.toggle('active');
    if (badge.classList.contains('active')) {
      badge.textContent = '✓';
    } else {
      badge.textContent = '+';
    }
  });
});

// Modal functionality
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const watchButtons = document.querySelectorAll('.watch-btn');

// Helper function to populate modal with movie data
function populateModal(movie) {
  const title = movie.querySelector('.movie-title').textContent;
  const poster = movie.querySelector('.movie-poster').src;
  const year = movie.querySelector('.movie-year').textContent;
  const rating = movie.querySelector('.movie-rating span:last-child').textContent;
  
  const modalTitle = document.querySelector('.modal-title');
  const modalPoster = document.querySelector('.modal-poster');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalInfo = document.querySelector('.modal-info');
  
  modalTitle.textContent = title;
  modalPoster.src = poster;
  modalBackdrop.src = poster.replace('/w500/', '/original/');
  
  // Update other modal information
  modalInfo.querySelectorAll('span')[0].textContent = year;
}

// Open modal when clicking "Watch Now"
watchButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.movie-card');
    populateModal(card);
    
    // Show modal with animation
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.style.opacity = '1';
      modal.classList.add('active');
    }, 10);
  });
});

// Close modal when clicking close button or outside the modal
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.opacity = '0';
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// Escape key closes modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    closeModal();
  }
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe all movie cards for scroll animation
movieCards.forEach(card => {
  observer.observe(card);
});

// Add cast hover effects
const castMembers = document.querySelectorAll('.cast-member');
castMembers.forEach(member => {
  member.addEventListener('mouseenter', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorOutline.style.borderColor = 'var(--primary)';
  });
  
  member.addEventListener('mouseleave', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorOutline.style.borderColor = 'var(--primary)';
  });
});

// Enhance accessibility - add keyboard navigation
document.addEventListener('keydown', e => {
  // Add keyboard accessibility for interactive elements
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

// Reset to mouse navigation when mouse is moved
document.addEventListener('mousemove', () => {
  document.body.classList.remove('keyboard-navigation');
});

// Initialize particles.js for the background effect (ADDED)
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
});