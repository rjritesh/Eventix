const express = require("express");
const cookieParser = require("cookie-parser");
const dns = require("dns");

const connectDb = require("./config/database");
const userAuth = require("./middleware/auth");
const router = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDb();

app.get("/", (req, res) => {
  res.send("Hello from eventix!!!!");
  console.log(req.url);
});

app.get("/profile", userAuth, async (req, res) => {
  console.log(req.user);
  res.send("Profile");
});

app.listen(2000, () => {
  console.log("Server is running!!");
});