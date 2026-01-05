// models/Achievement.js
import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
  {
    title: String,
    issuer: String,
    year: Number,
    description: String,
    badgeImageUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Achievement", achievementSchema);
