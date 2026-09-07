const express = require("express");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/User");

const router = express.Router();

const SECRET_KEY = "mySecretKey";

// --------------------
// Signup
// --------------------

router.post("/signup", async (req, res) => {
  try {
    if (!req.body.firstName || !req.body.emailId || !req.body.password) {
      return res.send("Required fields are missing");
    }

    if (!validator.isEmail(req.body.emailId)) {
      return res.send("Email is not valid");
    }

    if (!validator.isStrongPassword(req.body.password)) {
      return res.send("Password is not valid!");
    }

    const existingUser = await User.findOne({
      emailId: req.body.emailId,
    });

    if (existingUser !== null) {
      return res.send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    req.body.password = hashedPassword;

    await User.create(req.body);

    res.send("Signup successful");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

// --------------------
// Login
// --------------------

router.post("/login", async (req, res) => {
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

router.post("/logout",  (req, res) => {
  try {
    res.clearCookie("token");
    res.send("Logout successful");
  } catch (error) {
    res.send(error)
  }
});

module.exports = router;
