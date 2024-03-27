const express = require("express");
const router = express.Router();
const { Auth } = require("../middleware/Auth.js");
const registerEmail = require("../controllers/mailer.js");
const controller = require("../controllers/appController.js");
// POST Method
router.route("/register").post(controller.register); //register user
router.route("/login").post(controller.login); //login user
router.route("/authenticate").post((req, res) => res.end()); //authenticate user
router.route("/registerMail").post(registerEmail); //send mail

// GET Method
router.route("/user/:username").get(controller.getUser); //user with username
router.route("/generateOTP").get(controller.generateOTP); //generate OTP
router.route("/verifyOTP").get(controller.varifyOTP); //to varify OTP
router.route("/createresetSession").get(controller.createResetSession); //reset all the variables

// UPDATE Method
router.route("/updateuser").put(Auth, controller.updateUser); //update the user information
router.route("/resetpassword").put(controller.resetPassword); //reset password

module.exports = router;
