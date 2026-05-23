document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Logic
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const closeMenu = document.getElementById('closeMenu');

    hamburger.addEventListener('click', () => {
        sideMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    // Existing Slideshow Logic
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);
});


const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('.inventory-section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 1s ease-out";
    observer.observe(section);
});

// CSS to support this:
// .reveal { opacity: 1 !important; transform: translateY(0) !important; }