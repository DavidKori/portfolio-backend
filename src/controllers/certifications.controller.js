import Certification from "../models/Certification.js";

// Public
export const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find().sort({ year: -1 });
    res.json(certs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin
export const createCertification = async (req, res) => {
  try {
    const cert = new Certification(req.body);
    await cert.save();
    res.status(201).json(cert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateCertification = async (req, res) => {
  try {
    const cert = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cert) return res.status(404).json({ message: "Certification not found" });
    res.json(cert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteCertification = async (req, res) => {
  try {
    const cert = await Certification.findByIdAndDelete(req.params.id);
    if (!cert) return res.status(404).json({ message: "Certification not found" });
    res.json({ message: "Certification deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const bulkCreateCertifications = async (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ message: "Expected array" });
  }
  const certs = await Certification.insertMany(req.body);
  res.status(201).json(certs);
};
