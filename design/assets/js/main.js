// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
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

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
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
