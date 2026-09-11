const express = require("express");
const { getEvents, createEvents, getEventsById, updateEventsById, deleteEvents } = require("../controller/eventsController");
const { userAuth, adminAuth } = require("../middleware/auth");
const router = express.Router();

router.get("/events", getEvents);
router.post("/events", userAuth, adminAuth, createEvents);
router.get("/events/:id", getEventsById);
router.patch("/events/:id", updateEventsById);
router.delete("/events/:id", deleteEvents)

module.exports = router;
