// script.js - Premium Scroll Reveal Animations & Enhanced Menu Interactive Effects
// INCLUDES FIXED CONTACT FORM WITH "MESSAGE SENT" POPUP

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== ENHANCED MENU DATA WITH RATINGS AND ICONS ==========
    const menuItemsData = [
      {
        id: 1,
        name: "Butter Chicken",
        price: 550,
        description: "Creamy tomato gravy, tender tandoori chicken, fresh cream & kasuri methi",
        category: "main",
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        badge: "🔥 Most Popular",
        prepTime: "20-25 min",
        calories: "580 cal",
        diet: "non-veg",
        spicy: false
      },
      {
        id: 2,
        name: "Hyderabadi Biryani",
        price: 480,
        description: "Aromatic basmati rice, slow-cooked marinated chicken, saffron & fried onions",
        category: "main",
        rating: 4.9,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
        badge: "⭐ Chef's Special",
        prepTime: "25-30 min",
        calories: "720 cal",
        diet: "non-veg",
        spicy: true
      },
      {
        id: 3,
        name: "Paneer Tikka",
        price: 420,
        description: "Cottage cheese marinated in spiced yogurt, grilled in tandoor with bell peppers",
        category: "appetizers",
        rating: 4.7,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
        badge: "🌱 Veg Favorite",
        prepTime: "15-20 min",
        calories: "380 cal",
        diet: "veg",
        spicy: true
      },
      {
        id: 4,
        name: "Dal Makhani",
        price: 380,
        description: "Black lentils slow-cooked overnight with butter, cream & aromatic spices",
        category: "main",
        rating: 4.6,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop",
        badge: "🥇 Award Winner",
        prepTime: "Ready",
        calories: "450 cal",
        diet: "veg",
        spicy: false
      },
      {
        id: 5,
        name: "Garlic Naan",
        price: 90,
        description: "Soft tandoor-baked bread, fresh garlic, coriander & butter glaze",
        category: "breads",
        rating: 4.5,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&h=300&fit=crop",
        badge: "🥖 Best Seller",
        prepTime: "5-7 min",
        calories: "220 cal",
        diet: "veg",
        spicy: false
      },
      {
        id: 6,
        name: "Gulab Jamun",
        price: 180,
        description: "Warm milk dumplings soaked in cardamom-scented sugar syrup, garnished with nuts",
        category: "desserts",
        rating: 4.9,
        reviews: 423,
        image: "https://images.unsplash.com/photo-1631515243349-e0fcfd7e9e0c?w=400&h=300&fit=crop",
        badge: "🍬 Sweet Treat",
        prepTime: "5 min",
        calories: "310 cal",
        diet: "veg",
        spicy: false
      },
      {
        id: 7,
        name: "Chicken Tikka",
        price: 490,
        description: "Boneless chicken marinated in yogurt & spices, grilled to perfection",
        category: "appetizers",
        rating: 4.7,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        badge: "🔥 Sizzling",
        prepTime: "15-20 min",
        calories: "420 cal",
        diet: "non-veg",
        spicy: true
      },
      {
        id: 8,
        name: "Rasmalai",
        price: 200,
        description: "Soft cottage cheese patties in creamy saffron milk, topped with pistachios",
        category: "desserts",
        rating: 4.8,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=300&fit=crop",
        badge: "✨ Premium",
        prepTime: "Ready",
        calories: "280 cal",
        diet: "veg",
        spicy: false
      }
    ];

    // ========== CONTACT FORM FIX WITH "MESSAGE SENT" POPUP ==========
    const contactForm = document.getElementById('contactForm');
    const messagePopup = document.getElementById('messageSentPopup');
    
    function showMessagePopup(message, isError = false) {
      if (!messagePopup) return;
      const popupSpan = messagePopup.querySelector('.popup-content span');
      if (popupSpan) popupSpan.textContent = message || 'Message sent successfully!';
      
      // Change icon color for error
      const icon = messagePopup.querySelector('.popup-content i');
      if (icon) {
        if (isError) {
          icon.style.color = '#ef4444';
          icon.className = 'fas fa-exclamation-circle';
        } else {
          icon.style.color = '#10b981';
          icon.className = 'fas fa-check-circle';
        }
      }
      
      messagePopup.classList.add('show');
      
      setTimeout(() => {
        messagePopup.classList.remove('show');
        // Reset to default message
        if (popupSpan) popupSpan.textContent = 'Message sent successfully!';
        if (icon && !isError) {
          icon.style.color = '#10b981';
          icon.className = 'fas fa-check-circle';
        }
      }, 3500);
    }
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // CRITICAL: Prevents page reload - makes form functional!
        
        const name = document.getElementById('formName')?.value.trim() || '';
        const email = document.getElementById('formEmail')?.value.trim() || '';
        const phone = document.getElementById('formPhone')?.value.trim() || '';
        const message = document.getElementById('formMessage')?.value.trim() || '';
        
        // Validation
        if (!name) {
          showMessagePopup('❌ Please enter your name', true);
          return;
        }
        if (!email) {
          showMessagePopup('❌ Email address is required', true);
          return;
        }
        const emailPattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (!emailPattern.test(email)) {
          showMessagePopup('📧 Please enter a valid email address', true);
          return;
        }
        if (!message) {
          showMessagePopup('✏️ Message cannot be empty', true);
          return;
        }
        if (message.length < 5) {
          showMessagePopup('💬 Message must be at least 5 characters', true);
          return;
        }
        
        // SUCCESS: Show "Message sent" popup
        showMessagePopup('✓ Message sent successfully!', false);
        
        // Log to console for debugging
        console.log('Contact Form Submitted:', { name, email, phone, message });
        
        // Optional: Clear form after successful submission
        document.getElementById('formName').value = '';
        document.getElementById('formEmail').value = '';
        document.getElementById('formPhone').value = '';
        document.getElementById('formMessage').value = '';
      });
    }

    // Function to render stars
    function renderStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      let starsHTML = '';
      
      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
          starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
          starsHTML += '<i class="far fa-star"></i>';
        }
      }
      return starsHTML;
    }

    // Order notification function
    function showOrderNotification(dishName, price) {
      const notification = document.createElement('div');
      notification.className = 'order-notification';
      notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div>
          <strong>${dishName}</strong> added to cart! 
          <span style="color: #c17a2b;">₹${price}</span>
        </div>
      `;
      notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Poppins', sans-serif;
        animation: slideInRight 0.3s ease;
        border-left: 4px solid #c17a2b;
      `;
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }, 2500);
    }

    // Function to render enhanced menu items
    function renderEnhancedMenu(items) {
      const menuGrid = document.getElementById('menuGrid');
      if (!menuGrid) return;
      
      menuGrid.innerHTML = '';
      
      items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
          <div class="dish-image-wrapper">
            <div class="dish-image">
              <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="dish-badge">${item.badge}</div>
          </div>
          <div class="dish-content">
            <div class="dish-header">
              <h3 class="dish-name">${item.name}</h3>
              <span class="dish-price">₹${item.price}</span>
            </div>
            <div class="dish-rating">
              <div class="stars">
                ${renderStars(item.rating)}
              </div>
              <span class="rating-value">${item.rating}</span>
              <span class="review-count">(${item.reviews} reviews)</span>
            </div>
            <p class="dish-desc">${item.description}</p>
            <div class="dish-meta">
              <div class="meta-item">
                <i class="far fa-clock"></i>
                <span>${item.prepTime}</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-fire"></i>
                <span>${item.calories}</span>
              </div>
              <div class="meta-item">
                <i class="fas ${item.diet === 'veg' ? 'fa-leaf' : 'fa-drumstick-bite'}"></i>
                <span>${item.diet === 'veg' ? 'Veg' : 'Non-Veg'}</span>
              </div>
              ${item.spicy ? '<div class="meta-item"><i class="fas fa-pepper-hot"></i><span>Spicy</span></div>' : ''}
            </div>
            <button class="order-btn" data-dish="${item.name}" data-price="${item.price}">
              <i class="fas fa-shopping-cart"></i>
              Order Now
            </button>
          </div>
        `;
        
        menuGrid.appendChild(card);
      });
      
      // Add click handlers to order buttons
      document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const dishName = btn.getAttribute('data-dish');
          const dishPrice = btn.getAttribute('data-price');
          
          // Add cart animation
          btn.classList.add('cart-pop');
          setTimeout(() => btn.classList.remove('cart-pop'), 300);
          
          // Show order confirmation
          showOrderNotification(dishName, dishPrice);
        });
      });
    }

    // Category filter functionality
    function setupCategoryFilter() {
      const categoryBtns = document.querySelectorAll('.cat-btn');
      if (!categoryBtns.length) return;
      
      categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Update active state
          categoryBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // Filter items
          const category = btn.getAttribute('data-category');
          let filteredItems;
          
          if (category === 'all') {
            filteredItems = menuItemsData;
          } else {
            filteredItems = menuItemsData.filter(item => item.category === category);
          }
          
          // Render filtered items with animation
          const menuGrid = document.getElementById('menuGrid');
          if (menuGrid) {
            menuGrid.style.opacity = '0';
            setTimeout(() => {
              renderEnhancedMenu(filteredItems);
              menuGrid.style.opacity = '1';
            }, 150);
          }
        });
      });
    }

    // Initialize enhanced menu
    function initEnhancedMenu() {
      renderEnhancedMenu(menuItemsData);
      setupCategoryFilter();
    }

    // Call enhanced menu initialization
    initEnhancedMenu();
    
    // Add reveal classes to sections for scroll animations
    const sections = document.querySelectorAll('.hero, .menu-section, .about-section, .gallery-section, .testimonials-section, .contact-section');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Add stagger animation to dish cards with delay for premium feel
    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach((card, index) => {
        card.classList.add('stagger-item');
        card.style.transitionDelay = `${index * 0.05}s`;
    });
    
    // Add reveal scale to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.classList.add('reveal-scale');
    });
    
    // Add stagger animation to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.classList.add('stagger-item');
        card.style.transitionDelay = `${index * 0.08}s`;
    });
    
    // Add split reveal animations to about section
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');
    if (aboutLeft) aboutLeft.classList.add('reveal-left');
    if (aboutRight) aboutRight.classList.add('reveal-right');
    
    // Add split reveal animations to contact section
    const contactLeft = document.querySelector('.contact-left');
    const contactRight = document.querySelector('.contact-right');
    if (contactLeft) contactLeft.classList.add('reveal-left');
    if (contactRight) contactRight.classList.add('reveal-right');
    
    // Navbar scroll effect - changes style when scrolling
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
    
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with reveal animation classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-item');
    revealElements.forEach(el => {
        observer.observe(el);
    });
    
    // Ripple effect for all buttons (premium micro-interaction)
    const buttons = document.querySelectorAll('.btn-book, .btn-menu, .order-btn, .nav-btn, .submit-btn-form');
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
    
    // Smooth scroll for all anchor links with offset for fixed navbar
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const offsetTop = targetElement.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Image lazy loading with fade-in effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.4s ease';
        }
    });
    
    // Subtle parallax effect on hero image
    window.addEventListener('scroll', function() {
        const heroImage = document.querySelector('.food-image');
        if (heroImage && window.scrollY < window.innerHeight) {
            const scrolled = window.scrollY;
            heroImage.style.transform = `translateY(${scrolled * 0.08}px)`;
        }
    });
    
    // Add hover sound effect simulation (visual feedback only - premium touch)
    const interactiveElements = document.querySelectorAll('.dish-card, .testimonial-card, .gallery-item, .social-icon');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            // Subtle scale pulse effect for premium feel
            this.style.transition = 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
        });
    });
    
    // Button click feedback for Book Table button
    const bookTableBtn = document.querySelector('.nav-btn, .btn-book');
    if (bookTableBtn) {
        bookTableBtn.addEventListener('click', function(e) {
            // Scroll to contact section for booking
            const contactSection = document.querySelector('#contact');
            if (contactSection && this.classList.contains('nav-btn')) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const offsetTop = contactSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
