// JavaScript for hiding the navbar on scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.top = '-100px'; // Hide the navbar
    } else {
        // Scroll up
        navbar.style.top = '0'; // Show the navbar
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});

// JavaScript for parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.getElementById('parallax');
    let scrollPosition = window.scrollY;
    parallax.style.transform = 'translateY(' + scrollPosition * -0.3 + 'px)';
});

function handleClick() {
    alert('Button clicked!');
}
function donateClick() {
    alert('You fool...');
}
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
