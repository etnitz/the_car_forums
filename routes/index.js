const { Router } = require('express');
const controllers = require('./controllers/index');
const router = Router();

router.get('/posts', controllers.getAllPosts);

router.post('/createPosts', controllers.createPost);


module.exports = router;