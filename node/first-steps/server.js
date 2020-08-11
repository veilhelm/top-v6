// CommonJS
const express = require('express');
const uuid = require('uuid-random');
// module.exports = express;

// const { someLibrary } = require('./path/to/library');
// module.exports = { someLibrary, otherLibrary };

const app = express();

app.use(express.json());

const tasks = [];

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

// app.get('/:id', (request, response) => {
//   console.log(request.params);
//   console.log(request.query);
// });

app.get('/about', () => {
  console.log('about');
});

app.listen(8000, () => console.log('App listening on http://localhost:8000'));
