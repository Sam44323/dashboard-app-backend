// write codes to create a server with express using typescript
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB";
import logger from "./utils/logger";
import { populate } from "./populater";
dotenv.config({
  path: ".env",
});

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
