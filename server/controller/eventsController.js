const Events = require("../model/Events")

const getEvents = async (req, res) => {
    const events = await Events.find()
    res.send(events);
};

const createEvents = async (req, res)=>{
    try{
         const { title, description, date, location, category, totalSeats, ticketPrice, image } = req.body;
        const event = await Events.create({
            title,
            description,
            date,
            location,
            category,
            totalSeats,
            availableSeats: totalSeats,
            ticketPrice: ticketPrice || 0,
            image: image || '',

        });
        res.send(event)
    }
    catch(error){
        res.send({ message: 'Server Error', error: error.message })
    }
}

module.exports = {
    getEvents, createEvents
};