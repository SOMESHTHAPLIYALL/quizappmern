const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./backend/config/db");
const path = require("path");
const quesRoutes = require("./backend/routes/quesRoutes.js");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/ques", quesRoutes);

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});
//listen
app.listen(8080, () => {
  console.log("Server running");
});
