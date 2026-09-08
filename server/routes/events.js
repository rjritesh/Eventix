const express = require("express");
const { getEvents, createEvents, getEventsById, updateEventsById } = require("../controller/eventsController");
const router = express.Router();

router.get("/events", getEvents);
router.post("/events", createEvents);
router.get("/events/:id", getEventsById);
router.patch("/events/:id", updateEventsById);

module.exports = router;
