import Skill from "../models/Skill.js";

// Public
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, name: 1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin
export const createSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json(skill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin - Bulk create skills
export const bulkCreateSkills = async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: "Expected an array of skills" });
    }

    const skills = await Skill.insertMany(req.body);
    res.status(201).json(skills);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

