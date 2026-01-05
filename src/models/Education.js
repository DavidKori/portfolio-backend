// models/Education.js
import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    institution: String,
    degree: String,
    fieldOfStudy: String,
    startYear: Number,
    endYear: Number,
    description: String,
    institutionLogoUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Education", educationSchema);
