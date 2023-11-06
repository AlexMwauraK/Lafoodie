// Buger menu 
    //burger script
    document.addEventListener("DOMContentLoaded", function () {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.navlinks');
      const navlinks = document.querySelectorAll('.navlinks li');
    
      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navlinkFade 0.5s ease ${index / 7 + 0.3}s forwards`;
          }
        });
        burger.classList.toggle('toggles');
      });
    });