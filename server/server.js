const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const connect = require("./database/conn.js");
const router = require("./router/route.js");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://whitefusionboard.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(morgan("tiny"));
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json("get home");
});

// api route
app.use("/api", router);

connect()
  .then(() => {
    // Listening to the port
    app.listen(process.env.PORT, () => {
      console.log(`Server is open at localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    // Handling errors during database connection
    console.error("Error connecting to database:", error);
  });
