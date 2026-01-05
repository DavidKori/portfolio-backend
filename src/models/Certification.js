// models/Certification.js
import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    title: String,
    provider: String,
    year: Number,
    credentialUrl: String,
    certificateImageUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Certification", certificationSchema);
