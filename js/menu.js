const btn = document.querySelector('.hamburger');
const drawer = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !open);
  drawer.style.display = open ? 'none' : 'flex';
});

/* Close the drawer when any menu link is clicked */
drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    btn.setAttribute('aria-expanded', 'false');
    drawer.style.display = 'none';
  });
});
