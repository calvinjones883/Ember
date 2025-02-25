const canvas = document.getElementById('emberCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

function getRandomEmberColor() {
  // Warm ember colors: red, orange, yellow with some randomness
  const r = Math.floor(Math.random() * 56) + 200; // 200-255
  const g = Math.floor(Math.random() * 100);
  const b = 0;
  return `rgb(${r},${g},${b})`;
}

function drawEmbers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const emberCount = 100;
  for (let i = 0; i < emberCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 3 + 1;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = getRandomEmberColor();
    ctx.fill();
  }
}

function animate() {
  drawEmbers();
  requestAnimationFrame(animate);
}

animate();
