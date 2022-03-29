const { Schema } = require('mongoose')

const Topic = new Schema(
    {
        title: { type: String, required: true },
        category: { type: String, required: true },
        post: {type: Schema.Types.ObjectId, ref: 'posts' }
    },
    { timestamps: true }
)

module.exports = Topic