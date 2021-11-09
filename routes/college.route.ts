import { Router } from "express";
import { getColleges, getCollege } from "../controllers/college.controller";

export const router = Router();
router.get("/college", getCollege);
router.get("/colleges", getColleges);
