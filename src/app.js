// import uploadRoutes from "./routes/upload.routes.js";
// import authRoutes from "./routes/auth.routes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import projectRoutes from "./routes/projects.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import aboutRoutes from "./routes/about.routes.js";
import skillRoutes from "./routes/skills.routes.js";
import experienceRoutes from "./routes/experience.routes.js";
import educationRoutes from "./routes/education.routes.js";
import certificationRoutes from "./routes/certifications.routes.js";
import achievementRoutes from "./routes/achievement.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import testimonialRoutes from "./routes/testimonials.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import socialRoutes from "./routes/social.routes.js";
import settingsRoutes from "./routes/settings.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON body
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // logging

app.use("/api/profile", profileRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/social", socialRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/messages", messageRoutes)

const MONGO_URI = process.env.MONGO_URI;
// const MONGO_URI = "mongodb://localhost:27017/DavidKoriDb"
// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/projects", projectRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});

export default app;

