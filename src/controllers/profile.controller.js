import Profile from "../models/Profile.js";

// Public
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin
export const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile(req.body);
      await profile.save();
      return res.status(201).json(profile);
    }
    Object.assign(profile, req.body);
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
