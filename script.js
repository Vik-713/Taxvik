document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a, .cta-button');
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 20; // Adjust for header height and extra padding
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animation for financial graphic
    const financialGraphic = document.querySelector('.financial-graphic');
    const updateGraphicAnimation = () => {
        const scrollPosition = window.scrollY;
        const scale = 1 + (scrollPosition * 0.0002); // Slight scaling
        const translateY = scrollPosition * 0.1; // Subtle upward movement
        financialGraphic.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
    };

    // Scroll animation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => observer.observe(card));

    // Floating element animation
    const floatingElement = document.querySelector('.floating-element');
    const updateFloatingElement = () => {
        const scrollPosition = window.scrollY;
        floatingElement.style.transform = `translateY(${Math.sin(scrollPosition * 0.01) * 20}px) rotate(${scrollPosition * 0.05}deg)`;
    };

    // Combine scroll event listeners
    window.addEventListener('scroll', () => {
        updateGraphicAnimation();
        updateFloatingElement();
    });

    // Initial calls to set positions
    updateGraphicAnimation();
    updateFloatingElement();
});