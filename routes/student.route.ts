import { Router } from "express";

export const router = Router();

router.get("/students");
router.get("/student/:id");
