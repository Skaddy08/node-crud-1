const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/mydatabase');

    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(`MONGO DB connection failed: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;