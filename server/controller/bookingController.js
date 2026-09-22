const Booking = require("../model/Bookings");

const Events = require("../model/Events");

const createBooking = async (req, res) => {
  try {
    const { eventId, seats } = req.body;

    // 400 → Invalid input
    if (!(Number.isInteger(seats) && seats > 0)) {
      return res.status(400).send("Invalid number of seats");
    }

    const event = await Events.findById(eventId);

    // 404 → Event doesn't exist
    if (!event) {
      return res.status(404).send("Event not found");
    }

    // 400 → Request cannot be fulfilled because
    // requested seats are more than available seats
    if (event.availableSeats < seats) {
      return res.status(400).send("Not enough seats available");
    }

    const booking = await Booking.create({
      bookingBy: req.user._id,
      event: eventId,
      seats: seats,
    });

    event.availableSeats = event.availableSeats - seats;

    await event.save();

    // 201 → New booking created
    res.status(201).send(booking);

  } catch (error) {

    // 500 → Unexpected server/database error
    res.status(500).send({
      message: "Booking failed",
      error: error.message,
    });
  }
};


const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      bookingBy: req.user._id,
    });

    // 200 → Successfully fetched bookings
    res.status(200).send(bookings);

  } catch (error) {

    // 500 → Server/database error
    res.status(500).send({
      message: "Failed to get bookings",
      error: error.message,
    });
  }
};


const getMyBookingById = async (req, res) => {
  try {
    const { id } = req.params;

    const mybooking = await Booking.findOne({
      _id: id,
      bookingBy: req.user._id,
    });

    // 404 → Booking doesn't exist
    // OR booking doesn't belong to current user
    if (!mybooking) {
      return res.status(404).send("Booking not found");
    }

    // 200 → Successfully fetched booking
    res.status(200).send(mybooking);

  } catch (error) {

    // 404 → Invalid/non-existing booking
    return res.status(404).send("Booking not found");
  }
};


const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      bookingBy: req.user._id,
    });

    // 404 → Booking doesn't exist
    // OR booking doesn't belong to current user
    if (!booking) {
      return res.status(404).send("Booking not found");
    }

    const event = await Events.findById(booking.event);

    // 404 → Event doesn't exist
    if (!event) {
      return res.status(404).send("Event not found");
    }

    event.availableSeats = event.availableSeats + booking.seats;

    await event.save();

    await Booking.findByIdAndDelete(req.params.id);

    // 200 → Booking successfully cancelled
    res.status(200).send("Booking cancelled successfully");

  } catch (error) {

    // 500 → Server/database error
    res.status(500).send({
      message: "Failed to cancel booking",
      error: error.message,
    });
  }
};


module.exports = {
  createBooking,
  getMyBookings,
  getMyBookingById,
  cancelBooking,
};