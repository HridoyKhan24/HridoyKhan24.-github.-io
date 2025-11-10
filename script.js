// Dark/light mode toggle
const toggle = document.getElementById('modeToggle');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});

// Minimal slider controls (Prev/Next buttons)
const slider = document.querySelector('.testimonials .slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function slideBy(direction = 1) {
  if (!slider) return;
  const width = slider.getBoundingClientRect().width;
  slider.scrollBy({ left: direction * (width * 0.8), behavior: 'smooth' });
}

prev?.addEventListener('click', () => slideBy(-1));
next?.addEventListener('click', () => slideBy(1));

// Contact form success toast (requires Formspree setup)
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  // Let browser handle submission to Formspree; show a quick toast after submit
  setTimeout(() => alert('Thanks for reaching out — I’ll get back to you soon!'), 250);
});
