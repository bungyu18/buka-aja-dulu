const btn = document.getElementById("showMessageBtn");
const box = document.getElementById("messageBox");

btn.addEventListener("click", () => {
  box.classList.toggle("hidden");
});

// Animasi hati jatuh
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const hearts = [];
for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    s: Math.random() * 3 + 1
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,.9)";
  hearts.forEach(h => {
    ctx.font = `${h.s * 12}px serif`;
    ctx.fillText("❤️", h.x, h.y);
    h.y += h.s;
    if (h.y > canvas.height) h.y = 0;
  });
  requestAnimationFrame(draw);
}
draw();
