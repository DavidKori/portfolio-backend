// models/Blog.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    content: String,
    excerpt: String,
    tags: [String],
    coverImageUrl: String,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft"
    },
    publishedAt: Date
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
