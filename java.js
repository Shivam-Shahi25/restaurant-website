// script.js - Scroll Reveal Animations & Interactive Effects

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add reveal classes to sections
    const sections = document.querySelectorAll('.hero, .menu-section, .about-section, .gallery-section, .testimonials-section, .contact-section');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Add stagger animation to dish cards
    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach((card, index) => {
        card.classList.add('stagger-item');
        card.style.transitionDelay = `${index * 0.05}s`;
    });
    
    // Add reveal to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.classList.add('reveal-scale');
    });
    
    // Add reveal to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.classList.add('stagger-item');
        card.style.transitionDelay = `${index * 0.08}s`;
    });
    
    // Add split reveal to about section
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');
    if (aboutLeft) aboutLeft.classList.add('reveal-left');
    if (aboutRight) aboutRight.classList.add('reveal-right');
    
    // Add reveal to contact section
    const contactLeft = document.querySelector('.contact-left');
    const contactRight = document.querySelector('.contact-right');
    if (contactLeft) contactLeft.classList.add('reveal-left');
    if (contactRight) contactRight.classList.add('reveal-right');
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-item');
    revealElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-book, .btn-menu, .order-btn, .nav-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
    
    // Parallax effect on hero image (optional)
    window.addEventListener('scroll', function() {
        const heroImage = document.querySelector('.food-image');
        if (heroImage && window.scrollY < window.innerHeight) {
            const scrolled = window.scrollY;
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
});

// Add CSS for image fade-in
const imageStyle = document.createElement('style');
imageStyle.textContent = `
    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    img[src] {
        opacity: 1;
    }
`;
document.head.appendChild(imageStyle);
