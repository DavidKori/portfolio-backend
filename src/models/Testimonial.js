// models/Testimonial.js
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: String,
    roleOrRelation: String,
    message: String,
    avatarUrl: String,
    companyLogoUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
