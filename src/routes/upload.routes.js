import express from "express";
import protect from "../middleware/auth.middleware.js";
import { upload, uploadToCloudinary } from "../middleware/upload.middleware.js";

// models
import Profile from "../models/Profile.js";
import Project from "../models/Project.js";
import Education from "../models/Education.js";
import Certification from "../models/Certification.js";
import Achievement from "../models/Achievements.js";
import Blog from "../models/Blog.js";
import Testimonial from "../models/Testimonial.js";
import Resume from "../models/Resume.js";

const router = express.Router();

/**
 * helper function
 */
const uploadAndSave = async ({ file, folder, model, id, field }) => {
  const result = await uploadToCloudinary(file.buffer, folder);

  if (model && field) {
    if (id) {
      await model.findByIdAndUpdate(id, { [field]: result.secure_url });
    } else {
      // for singleton models like Profile / Resume
      await model.findOneAndUpdate({}, { [field]: result.secure_url }, { upsert: true });
    }
  }

  return result.secure_url;
};

/* ===================== PROFILE ===================== */

// hero image
router.post("/profile/hero", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "profile/hero",
      model: Profile,
      field: "heroImageUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Hero upload failed" });
  }
});

// profile photo
router.post("/profile/photo", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "profile/photo",
      model: Profile,
      field: "profileImageUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Profile photo upload failed" });
  }
});

/* ===================== PROJECT ===================== */

router.post("/project", protect, upload.single("file"), async (req, res) => {
  try {
    // const result = await uploadToCloudinary(req.file.buffer, "projects");

    // await Project.findByIdAndUpdate(req.params.id, {
    //   $push: { imageUrl: result.secure_url }
    // });

    // res.json({ url: result.secure_url });
      const url = await uploadAndSave({
      file: req.file,
      folder: "project",
      model: Project,
      field: "imageUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Project image upload failed" });
  }
});

/* ===================== EDUCATION ===================== */

router.post("/education/certificate", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "education",
      model: Education,
      id: req.params.id,
      field: "certificateUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Education upload failed" });
  }
});

/* ===================== CERTIFICATION ===================== */

router.post("/certifications/cert/:id", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "certifications/cert",
      model: Certification,
      id: req.params.id,
      field: "certificateImageUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Certificate upload failed" });
  }
});

router.post("/certifications/badge/:id", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "certifications/badge",
      model: Certification,
      id: req.params.id,
      field: "credentialUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Badge upload failed" });
  }
});

/* ===================== ACHIEVEMENTS ===================== */

router.post("/achievements/icon/:id", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "achievements",
      model: Achievement,
      id: req.params.id,
      field: "badgeImageUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Achievement icon upload failed" });
  }
});

/* ===================== BLOG ===================== */

router.post("/blogs/image/:id", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "blogs",
      model: Blog,
      id: req.params.id,
      field: "coverImageUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Blog image upload failed" });
  }
});

/* ===================== TESTIMONIAL ===================== */

router.post("/testimonial/image/:id", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "testimonials",
      model: Testimonial,
      id: req.params.id,
      field: "avatarUrl"
    });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Testimonial image upload failed" });
  }
});

/* ===================== RESUME ===================== */

router.post("/resume/file", protect, upload.single("file"), async (req, res) => {
  try {
    const url = await uploadAndSave({
      file: req.file,
      folder: "resume",
      model: Resume,
      field: "resumePdfUrl"
    });

    await Resume.findOneAndUpdate(
      {},
      { lastUpdated: new Date() },
      { upsert: true }
    );

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: "Resume upload failed" });
  }
});

export default router;

