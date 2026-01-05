

import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";

// 1️⃣ Configure multer to store files in memory
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },
});

// 2️⃣ Function to upload to Cloudinary
const uploadToCloudinary = (fileBuffer, folder = "portfolio") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" }, // handles images & videos
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    // Convert buffer to stream and pipe to Cloudinary
    Readable.from(fileBuffer).pipe(stream);
  });
};

export { upload, uploadToCloudinary };
