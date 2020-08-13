const Post = require('../models/post.model');
const User = require('../models/user.model');

module.exports = {
  async list(req, res) {
    const { userId } = req.params;

    const posts = await Post.find({ user: userId }).populate('user', 'name')
    res.status(200).json(posts)
  },
  async create(req, res) {
    try {
      const data = req.body;
      const { userId } = req.params;

      const user = await User.findById(userId);
      const post = await Post.create({ ...data, user });

      user.posts.push(post);
      await user.save();

      res.status(200).json(post);
    } catch(err) {
      res.status(400).json(err);
    }

    // User
    //   .findById(userId)
    //   .then(user => {
        // Post
          // .create({ ...data, user: userId })
          // .create({ ...data, user })
          // .then(post => {
          //   user.posts.push(post);
          //   user
          //     .save()
          //     .then(() => res.status(200).json(post));
          // })
          // .catch(err => res.status(400).json(err));
    // })
  }
}
