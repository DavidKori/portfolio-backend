import Contact from "../models/Contact.js";

// Public
export const getContact = async (req, res) => {
  const contact = await Contact.findOne();
  res.json(contact);
};

// Admin
export const updateContact = async (req, res) => {
  let contact = await Contact.findOne();
  if (!contact) {
    contact = new Contact(req.body);
    await contact.save();
    return res.status(201).json(contact);
  }
  Object.assign(contact, req.body);
  await contact.save();
  res.json(contact);
};
