const mongoose =require("mongoose");

const dbURI = 'mongodb://127.0.0.1:27017/task-Manager'

const connectDB = async () => {
  try {
      await mongoose.connect('mongodb://127.0.0.1:27017/task-Manager');
      console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
      console.error('COULD NOT CONNECT TO DATABASE:', error.message);
  }
};
module.exports = connectDB