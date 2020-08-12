const express = require('express');
const cors = require('cors');
const db = require('./src/db');
const userRouter = require('./src/routes/user');

const port = 8000;

const app = express();
db();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter)

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
