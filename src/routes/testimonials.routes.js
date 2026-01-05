import express from "express";
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  bulkCreateTestimonials
} from "../controllers/testimonials.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getTestimonials);

// Admin
router.post("/", protect, createTestimonial);
router.put("/:id", protect, updateTestimonial);
router.delete("/:id", protect, deleteTestimonial);
router.post("/bulk", protect, bulkCreateTestimonials);

export default router;
