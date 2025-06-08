// Countdown
const countdown = document.getElementById("countdown");
const birthday = new Date("June 9, 2025 00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `🎉 ${d}d ${h}h ${m}m ${s}s left`;

  if (distance < 0) {
    clearInterval(timer);
    countdown.innerHTML = "🎂 It's Today!";
  }
}, 1000);

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function scrollToSurprise() {
  const imageDiv = document.getElementById("surpriseImage");
  imageDiv.style.display = "block"; // show the image
  imageDiv.scrollIntoView({ behavior: "smooth" }); // scroll to the image
}


function toghter() {
  const imageDiv = document.getElementById("togetherImage");
  imageDiv.style.display = "block";
  imageDiv.scrollIntoView({ behavior: "smooth" });
}

function showLetter() {
  const letter = document.getElementById("loveLetter");
  letter.style.display = "block";
  letter.scrollIntoView({ behavior: "smooth" });
}




// Show surprise on scroll
window.addEventListener("scroll", () => {
  const surprise = document.querySelector(".surprise");
  const rect = surprise.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    surprise.classList.add("visible");
  }
});
// Show confetti on click
function showConfetti() {
  const confetti = document.querySelector(".confetti");
  confetti.classList.add("visible");
  setTimeout(() => {
    confetti.classList.remove("visible");
  }, 5000);
}
// Add event listener for confetti
document.querySelector(".surprise").addEventListener("click", showConfetti);
// Add event listener for music toggle
document.querySelector(".toggle-music").addEventListener("click", toggleMusic);
// Add event listener for smooth scroll
document.querySelector(".scroll-to-surprise").addEventListener("click", scrollToSurprise);
