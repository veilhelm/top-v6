require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { formData } = require('./utils/middlewares');

const app = express();
const port = 8000;

app.use(cors());
//app.use(express.json())
app.use(morgan('dev'));

app.post('/', formData, (req, res) => {
  console.log(req.body);
  res.send('hola mundo')
})

app.listen(port, () => console.log('http://localhost:8000'))
