// Scope
// Hoisting
// Closure
// Implicit Cohercion

// Static Scope o Lexical Scope

// Entorno Global
// Navegador: window
// NodeJS: global

// Global
  // bar
  // baz

// baz
  // foo
  // faz

// faz
  //fuz

var bar = 'foo';

if(true) {
  // var buz = 'fuz';
  let buz = 'fuz';
}

for(var i = 0; i <= 5; i++) {}

function baz() {
  var foo = 'bar';
  // console.log(fuz);
  console.log(buz); // fuz
  console.log(i);

  function faz() {
    console.log(bar); // foo
    console.log(foo); // bar

    var fuz = 'baz';
  }
}

// baz();

// Hoisting
// var boo;
// var, function declaration
// console.log(boo);
// greet();

// Anonymous function
// let greet = function () {
//   console.log('hola mundo');
// }

// Arrow function
// let greet = () => {
//   console.log('hola mundo');
// }

// Function Declaration
function greet() {
  console.log('hola mundo');
}

// let boo = 'faz';
// const boo = 'faz';
var boo = 'faz';
// console.log(boo);

// Closure

function app(arg) {
  let hoo = 'app';

  let fun = (arg2) => {
    console.log(hoo, arg2);
  }

  let fun2 = () => {
    console.log(arg)
  }

  return {
    fun: fun,
    fun2: fun2
  };
}

let far = app(25);
far.fun();
far.fun2();

function filter(num) {
  return function(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === num) {
        res.push(i);
      }
    }
    return res;
  }
}

function position(arr, num) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      res.push(i);
    }
  }
  return res;
}

let positions1 = filter(1);
let positions2 = filter(2);
let positions3 = filter(3);

console.log(positions1([1,2,3,1,2,3]));
console.log(positions2([1,2,3,1,2,3]));
console.log(positions3([1,2,3,1,2,3]));

function math() {
  let res = 0;

  function sum(num) {
    return res += num;
  }

  function multiply(num) {
    return res *= num;
  }

  function getResult() {
    console.log(res);
  }

  // sum => definition
  // sum() => execution

  return {
    sum: sum,
    multiply: multiply,
    getResult: getResult,
  };
}

let calc = math();
calc.sum(10);
calc.sum(5);
calc.multiply(3);
calc.sum(5);
calc.getResult();

// Implicit Cohercion
// === vs ==
console.log(1 == "1");
console.log(1 === parseInt("1"));

console.log(1 + "1");
console.log(1 - "1");
console.log(1 + []);

// falsy values
  // 0
  // undefined
  // null
  // NaN
  // ""
  // false

  if(0) {
    console.log('here')
  }


