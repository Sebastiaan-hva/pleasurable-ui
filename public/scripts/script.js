const text = document.getElementById('list-button-text');

text.addEventListener('animationend', (e) => {
  if (e.animationName === 'wiggle') {
    text.classList.add('morphed');
  }
});

const listButton = text.closest('.list-button');

listButton.addEventListener('mouseleave', () => {
  text.classList.remove('morphed');
  text.style.animation = 'none';
  // Trigger reflow to reset animation
  void text.offsetWidth;
  text.style.animation = '';
});