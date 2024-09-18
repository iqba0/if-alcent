window.onload = function () {
    const menuBtn = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-nav")

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-active");
    })
}

  const navbar = document.querySelector('.navbar');
  const heroImage = document.querySelector('.hero-image');

  window.addEventListener('scroll', function() {
    // Menangani transparansi navbar saat scroll
    if (window.scrollY > 50) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }

    // Menangani efek parallax untuk hero image
    const scrollPosition = window.scrollY;
    heroImage.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

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
