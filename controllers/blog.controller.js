const BlogService = require("../services/blog.service");
async function createBlog(req, res) {
  try {
      const { title, description, category } = req.body;
      const savedBlog = await BlogService.createBlog(title, description, category);
      res.json(savedBlog);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}
async function getAllBlogs(req, res) {
  try {
      const blogs = await BlogService.getAllBlogs();
      res.json(blogs);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching all blogs:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
}

async function getBlogDetails(req, res) {
  try {
      const blog = await BlogService.getBlogById(req.params.id);
      if (!blog) {
          return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(blog);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

async function updateBlog(req, res) {
  try {
      const { title, description, category } = req.body;
      const updatedBlog = await BlogService.updateBlog(req.params.id, title, description, category);
      if (!updatedBlog) {
          return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(updatedBlog);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

async function deleteBlog(req, res) {
  try {
      const deletedBlog = await BlogService.deleteBlog(req.params.id);
      if (!deletedBlog) {
          return res.status(404).json({ message: 'Blog not found' });
      }
      res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

  
module.exports = {createBlog,getAllBlogs,getBlogDetails,updateBlog,deleteBlog};