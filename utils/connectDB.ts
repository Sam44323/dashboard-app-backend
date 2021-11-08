import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./logger";
dotenv.config({ path: ".env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    logger.info("connected to DB successfully");
  } catch (err: any) {
    logger.error("couldn't connect to database:", err.message);
  }
};

export default connectDB;
