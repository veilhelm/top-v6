const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.route('/').post(userController.create);
router.route('/:id').put(userController.update);

module.exports = router;
