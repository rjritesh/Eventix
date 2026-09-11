const User = require("../model/User");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "mySecretKey";

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const decoded = jwt.verify(token, SECRET_KEY);

    const user = await User.findOne({ emailId: decoded.emailId });

    req.user = user;
    next();_
  } catch (error) {
    res.send("Invalid token");
  }
};


const adminAuth = async ( req, res, next)=>{
  if(req.user.role !== "admin"){
    return res.send("Access denied!!")
  }
  next()
}


module.exports = {
  userAuth, adminAuth
};
