const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const switchInput = document.getElementById('switchInput');
const loginForm = document.getElementById('login-form');

switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('placeholder', 'Username');
  } else {
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Email ID');
  }
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission to handle login logic manually

  const emailOrUsername = emailInput.value;
  const password = passwordInput.value;

  // Replace the following condition with your actual authentication logic
  if (emailOrUsername === 'admin' && password === 'admin') {
    // Redirect to welcome.html (change the URL to your welcome page)
    window.location.href = 'welcome.html';
  } else {
    // Add an error message or handle incorrect credentials as desired
    console.log('Invalid email/username or password');
  }
});
