const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8000;

const app = express();

// HOF - High Order Function
function logger(config) {
  return async function (req, res, next) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('requesting data!');
      }, 1000);
    });

    const data = await promise;
    console.log(data);

    req.user = 'Juan';

    next();
  }
}

app.use(express.json()); // -> data -> format data -> lo agrega al request en la propiedad body -> next
// app.use(express.urlencoded({ extended: true });
// Cross Origin Resources Sharing
app.use(cors()); // -> agregar los diferentes encabezados de CORS
app.use(logger('some config'));
// app.use('/about', logger);

// router.use(logger);
// router.route('/').get(logger, taskController.list);
// router.route('/').post(taskController.create);

// app.use('/tasks', taskRouter);

app.get('/', logger('middleware config'), (req, res) => {
  res.send('Hello world');
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.user)
  res.send('hola');
})

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/about/:id', (req, res) => {
  res.send(`About ${req.params.id}`)
})

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
