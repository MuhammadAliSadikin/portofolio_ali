// Scroll Reveal Animation
const sections = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Transisi antar halaman
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.endsWith('.html')) {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});

// Chat Widget Interaksi
document.querySelector('.chat-widget')?.addEventListener('click', () => {
  alert("Halo! Kamu bisa hubungi saya lewat email atau Instagram.");
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}