const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://someshrocks144:somesh2004@cluster0.1pshffi.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected");
  } catch (error) {
    console.log(`Mongo connect error${error}`);
  }
};

module.exports = connectDB;
