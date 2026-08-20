const express = require("express");
const app = express();
app.use(express.json())

app.get("/",(req, res)=>{
    res.send("Hello from eventix!!!!")
    console.log(req.url)
})




app.listen(2000, ()=>{
    console.log("Server is running!!")
})