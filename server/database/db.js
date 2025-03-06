import mongoose from "mongoose";

const connectdb = async () => {
  const MONGO_URI = "mongodb+srv://pawartejas1377:1gdpi6bcXklePRkx@cluster0.8d1hi.mongodb.net/lms?retryWrites=true&w=majority"
  try {
    // Remove the deprecated options
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error occurred:", error);
  }
};

export default connectdb;
