// models/SocialLink.js
import mongoose from "mongoose";

const socialLinkSchema = new mongoose.Schema(
  {
    platform: String,
    url: String,
    iconUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("SocialLink", socialLinkSchema);
