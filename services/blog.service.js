const { Blog } = require("../models/blog.model");

async function createBlog(title, description, category) {
    try {
        const newBlog = new Blog({ title, description, category });
        const savedBlog = await newBlog.save();
        return savedBlog;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllBlogs() {
    try {
        const blogs = await Blog.find().sort({ created_at: 'desc' });
        console.log(blogs);
        return blogs;
    } catch (error) {
        console.error('Error fetching all blogs:', error);
        throw new Error('Failed to fetch blogs from the database');
    }
}


async function getBlogById(id) {
    try {
        const blog = await Blog.findById(id);
        console.log(blog);
        return blog;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function updateBlog(id, title, description, category) {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, description, category },
            { new: true }
        );
        return updatedBlog;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function deleteBlog(id) {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        return deletedBlog;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {getAllBlogs,createBlog,getBlogById,updateBlog,deleteBlog}