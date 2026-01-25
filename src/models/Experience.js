// models/Experience.js
import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    role: String,
    company: String,
    employmentType: String,
    period: String,
    description: String,
    techUsed: [String],
    logoUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Experience", experienceSchema);
