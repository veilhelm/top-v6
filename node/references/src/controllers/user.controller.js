const User = require('../models/user.model');

module.exports = {
  list(req, res) {
    User
      .find()
      .populate('posts')
      .then(users => res.status(200).json(users))
  },
  create(req, res) {
    const data = req.body;

    User
      .create(data)
      .then(user => res.status(200).json(user))
      .catch(err => res.status(400).json(err));
  }
}
