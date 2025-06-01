function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
}

// Configura la fecha de fin de exámenes (ejemplo: 7 de junio de 2025)
const endDate = new Date("2025-07-02T23:59:59").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = 
    `${days} días, ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "¡Ya terminaste! 🎉";
  }
}, 1000);
function toggleLetter() {
  const letter = document.getElementById("letter-text");
  letter.classList.toggle("open");
}

