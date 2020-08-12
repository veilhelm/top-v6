// CommonJS
const express = require('express');
const uuid = require('uuid-random');
// module.exports = express;

// const { someLibrary } = require('./path/to/library');
// module.exports = { someLibrary, otherLibrary };

const app = express();

app.use(express.json());

let tasks = [];

// CRUD

// RESTful APIs
// Create
// POST / - /tasks/, /users/, /posts/

// READ
// GET / - /tasks/, /users/, /posts/
// GET /:id - /tasks/:taskId

// UPDATE
// PUT /:id - /tasks/:id

// DELETE
// DELETE /:id - /tasks/:id

// endpoint
app.get('/', (req, res) => {
  // res.status(301).json({ message: 'Hola mundo' });
  res.status(200).json(tasks);
});

app.post('/', (req, res) => {
  const { title } = req.body;

  const task = {
    id: uuid(),
    title,
  };

  tasks.push(task);

  res.status(200).json(task);
});

app.get('/:id', (req, res) => {
  const { id } = req.params;
  const [task] = tasks.filter((el) => el.id === id);

  res.status(200).json(task);
});

app.put('/:id', (req, res) => {
  const { id } = req.params;

  tasks = tasks.map((task) => {
    if(task.id === id) {
      return {
        ...task,
        ...req.body,
      };
    }

    return task;
  });

  res.status(200).json('Ok')
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((task) => task.id !== id);

  res.status(200).json('ok')
})

// app.get('/:id', (request, response) => {
//   console.log(request.params);
//   console.log(request.query);
// });

app.get('/about', () => {
  console.log('about');
});

app.listen(8000, () => console.log('App listening on http://localhost:8000'));
