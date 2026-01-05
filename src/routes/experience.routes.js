import express from "express";
import { getExperience,
     createExperience,
      updateExperience,
       deleteExperience,
    bulkCreateExperience
    } from "../controllers/experience.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getExperience);

// Admin
router.post("/", protect, createExperience);
router.put("/:id", protect, updateExperience);
router.delete("/:id", protect, deleteExperience);
router.post("/bulk", protect, bulkCreateExperience);

export default router;
