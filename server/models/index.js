const { model } = require('mongoose')
const PostSchema = require('./post')
const TopicSchema = require('./topic')

const Post = model('posts', PostSchema)
const Topic = model('topics', TopicSchema)

module.exports = {
    Post,
    Topic
}