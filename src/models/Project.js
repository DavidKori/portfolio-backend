// models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    techStack: [String],
    role: String,
    githubUrl: String,
    liveUrl: String,
    imageUrl: String,
    videoUrl: String,
    featured: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
