'use strict';

var foo = 'foo';

function bar(arg) {
  console.log(this, arg);
}
// const bar = (arg) => {
//   console.log(this);
// }

// 1. El this por defecto es el entorno Global. Undefined si JS está en modo estricto.
bar(25);

// 2. El this es el objeto desde el cual estamos invocando la función
const obj = {
  foo: 'baz',
  bar: bar
};

obj.bar(25);

// 3. El this es el objeto definido por el usuario
const obj2 = {
  foo: 'faz'
}

// obj.bar.call(obj2);

// soft binding
bar.call(obj2, 1);
bar.apply(obj2, [25]);

// hard binding
// function bar2(arg) {
//   return bar.apply(obj2, [arg]);
// }

let bar2 = bar.bind(obj2, 6);

bar2(4);
bar2.call(obj);

// 4. Al utilizar la palabra clave new:
  // 1. Se crea un nuevo objeto en la función.
  // 2. Al this se le asigna el nuevo objeto creado.
  // 3. El nuevo objeto es asociado con un prototipo.
  // 4. Si la función no está retornando un objeto, entonces retorna el this.

function Person(name, age) {
  // this = {};

  this.name = name;
  this.age = age;

  // return this;
}

let maria = new Person('Maria', 25);

console.log(maria);
