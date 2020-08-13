const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.route('/:userId/posts').get(postController.list);
router.route('/:userId/posts').post(postController.create);

module.exports = router;
