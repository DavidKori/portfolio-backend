// models/Profile.js
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    professionalTitle: String,
    tagline: String,
    shortIntro: String,
    profileImageUrl: String,
    introVideoUrl: String,
    heroImageUrl:String,
    ctaButtons: [
      {
        label: String,
        link: String
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
