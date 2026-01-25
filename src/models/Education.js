// models/Education.js
import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    institution: String,
    degree: String,
    fieldOfStudy: String,
    period:String,
    description: String,
    institutionLogoUrl: String,
    certificateUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Education", educationSchema);
