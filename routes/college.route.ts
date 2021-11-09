import { Router } from "express";
import { getColleges } from "../controllers/college.controller";

export const router = Router();
router.get("/college");
router.get("/colleges", getColleges);
