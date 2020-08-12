const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  title: String,
  description: String,
  status: Boolean,
}, {
  timestamps: true,
});

const Task = model('Task', taskSchema);

// Task -> tasks
// Post -> posts

module.exports = Task;
