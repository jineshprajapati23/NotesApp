const mongoose = require("mongoose");

const connection = async (req, res) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notesapp").then(() => {
      console.log("Connected to database successfully!!");
    });
  } catch (error) {
    res.status(400).json({
      message: "Error connecting to database!!",
    });
  }
};

connection();
