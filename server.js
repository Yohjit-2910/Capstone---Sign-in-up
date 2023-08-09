const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
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
  console.log("Sucessful login")
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email or username is already registered
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ error: "Email or username already exists" });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Sign up successful
    res.json({ message: "Sign up successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.sendFile(`${base}/index.html`);
});

app.get("/signup", (req, res) => {
  res.sendFile(`${base}/sign_up.html`);
});

app.get("/welcome", (req, res) => {
  res.sendFile(`${base}/welcome.html`);
});

app.listen(port, () => {
  console.log('Server is running on port:', port);
});
