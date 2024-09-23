window.onload = function () {
    const menuBtn = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-nav");
    const navbar = document.querySelector('.navbar');

    // Toggle mobile menu
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-active");
    });

    // Menangani transparansi navbar saat scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('transparent');
        } else {
            navbar.classList.remove('transparent');
        }

        
        
    });
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroImage = document.querySelector('.hero-image');
    
        // Mengatur pergerakan parallax
        heroImage.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
    

    // Navbar transparansi saat mouse hover
    navbar.addEventListener('mouseenter', function() {
        if (window.scrollY > 50) {
            navbar.classList.remove('transparent');
        }
    });

    navbar.addEventListener('mouseleave', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('transparent');
        }
    });
};

// Autoplay video dengan fallback interaksi pengguna
window.addEventListener('load', function() {
    const video = document.getElementById('bumperVideo');

    // Autoplay attempt
    video.play().then(() => {
        console.log("Video started autoplay successfully.");
    }).catch(function(error) {
        console.log('Autoplay blocked: ', error);

        // Memulai pemutaran video dengan suara setelah interaksi pengguna
        document.body.addEventListener('click', function() {
            video.play();
        }, { once: true });
    });
});
