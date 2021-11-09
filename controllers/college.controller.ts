import express from "express";
import {
  CollegeDescriptionModel,
  StudentDescriptionModel,
} from "../model/dashboard.model";
import logger from "../utils/logger";

export const getColleges = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const colleges = await CollegeDescriptionModel.find({});
    res.status(200).json({
      message: "List of colleges!",
      colleges,
    });
  } catch (err: any) {
    logger.error(`Can't fetch the colleges at this moment: ${err.message}`);
    res.status(500).json({
      message: "Can't get the colleges at this moment!",
    });
  }
};
