import express from "express";
import {
  getSocialLinks,
  createSocialLink,
  updateSocialLink,
  deleteSocialLink,
  bulkCreateSocialLinks
} from "../controllers/social.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getSocialLinks);

// Admin
router.post("/", protect, createSocialLink);
router.put("/:id", protect, updateSocialLink);
router.delete("/:id", protect, deleteSocialLink);
router.post("/bulk", protect, bulkCreateSocialLinks);

export default router;
