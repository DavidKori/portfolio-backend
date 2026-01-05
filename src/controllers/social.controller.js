import Social from "../models/SocialLinks.js";

// Public
export const getSocialLinks = async (req, res) => {
  const links = await Social.find();
  res.json(links);
};

// Admin
export const createSocialLink = async (req, res) => {
  const link = new Social(req.body);
  await link.save();
  res.status(201).json(link);
};

export const updateSocialLink = async (req, res) => {
  const link = await Social.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!link) return res.status(404).json({ message: "Social link not found" });
  res.json(link);
};

export const deleteSocialLink = async (req, res) => {
  const link = await Social.findByIdAndDelete(req.params.id);
  if (!link) return res.status(404).json({ message: "Social link not found" });
  res.json({ message: "Social link deleted" });
};
export const bulkCreateSocialLinks = async (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ message: "Expected array" });
  }
  const links = await Social.insertMany(req.body);
  res.status(201).json(links);
};
