// models/About.js
import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    bio: String,
    careerFocus: String,
    currentGoal: String,
    highlights:[String]
  
  },
  { timestamps: true }
);

export default mongoose.model("About", aboutSchema);
