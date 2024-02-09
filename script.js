window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});
