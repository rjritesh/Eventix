const express = require("express");
const router = express.Router();
const userAuth = require("../middleware/auth");


router.get("/profile", userAuth, async (req, res) => {
  console.log(req.user);
  res.send("Profile");
});


module.exports = router;