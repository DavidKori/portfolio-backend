import About from "../models/About.js";

// Public
export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin
export const updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About(req.body);
      await about.save();
      return res.status(201).json(about);
    }
    Object.assign(about, req.body);
    await about.save();
    res.json(about);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
