import GlobalSettings from "../models/Settings.js";

// Public
export const getSettings = async (req, res) => {
  const settings = await GlobalSettings.findOne();
  res.json(settings);
};

// Admin
export const updateSettings = async (req, res) => {
  let settings = await GlobalSettings.findOne();
  if (!settings) {
    settings = new GlobalSettings(req.body);
    await settings.save();
    return res.status(201).json(settings);
  }
  Object.assign(settings, req.body);
  await settings.save();
  res.json(settings);
};
