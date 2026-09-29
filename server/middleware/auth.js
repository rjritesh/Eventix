const User = require("../model/User");

const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    const decoded = jwt.verify(token, SECRET_KEY);

    const user = await User.findOne({
      emailId: decoded.emailId,
    });

    if (!user) {
      return res.status(401).send("Invalid token");
    }

    req.user = user;

    next();

  } catch (error) {

    // 401 → Authentication failed
    return res.status(401).send("Invalid token");
  }
};


const adminAuth = async (req, res, next) => {

  if (req.user.role !== "admin") {

    // 403 → User authenticated but doesn't have permission
    return res.status(403).send("Access denied!!");
  }

  next();
};


module.exports = {
  userAuth,
  adminAuth,
};