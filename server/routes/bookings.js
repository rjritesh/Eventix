const express = require("express");
const userAuth = require("../middleware/auth");

const { createBooking, getMyBookings } = require("../controller/bookingController");

const router = express.Router();

router.post("/bookings", userAuth, createBooking);
router.get("/bookings", userAuth,  getMyBookings)

module.exports = router;