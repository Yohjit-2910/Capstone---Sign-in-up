const express = require("express");
const mongoose = require("mongoose");
const app = express();
const base = `${__dirname}/web`;
const port = 5000;

app.use(express.static('web'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

uri = "mongodb+srv://dipansh:qwerty99@mydb.chvnp5g.mongodb.net/?retryWrites=true&w=majority";

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.post("/login", async (req, res) => {
  const { identifier, password } = req.body;
  let user;

  try {
    // Check if the identifier is an email or username
    if (validateEmail(identifier)) {
      user = await User.findOne({ email: identifier, password });
    } else {
      user = await User.findOne({ username: identifier, password });
    }

    if (user) {
      // Successful login
      res.json({ message: "Login successful" });
    } else {
      // Incorrect credentials
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    // Error while querying the database
    res.status(500).json({ error: "Internal server error" });
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Here, [^\s@]+ means there can be any string including @ symbol, @ means there must be @ here, \. means there must be a .(dot) here.
  return re.test(String(email).toLowerCase());
}

app.get("/", (req, res) => {
  res.sendFile(`${base}/index.html`);
});

app.listen(`${port}`, () => {
  console.log('Server is running on port : ', `${port}`);
});
