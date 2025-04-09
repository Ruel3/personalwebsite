document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    const toggleNav = () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    };

    burger.addEventListener('click', toggleNav);

    // Basic form submission handling (for demonstration - no actual backend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Message sent successfully! (This is a simulation)');
            contactForm.reset();
        });
    }
});
