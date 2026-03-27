// Particle Background
tsParticles.load("particles", {
  particles: {
    number: { value: 80 },
    color: { value: "#00f0ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2, direction: "none", out_mode: "bounce" },
    line_linked: { enable: true, distance: 120, color: "#00f0ff", opacity: 0.3, width: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  detectRetina: true
});

// Cursor glow effect on button
const startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('mousemove', e => {
  startBtn.style.boxShadow = `
    0 0 30px #00f0ff,
    ${e.offsetX - startBtn.offsetWidth/2}px ${e.offsetY - startBtn.offsetHeight/2}px 50px #00f0ff
  `;
});

startBtn.addEventListener('mouseleave', () => {
  startBtn.style.boxShadow = '0 0 30px #00f0ff, 0 0 60px #00f0ff inset';
});

// Button click - placeholder for first puzzle/next section
startBtn.addEventListener('click', () => {
  alert("Protocol Initialized. First puzzle coming soon.");
});
