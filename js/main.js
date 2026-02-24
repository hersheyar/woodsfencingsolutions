// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

if (hamburger) hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
if (mobileClose) mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent!';
    btn.style.background = '#6B7C5C';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; btn.disabled = false; form.reset(); }, 4000);
  });
}
