import express from "express";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  bulkCreateProjects
} from "../controllers/projects.controller.js";

import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getProjects);
router.get("/:id", getProjectById);

// Admin
router.post("/", protect, createProject);
router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);
router.post("/bulk", protect, bulkCreateProjects);

export default router;
