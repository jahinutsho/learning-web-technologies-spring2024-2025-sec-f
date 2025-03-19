document.addEventListener('DOMContentLoaded', function() {
    // Load navbar content
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // Initialize hamburger menu after navbar is loaded
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInside = hamburger.contains(event.target) || navLinks.contains(event.target);
                if (!isClickInside && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });

            // Close menu when window is resized to desktop view
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });

            // Close menu when a nav link is clicked
            navLinks.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
});