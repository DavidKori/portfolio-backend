import Blog from "../models/Blog.js";

// Public: only published blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "published" }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Public single blog
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog || blog.status !== "published") return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin
export const createBlog = async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};

export const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json({ message: "Blog deleted" });
};
export const bulkCreateBlogs = async (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ message: "Expected array" });
  }
  const blogs = await Blog.insertMany(req.body);
  res.status(201).json(blogs);
};
