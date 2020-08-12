const express = require('express');
const cors = require('cors');
const db = require('./src/db');
const taskRouter = require('./src/routes/task');

const app = express();
db();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);

app.listen(8000, () => console.log('App running on http://localhost:8000'));
