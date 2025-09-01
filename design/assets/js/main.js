// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Toggle icon
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.className = 'fas fa-bars w-6 h-6';
            } else {
                menuIcon.className = 'fas fa-times w-6 h-6';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            menuIcon.className = 'fas fa-bars w-6 h-6';
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-brand-gray-dark');
    } else {
        header.classList.remove('bg-brand-gray-dark');
    }
});

// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        {
            image: "../frontend/public/images/main-slider-01.jpg",
            title: "Kia Rio",
            subtitle: "FOR RENT $50 PER DAY",
            description: "Luxury Sedan with Premium Features",
        },
        {
            image: "../frontend/public/images/main-slider-02.jpg",
            title: "BMW 3",
            subtitle: "FOR RENT $150 PER DAY",
            description: "Premium SUV for Adventure",
        },
        {
            image: "../frontend/public/images/main-slider-03.jpg",
            title: "Audi A4",
            subtitle: "FOR RENT $120 PER DAY",
            description: "Elegant Luxury Experience",
        },
    ];

    let currentSlide = 0;
    const heroBackground = document.getElementById('hero-background');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const paginationButtons = document.querySelectorAll('#slider-pagination button');

    function updateSlide() {
        const slide = slides[currentSlide];
        
        // Update background
        heroBackground.style.backgroundImage = `url(${slide.image})`;
        
        // Update content
        heroTitle.textContent = slide.title;
        heroSubtitle.innerHTML = `FOR RENT <strong class="text-brand-yellow font-semibold">$${slide.subtitle.split('$')[1].split(' ')[0]}</strong> PER DAY`;
        
        // Update pagination
        paginationButtons.forEach((btn, index) => {
            if (index === currentSlide) {
                btn.classList.add('font-bold');
                btn.innerHTML = `${String(index + 1).padStart(2, "0")}<div class="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-brand-yellow"></div>`;
            } else {
                btn.classList.remove('font-bold');
                btn.innerHTML = String(index + 1).padStart(2, "0");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Pagination click events
    paginationButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentSlide = index;
            updateSlide();
        });
    });

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Contact form submission
function submitContactForm(event) {
    event.preventDefault();
    
    if (validateForm('contact-form')) {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
        successMessage.innerHTML = 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.';
        
        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(successMessage, form);
        
        // Reset form
        form.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// Car search functionality
function filterCars() {
    const searchTerm = document.getElementById('car-search').value.toLowerCase();
    const carCards = document.querySelectorAll('.car-card');
    
    carCards.forEach(card => {
        const carName = card.querySelector('h3').textContent.toLowerCase();
        const carDescription = card.querySelector('p').textContent.toLowerCase();
        
        if (carName.includes(searchTerm) || carDescription.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Price range filter
function filterByPrice() {
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;
    const carCards = document.querySelectorAll('.car-card');
    
    carCards.forEach(card => {
        const priceElement = card.querySelector('.price');
        const price = parseInt(priceElement.textContent.replace(/[^\d]/g, ''));
        
        const showCard = (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
        card.style.display = showCard ? 'block' : 'none';
    });
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add loading animation
function showLoading() {
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    loading.innerHTML = `
        <div class="bg-white p-4 rounded-lg">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-yellow"></div>
        </div>
    `;
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.remove();
    }
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(price);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('tr-TR').format(new Date(date));
}

// Export functions for use in other scripts
window.RoyalCar = {
    validateForm,
    submitContactForm,
    filterCars,
    filterByPrice,
    showLoading,
    hideLoading,
    formatPrice,
    formatDate
};
