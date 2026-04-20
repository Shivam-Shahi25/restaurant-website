// ========== SAFFRON SPOON - PREMIUM RESTAURANT WEBSITE ==========

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== PRELOADER ==========
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hide');
        }, 2000);
    }
    
    // ========== CUSTOM CURSOR ==========
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower && window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
            cursorFollower.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
        });
        
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorFollower.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
            });
        });
    }
    
    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ========== MOBILE MENU ==========
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    document.querySelectorAll('.mobile-links a, .mobile-book').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // ========== ACTIVE NAV LINK ON SCROLL ==========
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ========== AOS INITIALIZATION ==========
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
    
    // ========== MENU DATA ==========
    const menuItems = [
        { id: 1, name: "Butter Chicken", price: 550, category: "main", description: "Creamy tomato gravy, tender tandoori chicken", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=150&h=150&fit=crop", rating: 4.8, badge: "🔥 Most Popular" },
        { id: 2, name: "Hyderabadi Biryani", price: 480, category: "main", description: "Aromatic basmati rice, slow-cooked chicken", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=150&h=150&fit=crop", rating: 4.9, badge: "⭐ Chef's Special" },
        { id: 3, name: "Paneer Tikka", price: 420, category: "appetizers", description: "Cottage cheese marinated in spiced yogurt", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=150&h=150&fit=crop", rating: 4.7, badge: "🌱 Veg Favorite" },
        { id: 4, name: "Dal Makhani", price: 380, category: "main", description: "Black lentils slow-cooked overnight", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150&h=150&fit=crop", rating: 4.6, badge: "🥇 Award Winner" },
        { id: 5, name: "Garlic Naan", price: 90, category: "breads", description: "Soft tandoor-baked bread with garlic", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=150&h=150&fit=crop", rating: 4.5, badge: "🥖 Best Seller" },
        { id: 6, name: "Gulab Jamun", price: 180, category: "desserts", description: "Warm milk dumplings in sugar syrup", image: "https://images.unsplash.com/photo-1631515243349-e0fcfd7e9e0c?w=150&h=150&fit=crop", rating: 4.9, badge: "🍬 Sweet Treat" },
        { id: 7, name: "Chicken Tikka", price: 490, category: "appetizers", description: "Boneless chicken grilled to perfection", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=150&h=150&fit=crop", rating: 4.7, badge: "🔥 Sizzling" },
        { id: 8, name: "Rasmalai", price: 200, category: "desserts", description: "Soft cheese patties in saffron milk", image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=150&h=150&fit=crop", rating: 4.8, badge: "✨ Premium" },
        { id: 9, name: "Mango Lassi", price: 120, category: "beverages", description: "Refreshing yogurt drink with mango", image: "https://images.unsplash.com/photo-1627308597516-29ae64e8f9e4?w=150&h=150&fit=crop", rating: 4.6, badge: "🥭 Refreshing" },
        { id: 10, name: "Masala Chai", price: 80, category: "beverages", description: "Traditional Indian spiced tea", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=150&h=150&fit=crop", rating: 4.7, badge: "☕ Classic" }
    ];
    
    // Featured dishes
    const featuredDishes = menuItems.slice(0, 3);
    
    // Render featured dishes
    function renderFeatured() {
        const grid = document.getElementById('featuredGrid');
        if (!grid) return;
        
        grid.innerHTML = featuredDishes.map(dish => `
            <div class="featured-card" data-aos="fade-up" data-aos-delay="100">
                <div class="featured-image">
                    <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                    <div class="featured-badge">${dish.badge}</div>
                </div>
                <div class="featured-content">
                    <h3>${dish.name}</h3>
                    <div class="featured-price">₹${dish.price}</div>
                    <p class="featured-desc">${dish.description}</p>
                    <button class="featured-order" data-dish="${dish.name}" data-price="${dish.price}">
                        <i class="fas fa-shopping-cart"></i> Order Now
                    </button>
                </div>
            </div>
        `).join('');
        
        addOrderListeners();
    }
    
    // Render full menu
    function renderMenu(filter = 'all') {
        const grid = document.getElementById('menuGrid');
        if (!grid) return;
        
        const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);
        
        grid.innerHTML = filtered.map(dish => `
            <div class="dish-card">
                <img src="${dish.image}" alt="${dish.name}" class="dish-image">
                <div class="dish-content">
                    <div class="dish-header">
                        <span class="dish-name">${dish.name}</span>
                        <span class="dish-price">₹${dish.price}</span>
                    </div>
                    <p class="dish-desc">${dish.description}</p>
                    <div class="dish-rating">
                        ${'⭐'.repeat(Math.floor(dish.rating))} ${dish.rating}
                    </div>
                    <button class="dish-order" data-dish="${dish.name}" data-price="${dish.price}">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
        
        addOrderListeners();
    }
    
    // Add order button listeners
    function addOrderListeners() {
        document.querySelectorAll('.featured-order, .dish-order').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const dishName = btn.getAttribute('data-dish');
                const dishPrice = btn.getAttribute('data-price');
                showNotification(`${dishName} added to cart! ₹${dishPrice}`);
                
                // Add animation
                btn.classList.add('cart-pop');
                setTimeout(() => btn.classList.remove('cart-pop'), 300);
            });
        });
    }
    
    // Category filter
    function setupFilters() {
        const catBtns = document.querySelectorAll('.cat-btn');
        catBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                catBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.getAttribute('data-category');
                renderMenu(category);
            });
        });
    }
    
    // ========== TESTIMONIALS DATA ==========
    const testimonials = [
        { name: "Priya Sharma", text: "Absolutely amazing! The butter chicken is the best I've ever had. The ambiance is royal and service is impeccable!", rating: 5, avatar: "👩", verified: true },
        { name: "Rajesh Mehta", text: "The Hyderabadi biryani took me straight to Hyderabad! Perfect spice balance and the dal makhani is to die for.", rating: 5, avatar: "👨", verified: true },
        { name: "Neha Kapoor", text: "Fantastic place for family dinners. The staff is warm, portions are generous, and the gulab jamun is outstanding!", rating: 5, avatar: "👩", verified: true },
        { name: "Michael Chen", text: "As a foodie who's tried many Indian restaurants, Saffron Spoon stands out. Authentic flavors, beautiful presentation.", rating: 5, avatar: "👨", verified: true },
        { name: "Sarah Williams", text: "The ambiance is perfect for a date night. The staff went above and beyond to make our anniversary special.", rating: 5, avatar: "👩", verified: true },
        { name: "Vikram Singh", text: "Best Indian food in Bengaluru! The tandoori platter is a must-try. Will definitely come back.", rating: 5, avatar: "👨", verified: true }
    ];
    
    function renderTestimonials() {
        const grid = document.getElementById('testimonialsGrid');
        if (!grid) return;
        
        grid.innerHTML = testimonials.map(t => `
            <div class="testimonial-card" data-aos="fade-up">
                <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>
                <p class="testimonial-text">"${t.text}"</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">${t.avatar}</div>
                    <div>
                        <div class="testimonial-name">${t.name}</div>
                        ${t.verified ? '<div class="testimonial-verified"><i class="fas fa-check-circle"></i> Verified Guest</div>' : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // ========== GALLERY DATA ==========
    const galleryImages = [
        { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=500&fit=crop", title: "Tandoori Platter", class: "item-1" },
        { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=500&fit=crop", title: "Royal Thali", class: "item-2" },
        { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=500&fit=crop", title: "Tandoori Chicken", class: "item-3" },
        { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=500&fit=crop", title: "Butter Chicken", class: "item-4" },
        { src: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=500&fit=crop", title: "Hyderabadi Biryani", class: "item-5" },
        { src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=500&fit=crop", title: "Elegant Dining", class: "item-6" },
        { src: "https://images.unsplash.com/photo-1631515243349-e0fcfd7e9e0c?w=600&h=500&fit=crop", title: "Gulab Jamun", class: "item-7" },
        { src: "https://images.unsplash.com/photo-1604909052743-94e6fef3a0c4?w=600&h=500&fit=crop", title: "Master Chefs", class: "item-8" }
    ];
    
    function renderGallery() {
        const grid = document.getElementById('galleryGrid');
        if (!grid) return;
        
        grid.innerHTML = galleryImages.map(img => `
            <div class="gallery-item ${img.class}">
                <img src="${img.src}" alt="${img.title}" loading="lazy">
                <div class="gallery-overlay">
                    <span>${img.title}</span>
                </div>
            </div>
        `).join('');
    }
    
    // ========== NOTIFICATION FUNCTION ==========
    function showNotification(message) {
        const notification = document.getElementById('notification');
        const messageSpan = document.getElementById('notificationMessage');
        
        if (notification && messageSpan) {
            messageSpan.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
    }
    
    // ========== RESERVATION FORM ==========
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('🎉 Table reserved! We\'ll contact you shortly.');
            reservationForm.reset();
        });
    }
    
    // ========== NEWSLETTER FORM ==========
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('📧 Subscribed! Check your inbox for 10% off.');
            newsletterForm.reset();
        });
    }
    
    // ========== BACK TO TOP BUTTON ==========
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ========== BUTTON SCROLL HANDLERS ==========
    const bookTableBtn = document.getElementById('bookTableBtn');
    const heroBookBtn = document.getElementById('heroBookBtn');
    const mobileBookBtn = document.getElementById('mobileBookBtn');
    const heroMenuBtn = document.getElementById('heroMenuBtn');
    
    if (bookTableBtn) {
        bookTableBtn.addEventListener('click', () => {
            document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (heroBookBtn) {
        heroBookBtn.addEventListener('click', () => {
            document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (mobileBookBtn) {
        mobileBookBtn.addEventListener('click', () => {
            document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (heroMenuBtn) {
        heroMenuBtn.addEventListener('click', () => {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // ========== SMOOTH SCROLL FOR ALL ANCHORS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const offsetTop = target.offsetTop - navbarHeight;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
    
    // ========== INITIALIZE ALL ==========
    renderFeatured();
    renderMenu();
    renderTestimonials();
    renderGallery();
    setupFilters();
    
    // ========== ADD RIPPLE EFFECT STYLES ==========
    const style = document.createElement('style');
    style.textContent = `
        .cart-pop {
            animation: cartPop 0.3s ease;
        }
        @keyframes cartPop {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        .featured-order, .dish-order {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Saffron Spoon - Premium Restaurant Website Loaded!');
});
