window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('white-bg');
    } else {
        navbar.classList.remove('white-bg');
    }
});

