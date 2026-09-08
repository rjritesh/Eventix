const Events = require("../model/Events");

const getEvents = async (req, res) => {
  const events = await Events.find();
  if(events.length === 0){
    res.send("Events not found!")
  }
  res.send(events);
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
    res.send(event);
  } catch (error) {
    res.send({ message: "Server Error", error: error.message });
  }
};

const getEventsById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Events.findById(id);
    res.send(event);
  } catch (err) {
    res.send("Event not found");
  }
};

const updateEventsById = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(req.params);
    console.log(req.body);

    const events = await Events.findByIdAndUpdate(
      id,
      req.body,
      { returnDocument: "after" }
    );

    res.send(events);
  } catch (err) {
    res.send("Update failed!");
  }
};

const deleteEvents = async (req, res) =>{
  try{
      const {id} = req.params;
    await Events.findByIdAndDelete(id);
    res.send("Event deleted sucessfully")
  }
  catch(error){
    res.send("Failed to delete the event")
  }
}


module.exports = {
  getEvents,
  createEvents,
  getEventsById, updateEventsById, deleteEvents
};
