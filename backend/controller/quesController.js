const quesModel = require("../models/quesModel.js");

exports.getAllQues = async (req, res) => {
  try {
    const ques = await quesModel.find({});
    return res.status(201).send({
      message: "Questions fetched scucessfully",
      success: true,
      ques,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Failed to get questions",
      success: false,
    });
  }
};

exports.createQues = async (req, res) => {
  try {
    const { question, optionA, optionB, optionC, optionD, ans } = req.body;
    if (!question || !optionA || !optionB || !optionC || !optionD || !ans) {
      return res.status(500).send({
        message: "Enter all fields",
        success: false,
      });
    }
    const ques = new quesModel({
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      ans,
    });
    await ques.save();
    return res.status(200).send({
      message: "Question created sucessfulyy",
      success: true,
      ques,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error",
      success: false,
      error,
    });
  }
};

exports.delQues = async (req, res) => {
  try {
    await quesModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      message: "Question deleted succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while deleting",
      success: false,
      error,
    });
  }
};
