const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        content: { type: String, required: true },
        author: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Post