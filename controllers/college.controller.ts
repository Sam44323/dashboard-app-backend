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
  let queryName: {
    name: string;
    value: any;
  } = {} as any;
  const query = req.query;
  if (query.location) {
    queryName = {
      name: "state_name",
      value: query.location,
    };
  } else if (query.students) {
    queryName = {
      name: "no_students",
      value: query.students,
    };
  } else if (query.course) {
    queryName = {
      name: "courses_offered",
      value: query.course,
    };
  }
  console.log(queryName);
  res.status(200).json({
    message: "working!",
  });
};
