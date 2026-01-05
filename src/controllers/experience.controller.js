// src/controllers/experience.controller.js
import Experience from "../models/Experience.js";

export const getExperience = async (req, res) => {
  const exp = await Experience.find().sort({ startDate: -1 });
  res.json(exp);
};

export const createExperience = async (req, res) => {
  const experience = new Experience(req.body);
  await experience.save();
  res.status(201).json(experience);
};

export const updateExperience = async (req, res) => {
  const exp = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!exp) return res.status(404).json({ message: "Experience not found" });
  res.json(exp);
};

export const deleteExperience = async (req, res) => {
  const exp = await Experience.findByIdAndDelete(req.params.id);
  if (!exp) return res.status(404).json({ message: "Experience not found" });
  res.json({ message: "Experience deleted" });
};
export const bulkCreateExperience = async (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ message: "Expected array" });
  }
  const experience = await Experience.insertMany(req.body);
  res.status(201).json(experience);
};
