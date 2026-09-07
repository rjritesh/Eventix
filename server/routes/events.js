const express = require("express");
const { getEvents, createEvents, getEventsById } = require("../controller/eventsController");
const router = express.Router();

router.get("/events",getEvents);
router.post("/events", createEvents)
router.get("/event/:id", getEventsById)

module.exports = router;
