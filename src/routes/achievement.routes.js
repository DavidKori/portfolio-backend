import express from "express";
import {
  getAchievements,
  createAchievement,
  updateAchievement,
  deleteAchievement,
  bulkCreateAchievements
} from "../controllers/achievements.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getAchievements);

// Admin
router.post("/", protect, createAchievement);
router.put("/:id", protect, updateAchievement);
router.delete("/:id", protect, deleteAchievement);
router.post("/bulk", protect, bulkCreateAchievements);

export default router;
