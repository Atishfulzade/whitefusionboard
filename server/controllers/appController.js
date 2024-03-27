const UserModel = require("../model/model.userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

require("dotenv").config();

async function register(req, res) {
  const { username, email, password } = req.body;

  // Check if email already exists
  UserModel.findOne({ username })
    .then((existingUser) => {
      if (existingUser) {
        throw { error: "Username already exists" };
      }

      // Hash password
      return bcrypt.hash(password, 10);
    })
    .then((hashedPassword) => {
      // Create new user
      const user = new UserModel({
        username,
        email,
        password: hashedPassword,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).send({ msg: "User registered successfully" });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message || "Internal Server Error" });
    });
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    // If user doesn't exist, send error response
    if (!user) {
      return res.status(401).send({ error: "Email not found" });
    }

    // Compare passwords
    const passwordCheck = await bcrypt.compare(password, user.password);

    // If passwords don't match, send error response
    if (!passwordCheck) {
      return res.status(400).send({ error: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email },
      "yehhdtHB2BCDBBBYYEIWNBJDD8820#26",
      {
        expiresIn: "1h",
      }
    );

    // Send successful login response with token
    res
      .status(200)
      .send({ msg: "Login successful", email: user.email, token: token });
  } catch (error) {
    // Handle any errors
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
}

async function getUser(req, res) {
  const { username } = req.params;
  try {
    if (!username) {
      return res.status(400).send({ error: "Invalid username" });
    }
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const { password, ...rest } = Object.assign({}, user.toJSON());
    // If user is found, send user data in response
    res.status(200).send({ rest });
  } catch (error) {
    return res
      .status(500)
      .send({ error: error.message || "Internal Server Error" });
  }
}

async function generateOTP(req, res) {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  res.status(200).send({ code: req.app.locals.OTP });
}

async function varifyOTP(req, res) {
  const { code } = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    (req.app.locals.OTP = null), (req.app.locals.resetSession = true);
    return res.status(200).send({ msg: "Verify Sucessfully..!" });
  } else {
    return res.status(400).send({ error: "Invalid OTP " });
  }
}

async function createResetSession(req, res) {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    return res.status(201).send({ msg: "access granted" });
  }
  return res.status(440).send({ msg: "session expired!" });
}

async function updateUser(req, res) {
  try {
    const { userId } = req.user;
    if (!id) {
      return res.status(400).send({ error: "Invalid user ID" });
    }
    const body = req.body;

    // Use await to ensure the update operation completes before sending the response
    await UserModel.updateOne({ _id: userId }, body);

    // Send success response after the update operation completes
    return res.status(200).send("Data updated successfully");
  } catch (error) {
    // Properly handle errors and provide meaningful error messages
    return res
      .status(500)
      .send({ error: error.message || "Internal Server Error" });
  }
}

async function resetPassword(req, res) {
  try {
    const { username, password } = req.body;
    try {
      UserModel.findOne({ username }).then((user) =>
        bcrypt
          .hash(password, 10)
          .then()
          .catch((e) => {
            return res.status;
          })
      );
    } catch (error) {
      returnres.status(404);
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
}

module.exports = {
  register,
  login,
  getUser,
  generateOTP,
  varifyOTP,
  createResetSession,
  updateUser,
  resetPassword,
};
