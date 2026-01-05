import express from "express";
import { getContact, updateContact } from "../controllers/contact.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getContact);
router.put("/", protect, updateContact);

export default router;
