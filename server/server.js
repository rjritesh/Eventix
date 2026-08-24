const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

mongoose.connect(
  "mongodb+srv://riteshDev:2Gi92nbmkNkMc3As@namastenode.xwcial4.mongodb.net/DevLink",
);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Hello from eventix!!!!");
  console.log(req.url);
});

app.post("/signup", async (req, res) => {
  try {
    if (!req.body) {
      return res.send("Requst body is missing!!!!");
    }
    await User.create(req.body);
    res.send("Signup request received!!!");
  } catch (error) {
    console.log(error);
    res.send("Something Went Wrong!");
  }
});

app.listen(2000, () => {
  console.log("Server is running!!");
});
