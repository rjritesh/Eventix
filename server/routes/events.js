const express = require("express");
const router = express.Router();

router.get("/events", async (req, res) => {
  try {
    res.send("Events API created");
  } catch (error) {}
});

module.exports = router;
