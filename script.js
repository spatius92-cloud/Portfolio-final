/* ============================================ */
/* PORTFOLIO WEBSITE - JAVASCRIPT */
/* ============================================ */

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Throttle function to limit function calls
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// NAVIGATION MENU TOGGLE
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// DARK MODE TOGGLE
// ============================================

const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check for saved preference or system preference
function initializeDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode) {
        document.body.classList.toggle('light-mode', savedMode === 'light');
    } else if (!prefersDark) {
        document.body.classList.add('light-mode');
    }
    
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const isDark = !document.body.classList.contains('light-mode');
    darkModeToggle.innerHTML = isDark ? '<span class="mode-icon">🌙</span>' : '<span class="mode-icon">☀️</span>';
}

function applyDocumentaryThumbnail() {
    const documentaryVideo = document.getElementById('documentaryVideo');
    if (!documentaryVideo) return;
    // Target frame time in seconds (specific static frame)
    const targetTime = 3.0;

    const capturePoster = () => {
        if (!documentaryVideo.videoWidth || !documentaryVideo.videoHeight) return;
        const canvas = document.createElement('canvas');
        canvas.width = documentaryVideo.videoWidth;
        canvas.height = documentaryVideo.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(documentaryVideo, 0, 0, canvas.width, canvas.height);
        try {
            documentaryVideo.poster = canvas.toDataURL('image/jpeg', 0.85);
        } catch (error) {
            console.warn('Could not capture documentary thumbnail:', error);
        }
    };

    // Wait for metadata to determine duration and dimensions, then seek to targetTime (with fallback)
    const onLoadedMetadata = () => {
        let seekTime = targetTime;
        if (isFinite(documentaryVideo.duration) && documentaryVideo.duration > 0) {
            // If video shorter than targetTime, choose midpoint instead
            if (documentaryVideo.duration <= targetTime) {
                seekTime = Math.max(0, documentaryVideo.duration / 2);
            }
        }

        const onSeeked = () => {
            capturePoster();
            // restore playback position to start (optional)
            documentaryVideo.currentTime = 0;
            documentaryVideo.removeEventListener('seeked', onSeeked);
        };

        documentaryVideo.addEventListener('seeked', onSeeked, { once: true });
        try {
            documentaryVideo.currentTime = seekTime;
        } catch (err) {
            // Some browsers may throw if seeking too early; try again after a short delay
            setTimeout(() => {
                try { documentaryVideo.currentTime = seekTime; } catch (e) { /* ignore */ }
            }, 200);
        }
    };

    documentaryVideo.addEventListener('loadedmetadata', onLoadedMetadata, { once: true });
}

// Initialize dark mode on page load
function initializeUI() {
    initializeDarkMode();
    applyDocumentaryThumbnail();
}

document.addEventListener('DOMContentLoaded', initializeUI);

// ============================================
// SCROLL PROGRESS BAR

// Initialize dark mode on page load
function initializeUI() {
    initializeDarkMode();
    applyDocumentaryThumbnail();
}

document.addEventListener('DOMContentLoaded', initializeUI);

// ============================================
// SCROLL PROGRESS BAR
// ============================================

const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', throttle(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollPercent = (scrolled / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}, 10));

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PORTFOLIO FILTERING
// ============================================

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const viewBtns = document.querySelectorAll('.view-btn');

let currentLightboxIndex = 0;
let lightboxImages = [];

function openLightbox(imageUrl, index = 0) {
    lightbox.classList.add('active');
    lightboxImage.src = imageUrl;
    currentLightboxIndex = index;
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
    lightboxImage.src = lightboxImages[currentLightboxIndex];
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    lightboxImage.src = lightboxImages[currentLightboxIndex];
}

// Collect all lightbox images
lightboxImages = Array.from(viewBtns).map(btn => btn.getAttribute('data-lightbox'));

// Add click listeners to view buttons
viewBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        if (btn.target !== '_blank') {
            e.preventDefault();
            const imageUrl = btn.getAttribute('data-lightbox');
            if (imageUrl && !imageUrl.includes('youtube') && !imageUrl.includes('drive.google')) {
                openLightbox(imageUrl, lightboxImages.indexOf(imageUrl));
            }
        }
    });
});

