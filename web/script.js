const { MongoClient } = require('mongodb');
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

const url = 'mongodb+srv://yohjit:2910@khfm2a1.mongodb.net/testCredentials?retryWrites=true&w=majority';
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db('test');
  console.log('Connected to MongoDB!');

  const collection = db.collection('testCredentials');

  const query = { username: emailOrUsername, password: password };

  collection.find(query).toArray((err, documents) => {
    if (err) {
      console.error('Error fetching documents:', err);
    } else {
      console.log('Found documents:', documents);
    }

    client.close();
  });
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
