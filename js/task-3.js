let userName = '';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', (event) => {
  userName = event.currentTarget.value.trim();
  outputName.textContent = userName ? userName : 'Anonymous';
});
