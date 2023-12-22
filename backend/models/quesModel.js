const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  optionA: {
    type: String,
    required: true,
  },
  optionB: {
    type: String,
    required: true,
  },
  optionC: {
    type: String,
    required: true,
  },
  optionD: {
    type: String,
    required: true,
  },
  ans: {
    type: String,
    required: true,
  },
});

const quesModel = mongoose.model("quesModel", quesSchema);
module.exports = quesModel;
