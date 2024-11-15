const countdown = document.getElementById('countdown');
const targetDate = new Date("2024-12-31T23:59:59").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `🚀 Launching in ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    countdown.innerHTML = "🚀 We have launched!";
  }
};

setInterval(updateCountdown, 1000);