const express = require("express");
const validator = require("validator");
const userAuth = require("./middleware/auth")
const connectDb = require("./config/database");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const User = require("./model/User")

const app = express();
app.use(express.json());
app.use(cookieParser());
const dns = require("dns");



dns.setServers(["1.1.1.1", "8.8.8.8"]);


connectDb()

app.get("/", (req, res) => {
  res.send("Hello from eventix!!!!");
  console.log(req.url);
});

const SECRET_KEY = "mySecretKey";
app.post("/signup", async (req, res) => {
  try {
    // 1. Check required fields
    if (!req.body.firstName || !req.body.emailId || !req.body.password) {
      return res.send("Required fields are missing");
    }

    // 2. Validate email format
    if (!validator.isEmail(req.body.emailId)) {
      return res.send("Email is not valid");
    }

    if (!validator.isStrongPassword(req.body.password)) {
      return res.send("Password is not valid!");
    }

    // 3. Check if user already exists
    const existingUser = await User.findOne({
      emailId: req.body.emailId,
    });

    if (existingUser !== null) {
      return res.send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    req.body.password = hashedPassword;
    // 4. Create user
    await User.create(req.body);

    // 5. Send success response
    res.send("Signup successful");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      return res.send("Required field is missing");
    }

    const user = await User.findOne({ emailId });
    if (!user) {
      return res.send("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.send("Password is not valid.");
    }

    const token = jwt.sign({ emailId }, SECRET_KEY);

    res.cookie("token", token);

    return res.send({
      message: "Login Successfull",
      token: token,
    });
  } catch (error) {
    return res.send("something went wrong");
  }
});



+app.get("/profile",userAuth, async (req, res) => {
  
  console.log(req.user);
  res.send("Profile");
});

app.listen(2000, () => {
  console.log("Server is running!!");
});
