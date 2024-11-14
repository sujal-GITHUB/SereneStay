const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const connectDB = async () => {
  try {
    // Check if MONGO_URI is loaded correctly
    console.log("Mongo URI:", process.env.MONGO_URI);  // Log the Mongo URI

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected...');  // Success message
  } catch (err) {
    console.error('Database connection error: ', err.message);
    process.exit(1);  // Exit the process with an error code
  }
};

module.exports = connectDB;  // Export the connectDB function
