function toggleLoginType() {
  const emailInput = document.getElementById('emailInput');
  const usernameInput = document.getElementById('usernameInput');
  const switchInput = document.getElementById('switchInput');
  if (switchInput.checked) {
    emailInput.style.display = 'none';
    usernameInput.style.display = 'block';
  } else {
    emailInput.style.display = 'block';
    usernameInput.style.display = 'none';
  }
}

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent form submission

  let identifier;
  if (document.getElementById('switchInput').checked) {
    identifier = document.getElementById('username').value;
  } else {
    identifier = document.getElementById('email').value;
  }
  const password = document.getElementById('password').value;
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ identifier, password })
  });
  try {
    const data = await response.json();
    if (response.ok) {
      alert(data.message); // Success message
      window.location.href = '/welcome.html'; // Redirect to welcome page
    } else {
      alert(data.error); // Error message
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred.'); // Catch other errors
  }
});