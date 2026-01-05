// models/Experience.js
import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    roleTitle: String,
    organization: String,
    employmentType: String,
    startDate: Date,
    endDate: Date,
    description: String,
    techUsed: [String],
    logoUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Experience", experienceSchema);
