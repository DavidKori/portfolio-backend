import Message from "../models/Message.js";

// admin
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ year: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// public
export const createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!message) return res.status(404).json({ message: "Message not found" });
    res.json(message);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//admin
export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).json({ message: "Message not found" });
    res.json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// export const bulkCreateMessages = async (req, res) => {
//   if (!Array.isArray(req.body)) {
//     return res.status(400).json({ message: "Expected array" });
//   }
//   const messages = await Message.insertMany(req.body);
//   res.status(201).json(messages);
// };
