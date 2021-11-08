import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB";
import logger from "./utils/logger";
import { router as collegeRouter } from "./routes/college.route";
import { router as studentRouter } from "./routes/student.route";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(collegeRouter);
app.use(studentRouter);
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => logger.info(`Server started on port ${port}`));
