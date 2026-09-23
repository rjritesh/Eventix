const Events = require("../model/Events");

const getEvents = async (req, res) => {
  try {
    const events = await Events.find();

    if (events.length === 0) {
      return res.status(404).send("Events not found!");
    }

    // 200 → Successfully fetched events
    res.status(200).send(events);
  } catch (error) {
    // 500 → Server/database error
    res.status(500).send({
      message: "Failed to get events",
      error: error.message,
    });
  }
};

const createEvents = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      category,
      totalSeats,
      ticketPrice,
      image,
    } = req.body;

    const event = await Events.create({
      title,
      description,
      date,
      location,
      category,
      totalSeats,
      availableSeats: totalSeats,
      ticketPrice: ticketPrice || 0,
      image: image || "",
    });

    // 201 → Event created
    res.status(201).send(event);
  } catch (error) {
    console.log("error", error);

    // 500 → Server/database error
    res.status(500).send({
      message: "Server Error",
      error: error.message,
    });
  }
};

const getEventsById = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Events.findById(id);

    if (!event) {
      // 404 → Event doesn't exist
      return res.status(404).send("Event not found");
    }

    // 200 → Successfully fetched event
    res.status(200).send(event);
  } catch (error) {
    // 404 → Invalid/non-existing event ID
    res.status(404).send("Event not found");
  }
};

const updateEventsById = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      ticketPrice
    } = req.body;

    const allowedFields = [
      "title",
      "description",
      "date",
      "location",
      "category",
      "ticketPrice",
      "image",
    ];

    const updatedData = {};

    const keys = Object.keys(req.body);

    for (const key of keys) {
      if (allowedFields.includes(key)) {
        updatedData[key] = req.body[key];
      }
    }

    if (ticketPrice !== undefined) {
      if (typeof ticketPrice !== "number") {
        return res.status(400).send("Ticket price must be a number");
      }

      if (ticketPrice < 0) {
        return res.status(400).send("Ticket price cannot be negative");
      }
    }

    const event = await Events.findByIdAndUpdate(
      id,
      updatedData,
      {
        returnDocument: "after",
      }
    );

    if (!event) {
      return res.status(404).send("Event not found");
    }

    res.status(200).send(event);

  } catch (error) {
    res.status(500).send({
      message: "Update failed!",
      error: error.message,
    });
  }
};

const deleteEvents = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Events.findByIdAndDelete(id);

    if (!event) {
      // 404 → Event doesn't exist
      return res.status(404).send("Event not found");
    }

    // 200 → Successfully deleted
    res.status(200).send("Event deleted successfully");
  } catch (error) {
    // 500 → Server/database error
    res.status(500).send({
      message: "Failed to delete the event",
      error: error.message,
    });
  }
};

module.exports = {
  getEvents,
  createEvents,
  getEventsById,
  updateEventsById,
  deleteEvents,
};
