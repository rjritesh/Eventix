const express = require("express");
const userAuth = require("../middleware/auth");

const { createBooking, getMyBookings, getMyBookingById } = require("../controller/bookingController");

const router = express.Router();

router.post("/bookings", userAuth, createBooking);
router.get("/bookings", userAuth,  getMyBookings)
router.get("/bookings/:id", userAuth, getMyBookingById )

module.exports = router;