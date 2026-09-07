const express = require("express");
const { getEvents, createEvents } = require("../controller/eventsController");
const router = express.Router();

router.get("/events",getEvents);
router.post("/events", createEvents)

module.exports = router;
