const Task = require('../models/task.model');

module.exports = {
  list(req, res) {
    Task
      .find()
      // .findOne({ title: 'new task' })
      .then((tasks) => res.status(200).json(tasks))
  },
  create(req, res) {
    const data = req.body;

    Task
      .create(data)
      .then((task) => res.status(200).json(task))
      .catch((err) => res.status(400).json(err));
  },
  show(req, res) {
    const { id } = req.params;

    Task
      .findById(id)
      .then(task => res.status(200).json(task))
      .catch(() => res.status(400).json({ message: `Could not find task with id ${id}` }));
  },
  update(req, res) {
    const { id } = req.params;
    const data = req.body;

    Task
      .findByIdAndUpdate(id, data, { new: true })
      .then(task => res.status(200).json(task))
      .catch(err => res.status(400).json(err));
  },
  destroy(req, res) {
    const { id } = req.params;

    Task
      .findByIdAndDelete(id)
      .then(task => res.status(200).json(task))
      .catch(() => res.status(400).json({ message: `Could not find task with id ${id}` }));
  }
}
