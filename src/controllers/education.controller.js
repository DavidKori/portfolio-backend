// src/controllers/education.controller.js
import Education from "../models/Education.js";

export const getEducation = async (req, res) => {
  const edu = await Education.find().sort({ endYear: -1 });
  res.json(edu);
};

export const createEducation = async (req, res) => {
  const edu = new Education(req.body);
  await edu.save();
  res.status(201).json(edu);
};

export const updateEducation = async (req, res) => {
  const edu = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!edu) return res.status(404).json({ message: "Education not found" });
  res.json(edu);
};

export const deleteEducation = async (req, res) => {
  const edu = await Education.findByIdAndDelete(req.params.id);
  if (!edu) return res.status(404).json({ message: "Education not found" });
  res.json({ message: "Education deleted" });
};
