const express = require("express");
const app = express();







app.get("/",(req, res)=>{
    res.send("Heloo from eventix!!!!")
})


app.listen(2000, ()=>{
    console.log("Server is running!!")
})