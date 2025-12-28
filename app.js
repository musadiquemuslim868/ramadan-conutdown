const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Ramadan start – Pakistan (Maghrib)
const ramadanTime = new Date("February 18, 2026 18:00:00 GMT+0500").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = ramadanTime - now;

  if (diff <= 0) {
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.innerHTML = d.toString().padStart(2, "0");
  hours.innerHTML = h.toString().padStart(2, "0");
  minutes.innerHTML = m.toString().padStart(2, "0");
  seconds.innerHTML = s.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
