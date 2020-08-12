const { Schema, model, models } = require('mongoose');

// const emailRegExp = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const emailRegExp = new RegExp('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}');

const uniqueEmail = {
  validator(email) {
    return models.User.findOne({ email })
      .then(user => !user)
      .catch(() => false);
  },
  message: 'El email ya existe',
};

const userSchema = new Schema({
  name: {
    type: String,
    required: [ true, 'El campo nombre es required' ],
    // minlength: 7,
    // maxlength: 3,
    enum: {
      values: [ 'Maria', 'Juan', 'Ana', 'Pedro' ],
      message: 'No es una opción valida',
    },
  },
  age: {
    type: Number,
    // min: [ 24, 'La edad mínima es 24' ],
    max: [ 32, 'La edad máxima es 32' ],
    validate: {
      validator(value) {
        console.log(value);
        return value >= 24;
      },
      message: 'No cumple con la condición',
    }
  },
  email: {
    type: String,
    match: [ emailRegExp, 'El email es invalido' ],
    validate: [ uniqueEmail ]
  },
  working: {
    type: Boolean,
    default: false,
  },
  // posts: {
  //   type: [String]
  // }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;
