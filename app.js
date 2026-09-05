const toast = document.querySelector('.toast');
let toastTimer;

function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelector('#focusButton').addEventListener('click', () => notify('Focus session started — 50 minutes, no noise.'));
document.querySelector('#briefButton').addEventListener('click', () => document.querySelector('#spaces').scrollIntoView({ behavior: 'smooth' }));
document.querySelector('.search').addEventListener('click', () => notify('Search is ready when your workspace is.'));
document.querySelectorAll('.dots, .round-arrow, .signals button').forEach((button) => button.addEventListener('click', () => notify('Opening this space…')));
