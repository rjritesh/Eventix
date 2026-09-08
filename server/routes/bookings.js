const express = require("express");
const userAuth = require("../middleware/auth");

const { createBooking } = require("../controller/bookingController");

const router = express.Router();

router.post("/bookings", userAuth, createBooking);

module.exports = router;