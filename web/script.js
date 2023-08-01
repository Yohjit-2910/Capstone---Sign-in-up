const emailInput = document.getElementById('email');
const switchInput = document.getElementById('switchInput');

switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('placeholder', 'Username');
  } else {
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Email ID');
  }
});