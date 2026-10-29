const express = require("express");
const { getEvents, createEvents, getEventsById, updateEventsById, deleteEvents, featuredEVents } = require("../controller/eventsController");
const { userAuth, adminAuth } = require("../middleware/auth");
const router = express.Router();

router.get("/events",userAuth, getEvents);
router.get("/events/featured/", featuredEVents)
router.post("/events", userAuth, adminAuth, createEvents);
router.get("/events/:id",  getEventsById);
router.patch("/events/:id",userAuth, adminAuth, updateEventsById);
router.delete("/events/:id",userAuth, adminAuth, deleteEvents)

module.exports = router;
