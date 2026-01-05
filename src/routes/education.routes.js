import express from "express";
import { getEducation, createEducation, updateEducation, deleteEducation } from "../controllers/education.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getEducation);

// Admin
router.post("/", protect, createEducation);
router.put("/:id", protect, updateEducation);
router.delete("/:id", protect, deleteEducation);

export default router;
