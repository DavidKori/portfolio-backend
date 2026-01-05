import Resume from "../models/Resume.js";

// Public
export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin
export const updateResume = async (req, res) => {
  try {
    let resume = await Resume.findOne();
    if (!resume) {
      resume = new Resume(req.body);
      await resume.save();
      return res.status(201).json(resume);
    }
    Object.assign(resume, req.body);
    await resume.save();
    res.json(resume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
