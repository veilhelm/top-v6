require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./src/routes/user');

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server listening on http://localhost${port}`)
});

