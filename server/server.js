require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser");
const dns = require("dns");
const cors = require("cors")

const connectDb = require("./config/database");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const  eventsRouter  = require("./routes/events");
const bookingRouter = require("./routes/bookings")

const app = express();


// --------------------
// Middleware
// --------------------

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));



// --------------------
// Routes
// --------------------

app.use("/api", authRouter);
app.use("/api", profileRouter);
app.use("/api", eventsRouter)
app.use("/api", bookingRouter)

// --------------------
// DNS & Database
// --------------------

dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDb();


// --------------------
// Root Route
// --------------------

app.get("/", (req, res) => {
  res.send("Hello from eventix!!!!");
  console.log(req.url);
});


// --------------------
// Start Server
// --------------------

app.listen(2000, () => {
  console.log("Server is running!!");
});