require("dotenv").config()
const mongoose = require('mongoose');
const db= process.env.MONGODB_CONNECTION_STRING;
const connectDB = async () => {
    try {
      await mongoose.connect(db);
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
module.exports = connectDB;