// models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDescription: String,
    longDescription: String,
    techStack: [String],
    role: String,
    githubUrl: String,
    liveUrl: String,
    images: [String],
    demoVideoUrl: String,
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
