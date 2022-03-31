const db = require('../db')
const { Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createPosts = async () => {
    const posts = [{
        title: 'Aston Martin DB6',
        content: "This car is awesome!",
        author: "CarDude5000",
    }
]

    await Post.insertMany(posts)
    console.log('Created posts!')
    return posts
}

const run = async () => {
    await createPosts()
    db.close()
}

run()