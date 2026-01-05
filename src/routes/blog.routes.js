import express from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  bulkCreateBlogs
} from "../controllers/blog.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getBlogs);
router.get("/:id", getBlogById);

// Admin
router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);
router.post("/bulk", protect, bulkCreateBlogs);

export default router;
