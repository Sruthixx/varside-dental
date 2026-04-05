// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = (mx - 5) + 'px';
  cursor.style.top  = (my - 5) + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = (rx - 18) + 'px';
  ring.style.top  = (ry - 18) + 'px';
  requestAnimationFrame(animRing);
}
animRing();

// ── GOLD PARTICLES IN HERO ──
const pc = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'p';
  const s = Math.random() * 6 + 2;
  p.style.cssText = `
    width:${s}px; height:${s}px;
    left:${Math.random() * 100}%;
    top:${Math.random() * 100}%;
    animation-duration:${Math.random() * 15 + 8}s;
    animation-delay:${Math.random() * -10}s;
    opacity:${Math.random() * 0.12 + 0.03};
  `;
  pc.appendChild(p);
}

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// ── NAVBAR SHADOW ON SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(7,16,26,0.98)';
  } else {
    nav.style.background = 'rgba(7,16,26,0.85)';
  }
});
// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});