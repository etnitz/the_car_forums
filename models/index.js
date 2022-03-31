const { model } = require('mongoose')
const PostSchema = require('./post')

const Post = model('posts', PostSchema)


module.exports = {
    Post
}