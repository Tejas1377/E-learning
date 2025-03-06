import mongoose from "mongoose";
// import dotenv from "dotenv";

// Load environment variables
// dotenv.config();

const connectdb = async () => {
  try {
    // Remove the deprecated options
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error occurred:", error);
  }
};

export default connectdb;
