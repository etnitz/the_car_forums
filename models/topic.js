const { Schema } = require('mongoose')

const Topic = new Schema(
    {
        category: { type: String, required: true },
        post: {type: Schema.Types.ObjectId, ref: 'posts' }
    },
    { timestamps: true }
)

module.exports = Topic