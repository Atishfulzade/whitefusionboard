const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter unique email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  mobile: {
    type: Number,
  },
  address: {
    type: String,
  },
  profile: {
    type: String,
  },
});
module.exports = mongoose.model.Users || mongoose.model("User", userSchema);
