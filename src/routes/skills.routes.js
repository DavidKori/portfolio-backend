import express from "express";
import { getSkills, createSkill, updateSkill, deleteSkill,bulkCreateSkills } from "../controllers/skills.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getSkills);

// Admin
router.post("/", protect, createSkill);
router.put("/:id", protect, updateSkill);
router.delete("/:id", protect, deleteSkill);
router.post("/bulk", protect, bulkCreateSkills);

export default router;
