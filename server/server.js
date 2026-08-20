const express = require("express");
const app = express();
app.use(express.json())

app.get("/",(req, res)=>{
    res.send("Hello from eventix!!!!")
    console.log(req.url)
})


app.post("/signup", ( req, res )=>{
    if(!req.body){
        return res.send("Requst body is missing!!!!")
    }
    res.send("Signup request received!!!")
})


app.listen(2000, ()=>{
    console.log("Server is running!!")
})