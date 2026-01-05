import express from "express";
import {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
  bulkCreateCertifications
} from "../controllers/certifications.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getCertifications);

// Admin
router.post("/", protect, createCertification);
router.put("/:id", protect, updateCertification);
router.delete("/:id", protect, deleteCertification);
router.post("/bulk", protect, bulkCreateCertifications);

export default router;
