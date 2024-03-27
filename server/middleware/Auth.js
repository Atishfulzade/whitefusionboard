const jwt = require("jsonwebtoken");
require("dotenv").config();
async function Auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    res.json(token);
    //retrive the user datails for the logged in user
    const decodeToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.user(decodeToken);
  } catch (error) {
    res.status(401).send({ msg: "Authentication failed...!" });
  }
}
function localVariables(req, res, next) {
  req.app.locals = {
    OTP: null,
    resetSession: false,
  };
  next();
}
module.exports = { Auth, localVariables };
