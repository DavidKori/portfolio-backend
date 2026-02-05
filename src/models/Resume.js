// models/Resume.js
import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    resumePdfUrl: String,
    lastUpdated: Date,
    education: [String],
    experience: [String],
    skills: [String]
  },
  { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);
