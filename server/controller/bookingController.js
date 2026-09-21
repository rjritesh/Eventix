const Booking = require("../model/Bookings");
const Events = require("../model/Events");

const createBooking = async (req, res) => {
  try {
    const { eventId, seats } = req.body;

    const event = await Events.findById(eventId);

    if (!event) {
      return res.send("Event not found");
    }

    if (event.availableSeats < seats) {
      return res.send("Not enough seats available");
    }

    const booking = await Booking.create({
      bookingBy: req.user._id,
      event: eventId,
      seats: seats,
    });

    event.availableSeats = event.availableSeats - seats;

    await event.save();

    res.send(booking);
  } catch (error) {
    res.send({
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

    res.send(bookings);
  } catch (error) {
    res.send({
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
      bookingBy: req.user._id
    });

    if (!mybooking) {
      return res.send("Booking not found");
    }

    res.send(mybooking);
  } catch (error) {
    res.send("Booking not found");
  }
};


const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      bookingBy: req.user._id
    });

    if (!booking) {
      return res.send("Booking not found");
    }

    const event = await Events.findById(booking.event);
     
    if (!event) {
      return res.send("Event not found");
    }

    event.availableSeats = event.availableSeats + booking.seats;

    await event.save();

    await Booking.findByIdAndDelete(req.params.id);

    res.send("Booking cancelled successfully");

  } catch (error) {
    res.send({
      message: "Failed to cancel booking",
      error: error.message
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,getMyBookingById, cancelBooking
};
