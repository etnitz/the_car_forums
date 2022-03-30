const { Router } = require('express');
const controllers = require('../controllers/index');
const router = Router();

router.get('/posts', controllers.getAllPosts);

router.post('/createPosts', controllers.createPost);

router.get('/posts/:id', controllers.getPostById)

router.put('/posts/:id', controllers.updatePost)

router.delete('/posts/:id', controllers.deletePost)


module.exports = router;