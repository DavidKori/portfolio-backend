// models/Skill.js
import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database", "Tools", "Other"],
      required: true
    },
    level: String,
    iconUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
