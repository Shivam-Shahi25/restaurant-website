// ========== SCRIPT.JS - SAFFRON SPOON DIGITAL COOKBOOK ==========

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ========== SCROLL REVEAL ANIMATIONS ==========
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
    
    // Observe all elements with 'reveal' class
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
    
    // ========== FAQ ACCORDION ==========
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const offsetTop = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== BUTTON RIPPLE EFFECT ==========
    const buttons = document.querySelectorAll('.nav-btn, .btn-gumroad, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't add ripple on Gumroad links (they navigate away)
            if (this.classList.contains('btn-gumroad') || this.classList.contains('cta-button')) {
                return;
            }
            
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
    
    // ========== LAZY LOAD IMAGES FADE-IN ==========
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.4s ease';
            
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
    
    // ========== HOVER ANIMATION FOR CARDS ==========
    const cards = document.querySelectorAll('.feature-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
        });
    });
    
    // ========== PRODUCT MOCKUP PULSE EFFECT ==========
    const productMockup = document.querySelector('.product-mockup');
    
    if (productMockup) {
        setInterval(() => {
            productMockup.style.transform = 'scale(1.02)';
            setTimeout(() => {
                productMockup.style.transform = 'scale(1)';
            }, 300);
        }, 5000);
    }
    
    // ========== TRACK OUTBOUND CLICKS (OPTIONAL ANALYTICS) ==========
    const gumroadLinks = document.querySelectorAll('.btn-gumroad, .cta-button');
    
    gumroadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can replace this with actual analytics tracking
            console.log('Gumroad purchase clicked:', this.href);
            
            // If you have Google Analytics, uncomment:
            // gtag('event', 'begin_checkout', {
            //   'event_category': 'Gumroad',
            //   'event_label': 'Digital Cookbook',
            //   'value': 19
            // });
        });
    });
    
    // ========== ADD RIPPLE STYLES DYNAMICALLY ==========
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .nav-btn, .btn-gumroad, .cta-button {
            position: relative;
            overflow: hidden;
        }
        
        .product-mockup {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// ========== GLOBAL FUNCTION FOR BUY BUTTON SCROLL ==========
function scrollToBuy() {
    const buySection = document.getElementById('buy-section');
    const navbar = document.querySelector('.navbar');
    
    if (buySection) {
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const offsetTop = buySection.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
