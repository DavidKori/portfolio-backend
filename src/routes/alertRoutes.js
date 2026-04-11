import express from 'express';
import { 
    createAlert,
    getAlert,
    updateAlert,
    deleteAlert
} from "../controllers/alertController.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public route - anyone can view alerts
router.get("/", getAlert);

// Protected routes - only authenticated users can modify alerts
router.post("/createAlert", protect, createAlert);
router.put("/updateAlert", protect, updateAlert);
router.delete("/deleteAlert", protect, deleteAlert);

export default router;