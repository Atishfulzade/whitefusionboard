const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/student";

async function connect() {
  mongoose.set("strictQuery", true);
  try {
    const db = await mongoose.connect(url);
    console.log("Database connected");
    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

module.exports = connect;
