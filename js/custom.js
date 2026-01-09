
 (function ($) {

  "use strict";

  // MENU CLOSE (link + close button)
  $('.navbar-collapse').on('click', '.nav-link, .btn-close', function () {
    $('.navbar-collapse').removeClass('show');
  });

  // CUSTOM LINK (smooth scroll)
  $('.smoothscroll').click(function (e) {
    e.preventDefault();

    var el = $(this).attr('href');
    var elWrapped = $(el);

    if (elWrapped.length) {
      var offsetTop = elWrapped.offset().top;

      $('html, body').animate({
        scrollTop: offsetTop
      }, 300);
    }
  });

})(jQuery);


    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });
  
  })(window.jQuery);


const toggleBtn = document.getElementById("rtl-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("rtl");

    // Save preference
    if (document.body.classList.contains("rtl")) {
      localStorage.setItem("layoutDirection", "rtl");
    } else {
      localStorage.setItem("layoutDirection", "ltr");
    }
  });

  // Load saved preference
  window.addEventListener("load", () => {
    const direction = localStorage.getItem("layoutDirection");
    if (direction === "rtl") {
      document.body.classList.add("rtl");
    }
  });
const themeBtn = document.getElementById("theme-toggle");

  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      themeBtn.textContent = "☀️";
    } else {
      document.body.classList.remove("dark");
      themeBtn.textContent = "🌙";
    }
    localStorage.setItem("theme", theme);
  }

  themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });

  // Load saved theme
  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  });
