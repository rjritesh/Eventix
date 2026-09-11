const express = require("express");
const router = express.Router();
const {userAuth} = require("../middleware/auth");


router.get("/profile", userAuth, async (req, res) => {
  console.log(req.user);
  res.send({
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    emailId : req.user.emailId,
  });
});


module.exports = router;