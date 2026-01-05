// models/Settings.js
import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    siteTitle: String,
    metaDescription: String,
    defaultTheme: String,
    sectionOrder: [String],
    maintenanceMode: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Settings", settingsSchema);
