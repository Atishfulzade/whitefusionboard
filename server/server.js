const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");
const port = 3000;

app.get("/", (req, res) => {
  res.status(201).json("get home");
});
app.listen(port, () => {
  console.log(`Server is open at localhost ${port}`);
});
