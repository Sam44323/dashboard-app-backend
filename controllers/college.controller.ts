import express from "express";
import { CollegeDescriptionModel } from "../model/dashboard.model";
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

export const getCollege = async (
  req: express.Request,
  res: express.Response
) => {
  const query = req.query;
  let response;

  try {
    response = await CollegeDescriptionModel.find({
      $or: [
        { _id: query.id },
        { state_name: `${query.location}` },
        { no_students: { $lte: query.students as any } },
        { courses_offered: `${query.course}` },
      ],
    });

    res.status(200).json({
      colleges: response,
    });
  } catch (err: any) {
    logger.error(`Can't fetch the college at this moment: ${err.message}`);
    res.status(500).json({
      message: "Can't get the college at this moment!",
    });
  }
};
