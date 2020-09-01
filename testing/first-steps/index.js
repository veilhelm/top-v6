function sum(a, b, c = 0) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

function person(name, age) {
  return {
    name, 
    age,
    greet() {
      return 'hola mundo'
    }
  }
}

function map(cb) {
  cb();
}

function isWorking(working) {
  if(working) {
    return "I'm working"
  } else {
    return "I'm free!"
  }
}

module.exports = {sum, multiply, person, map, isWorking};
