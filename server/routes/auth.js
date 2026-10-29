const express = require("express");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const router = express.Router();

// JWT secret key is stored in .env file
const SECRET_KEY = process.env.SECRET_KEY;

// --------------------
// Signup
// --------------------

router.post("/signup", async (req, res) => {
  try {
    // Check if required signup fields are provided
    if (!req.body.firstName || !req.body.emailId || !req.body.password) {
      return res.status(400).send({
        message: "Required fields are missing",
      });
    }

    // Check whether email format is valid
    if (!validator.isEmail(req.body.emailId)) {
      return res.status(400).json({
        message: "Email is not valid",
      });
    }

    // Check whether password meets the required strength
    if (!validator.isStrongPassword(req.body.password)) {
      return res.status(400).send({
        message: "Password is not valid!",
      });
    }

    // Check MongoDB to see if a user with this email already exists
    const existingUser = await User.findOne({
      emailId: req.body.emailId,
    });

    // If user already exists, don't create another account
    if (existingUser !== null) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Convert the plain password into a bcrypt hash
    // 10 = number of salt rounds
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Replace the plain password with the hashed password
    // before saving it to MongoDB
    req.body.password = hashedPassword;

    // Create and save the new user in MongoDB
    await User.create(req.body);

    // Signup successful
    res.status(201).json({
      message: "Signup successful",
    });
  } catch (error) {
    // Handles unexpected server/database errors
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

// --------------------
// Login
// --------------------

router.post("/login", async (req, res) => {
  try {
    // Get email and password sent by the client
    const { emailId, password } = req.body;

    // Check if both login fields are provided
    if (!emailId || !password) {
      return res.status(400).send({
        message: "Required field is missing",
      });
    }

    // Find the user in MongoDB using the email
    const user = await User.findOne({ emailId });

    // If no user is found, authentication fails
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Compare the plain password entered by the user
    // with the hashed password stored in MongoDB
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If passwords don't match, authentication fails
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Credentials are correct, so create a JWT
    // emailId is stored inside the JWT payload
    // SECRET_KEY is used to sign the token
    // Token will expire after 1 hour
    const token = jwt.sign({ emailId }, SECRET_KEY, { expiresIn: "1h" });

    // Store the JWT inside a cookie named "token"
    res.cookie("token", token);

    // Send successful login response
    return res.status(200).json({
      message: "Login Successful",
      token: token,
    });
  } catch (error) {
    // Handles unexpected server/database errors
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

// --------------------
// Logout
// --------------------

router.post("/logout", (req, res) => {
  try {
    // Remove the authentication cookie from the client
    res.clearCookie("token");

    // Logout successful
    res.status(200).send("Logout successful");
  } catch (error) {
    // Handles unexpected server errors
    res.status(500).send("Something went wrong");
  }
});

// Export router so it can be used in server.js
module.exports = router;
