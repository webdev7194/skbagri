const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const icon = navToggle.querySelector("i");

navToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
  const overlay = document.getElementById("siteDisclaimer");
  const btn = document.getElementById("disclaimerBtn");
  const countdownEl = document.getElementById("countdown");

  let timeLeft = 10;

  const timer = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      closeDisclaimer();
    }
  }, 1000);

  function closeDisclaimer() {
    clearInterval(timer);
    overlay.classList.add("hide");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 400);
  }

  btn.addEventListener("click", closeDisclaimer);