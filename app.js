const toast = document.querySelector(".toast");
let toastTimer;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function notify(message) {
  if (!toast) return;
  // Clear first so repeated identical messages still announce via aria-live.
  toast.textContent = "";
  toast.classList.remove("show");
  // Force a reflow so the live region registers a fresh update.
  void toast.offsetWidth;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function setTodayLabel() {
  const label = document.querySelector("#todayLabel");
  if (!label) return;
  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
  label.textContent = formatted;
}

setTodayLabel();

const focusButton = document.querySelector("#focusButton");
const briefButton = document.querySelector("#briefButton");
const searchButton = document.querySelector(".search");

focusButton?.addEventListener("click", () => {
  notify("Focus session started — 50 minutes, no noise.");
});

briefButton?.addEventListener("click", () => {
  document.querySelector("#spaces")?.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
});

searchButton?.addEventListener("click", () => {
  notify("Search is ready when your workspace is.");
});

document
  .querySelectorAll(".dots, .round-arrow, .signals button, .avatar")
  .forEach((button) => {
    button.addEventListener("click", () => notify("Opening this space…"));
  });
