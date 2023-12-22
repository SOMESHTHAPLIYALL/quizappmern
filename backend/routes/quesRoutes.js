const express = require("express");
const {
  getAllQues,
  createQues,
  delQues,
} = require("../controller/quesController");

const router = express.Router();

router.get("/all-ques", getAllQues);

router.post("/create-ques", createQues);

router.post("/delete-ques/:id", delQues);

module.exports = router;
