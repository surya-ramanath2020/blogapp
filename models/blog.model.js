const mongoose = require('mongoose')

// Define the Blog schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
     },
    category: {
        type: String,
        required: true,
    },
}, { timestamps: true });// Add timestamps for automatic creation/modification tracking
module.exports = { Blog: mongoose.model('Blog', blogSchema) }



