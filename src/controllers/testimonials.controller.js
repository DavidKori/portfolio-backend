import Testimonial from "../models/Testimonial.js";

// Public
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin
export const createTestimonial = async (req, res) => {
  const testimonial = new Testimonial(req.body);
  await testimonial.save();
  res.status(201).json(testimonial);
};

export const updateTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });
  res.json(testimonial);
};

export const deleteTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
  if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });
  res.json({ message: "Testimonial deleted" });
};
export const bulkCreateTestimonials = async (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ message: "Expected array" });
  }
  const testimonials = await Testimonial.insertMany(req.body);
  res.status(201).json(testimonials);
};

