'user strict';
{
  const menuToggle = document.getElementById('menu-toggle');
  const slideMenu = document.getElementById('slide-menu');
  const overlay = document.getElementById('overlay');
  const menuLinks = slideMenu.querySelectorAll('a');

  function toggleMenu() {
    menuToggle.classList.toggle('open');
    slideMenu.classList.toggle('open');
    overlay.classList.toggle('show');
  }

  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}
