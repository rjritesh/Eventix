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

module.exports = {
  createBooking,
};