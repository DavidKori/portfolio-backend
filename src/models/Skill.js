// models/Skill.js
import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database","DevOps & Cloud","Programming Languages", "Tools", "Mobile Development", "Testing", "Design & UI/UX", "Data Science & AI", "Blockchain", "Game Development", "CMS & E-commerce", "Other"],
      required: true
    },
    level: String,
    iconUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
