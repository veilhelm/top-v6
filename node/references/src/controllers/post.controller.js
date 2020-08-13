const Post = require('../models/post.model');
const User = require('../models/user.model');

module.exports = {
  list(req, res) {
    const { userId } = req.params;

    Post
      .find({ user: userId })
      .populate('user', 'name')
      .then(posts => res.status(200).json(posts))
  },
  create(req, res) {
    const data = req.body;
    const { userId } = req.params;

    User
      .findById(userId)
      .then(user => {
        Post
          // .create({ ...data, user: userId })
          .create({ ...data, user })
          .then(post => {
            user.posts.push(post);
            user
              .save()
              .then(() => res.status(200).json(post));
          })
          .catch(err => res.status(400).json(err));
      })

  }
}
