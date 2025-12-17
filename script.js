/* ===========================
   MOBILE MENU TOGGLE
=========================== */

const header = document.querySelector('.site-header');
const toggleBtn = document.querySelector('.menu-toggle');

toggleBtn.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});


/* ===========================
   STICKY HEADER GLOW ON SCROLL
=========================== */

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-glow');
  } else {
    header.classList.remove('header-glow');
  }
});


/* ===========================
   SCROLL REVEAL ANIMATIONS
=========================== */

const revealElements = document.querySelectorAll('.section, .video-card, .game-card, .community-card, .about-card');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('fade-in-up');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


/* ===========================
   BUTTON RIPPLE EFFECT
=========================== */

document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});


/* ===========================
   SMOOTH SCROLL FOR NAV LINKS
=========================== */

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      header.classList.remove('nav-open');
    }
  });
});


/* 3D Parallax layers */
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.getElementById('layer1').style.transform = `translate(${x}px, ${y}px)`;
  document.getElementById('layer2').style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
});


/* 3D cursor follow */
const cursor3d = document.createElement('div');
cursor3d.classList.add('cursor-3d');
document.body.appendChild(cursor3d);

document.addEventListener('mousemove', e => {
  cursor3d.style.left = `${e.clientX}px`;
  cursor3d.style.top = `${e.clientY}px`;
});


const chatSocket = new WebSocket("ws://localhost:8000/ws/chat/");

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    console.log("New message:", data.message);
};