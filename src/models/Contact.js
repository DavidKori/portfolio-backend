// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    email: String,
    location: String,
    phone: String,
    contactFormEnabled: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
