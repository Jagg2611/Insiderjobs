import mongoose from "mongoose";
import "dotenv/config";

// function to connect to the mongoDB database

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established successfully");
  });
  await mongoose.connect(process.env.MONGO_URI);
};
// console.log("MONGO_URI:", process.env.MONGO_URI);

export default connectDB;
