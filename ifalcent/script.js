window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    // Jika halaman di-scroll lebih dari 50px, tambahkan kelas 'transparent'
    if (window.scrollY > 50) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
document.getElementById("hamburger").addEventListener("click", function() {
    const navMenu = document.querySelector(".mobile-nav");
    const hamburger = document.getElementById("hamburger");

    // Toggle menu aktif dan perubahan ikon hamburger
    navMenu.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
});


