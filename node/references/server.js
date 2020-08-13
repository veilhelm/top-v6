const express = require('express');
const cors = require('cors');
const db = require('./src/db');
const userRouter = require('./src/routes/user');
const postRouter = require('./src/routes/post');

const port = 8000;

const app = express();
db();

app.use(cors());
app.use(express.json());

app.use('/users', userRouter, postRouter);

// /users/:userId/posts
// app.use('/users', );

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
