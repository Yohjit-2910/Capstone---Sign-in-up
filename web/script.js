const emailInput = document.getElementById('email');
const switchInput = document.getElementById('switchInput');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');

switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('placeholder', 'Username');
  } else {
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Email ID');
  }
});

loginBtn.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if username and password are "admin"
  if (username === 'admin' && password === 'admin') {
    // Redirect to welcome.html
    window.location.href = 'welcome.html';
  } else {
    // Add an error message or handle incorrect credentials as desired
    console.log('Invalid username or password');
  }
});
