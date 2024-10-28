const express = require('express')
const router = express.Router()
const BlogRoutes = require("./blog.routes");

router.use("/blog", BlogRoutes());

module.exports=router