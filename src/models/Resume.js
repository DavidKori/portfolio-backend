// models/Resume.js
import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    resumePdfUrl: String,
    lastUpdated: Date
  },
  { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);
