import express from "express";
import {
  getMessages,
  createMessage,
  deleteMessage,
  updateMessage,
  getUnreadMessages
} from "../controllers/message.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.post("/", createMessage);


// Admin
router.get("/", protect, getMessages);
router.delete("/:id", protect, deleteMessage);
router.put("/:id/read",protect,updateMessage)
router.get("/:id/unread",protect,getUnreadMessages)
export default router;