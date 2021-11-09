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

export const getCollege = async (
  req: express.Request,
  res: express.Response
) => {
  const query = req.query;
  let response;
  console.log(query);
  if (query.name) {
    response = await CollegeDescriptionModel.find({
      college_name: `${query.name}`,
    });
  } else if (query.location) {
    response = await CollegeDescriptionModel.find({
      city_name: `${query.location}`,
    });
  } else if (query.students) {
    response = await CollegeDescriptionModel.find({
      no_students: query.students as any,
    });
  } else if (query.course) {
    response = await CollegeDescriptionModel.find({
      courses_offered: `${query.course}`,
    });
  }

  console.log(response);

  res.status(200).json({
    message: "working!",
  });
};
