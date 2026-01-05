import Achievement from "../models/Achievements.js";

// Public
export const getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ date: -1 });
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin
export const createAchievement = async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    await achievement.save();
    res.status(201).json(achievement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!achievement) return res.status(404).json({ message: "Achievement not found" });
    res.json(achievement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndDelete(req.params.id);
    if (!achievement) return res.status(404).json({ message: "Achievement not found" });
    res.json({ message: "Achievement deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const bulkCreateAchievements = async (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ message: "Expected array" });
  }
  const achievements = await Achievement.insertMany(req.body);
  res.status(201).json(achievements);
};