// Lightbox controls
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevImage);
lightboxNext.addEventListener('click', nextImage);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeLightbox();
    }
});

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================

const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.getElementById('testimonialDots');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');

let currentTestimonialIndex = 0;

// Create dots for testimonials
testimonialCards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToTestimonial(index));
    testimonialDots.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function updateTestimonialCarousel() {
    testimonialCards.forEach((card, index) => {
        card.classList.toggle('active', index === currentTestimonialIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialIndex);
    });
}

function goToTestimonial(index) {
    currentTestimonialIndex = index;
    updateTestimonialCarousel();
}

function nextTestimonialFunc() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialCards.length;
    updateTestimonialCarousel();
}

function prevTestimonialFunc() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestimonialCarousel();
}

prevTestimonial.addEventListener('click', prevTestimonialFunc);
nextTestimonial.addEventListener('click', nextTestimonialFunc);

// Auto-advance testimonials every 8 seconds
let testimonialTimer = setInterval(nextTestimonialFunc, 8000);

// Reset timer on user interaction
[prevTestimonial, nextTestimonial, ...dots].forEach(element => {
    element.addEventListener('click', () => {
        clearInterval(testimonialTimer);
        testimonialTimer = setInterval(nextTestimonialFunc, 8000);
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    showFormMessage('Thank you! Your message has been sent successfully. I will get back to you soon!', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Log form data (for demonstration)
    console.log('Form submitted:', { name, email, subject, message });
    
    // You can send the data to a backend service here:
    // sendEmailToServer(name, email, subject, message);
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}, 100));

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with scroll animation class
document.querySelectorAll('.scroll-fade-in').forEach(element => {
    observer.observe(element);
});

// Add scroll animations to portfolio items
function initScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .about-content, .portfolio-item'
    );
    
    elementsToAnimate.forEach(element => {
        element.classList.add('scroll-fade-in');
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ============================================
// ANIMATED COUNTER (Optional - for stats)
// ============================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
}, 100));

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', throttle(() => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}, 100));

// ============================================
// PARALLAX EFFECT (Optional Enhancement)
// ============================================

function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', throttle(() => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementOffset = element.offsetTop;
            const distance = scrollPosition - elementOffset;
            const parallaxAmount = distance * 0.5;
            
            element.style.transform = `translateY(${parallaxAmount}px)`;
        });
    }, 30));
}

// ============================================
// TYPING ANIMATION (Optional)
// ============================================

function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
    
    type();
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

// Log page load performance
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page Load Time: ' + pageLoadTime + 'ms');
});

// ============================================
// LAZY LOADING IMAGES (Optional Enhancement)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ANALYTICS & TRACKING (Optional)
// ============================================

// Track section views
function trackSectionView(sectionId) {
    if (window.gtag) {
        gtag('event', 'view_section', {
            'section': sectionId
        });
    }
}

// ============================================
// FORM FIELD VALIDATION
// ============================================

const formInputs = document.querySelectorAll('.form-input, .form-textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.style.borderColor = 'var(--accent-primary)';
        } else {
            this.style.borderColor = 'rgba(255, 0, 110, 0.2)';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--accent-primary)';
    });
});

// ============================================
// COOKIE CONSENT (Optional)
// ============================================

function showCookieConsent() {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
        // Implement cookie consent banner here
        localStorage.setItem('cookieConsent', 'true');
    }
}

// ============================================
// PAGE READY - INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
    
    // Initialize all features
    initializeDarkMode();
    initScrollAnimations();
    updateTestimonialCarousel();
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// ============================================
// SERVICE WORKER REGISTRATION (Optional)
// ============================================

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', function(event) {
    console.error('Error occurred:', event.error);
    // You can send this to an error tracking service
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    // You can send this to an error tracking service
});

// ============================================
// CONSOLE LOG - DEVELOPMENT ONLY
// ============================================

console.log('%c🎨 Kerapetse Kehakgametse Portfolio Website', 
    'color: #ff006e; font-size: 18px; font-weight: bold;');
console.log('%cGraphic Designer | Photographer | Videographer', 
    'color: #00d9ff; font-size: 14px;');
console.log('%cBased in Gaborone, Botswana', 
    'color: #8338ec; font-size: 12px;');
