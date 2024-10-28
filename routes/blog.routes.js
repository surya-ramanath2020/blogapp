const express = require("express");
const router = express.Router(); 

const { createBlog, getAllBlogs,getBlogDetails,updateBlog,deleteBlog } = require("../controllers/blog.controller");

const routes = () => {
    router.post("/blogs", createBlog);
    router.get("/blogs", getAllBlogs);
    router.get("/blogs/:id", getBlogDetails);
    router.put("/blogs/:id",updateBlog);
    router.delete("/blogs/:id", deleteBlog);

    return router;
};

module.exports = routes;