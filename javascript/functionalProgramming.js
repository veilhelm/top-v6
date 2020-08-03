// se basa en funciones
function greet() {
  console.log('hola mundo');
}

let greet2 = greet;

// Callback
function greet3(cb) {
  cb();
}

greet3(greet);

function multiply(factor) {
  return function (num) {
    return factor * num
  }
}

// multiply(10)(3);

// Inmutabilidad
let arr = [1,2,3,5];
arr = arr.slice(0, 2);

// Pure functions

// dados los mismos argumentos siempre retorna el mismo resultado.
function sum(a, b) {
  return a + b;
}

sum(1,2); // 3
sum(1,2); // 3
sum(1,2); // 3

// no tiene "side effect"
let res = 1;

function multiply(num) {
  console.log(res);
  return res *= num;
}

console.log(multiply(2));
console.log(multiply(2));
console.log(multiply(2));

// Métodos
let arr3 = [1,2,3,4,5];

// arr.map()
// arr.filter()
// arr.forEach()
// arr.reduce()
// arr.every()
// arr.some()
// arr.concat()

function callback(element, index, array) {
  return element * 2;
}

// arr3 = arr3.map(callback);
// console.log(arr3);

Array.prototype.customMap = function(cb) {
  let result = [];

  for(let i = 0; i < this.length; i++) {
    const op = cb(this[i], i, this);
    result = result.concat(op);
  }

  return result;
}

arr3 = arr3.customMap(callback);
console.log(arr3);


