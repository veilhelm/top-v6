const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: String,
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Post = model('Post', postSchema);

module.exports = Post;

