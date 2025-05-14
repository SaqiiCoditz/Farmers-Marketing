document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;
    
    hamburger.addEventListener('click', function() {
        // Toggle menu state
        navLinks.classList.toggle('active');
        
        // Change hamburger icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
            body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.links ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
            body.style.overflow = 'auto';
        });
    });
});