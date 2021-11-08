import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("connected to DB successfully");
  } catch (err: any) {
    console.log("couldn't connect to database:", err.message);
  }
};

export default connectDB;
