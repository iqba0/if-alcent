window.onload = function () {
    const menuBtn = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-nav");
    const navbar = document.querySelector('.navbar');
    const heroImage = document.querySelector('.hero-image');
    const banner = document.querySelector('.banner');

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

        // Menangani efek parallax untuk hero image
        const scrollPosition = window.scrollY;
        heroImage.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

        // Efek parallax untuk banner (jika ada)
        if (banner) {
            banner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
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

// Menangani transparansi navbar saat scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');

  // Cek apakah halaman telah di-scroll lebih dari 50px
  if (window.scrollY > 50) {
      navbar.classList.add('transparent'); // Tambahkan kelas transparent
  } else {
      navbar.classList.remove('transparent'); // Hapus kelas transparent
  }
});

  // Menangani transparansi navbar saat scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Tambah kelas transparent jika halaman digulir lebih dari 50px
    if (window.scrollY > 50) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });


  function checkAnswerJS() {
    let answer = document.querySelector('input[name="question2"]:checked').value;
    if (answer === 'c') {
        alert('Benar!');
    } else {
        alert('Salah, coba lagi.');
    }
}
