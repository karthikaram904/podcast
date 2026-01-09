
 (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-0;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });


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
