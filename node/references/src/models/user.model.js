const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    // validate: [
    //   {
    //     validator(posts) {
    //       return post.length >= 1;
    //     }
    //   }
    // ]
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;
