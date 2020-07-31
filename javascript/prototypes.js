// Objetos literales
// let juan = {
//   name: 'Juan',
//   age: 24,
//   greet: function() {
//     console.log(this.name);
//   },
// };

// let maria = {
//   name: 'Maria',
//   age: 28,
//   greet: function() {
//     console.log(this.name);
//   }
// };

// Fabrica de objetos
function person(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(this.name);
    }
  };
}

// let juan = person('Juan', 24);
// let maria = person('Maria', 28);

// console.log(juan);
// console.log(maria);

// Funciones constructuras
// OOP - Object Oriented Programming
// Objeto/Clase - Plano

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function() {
//   console.log(this.name);
// }

// Instancias
// let juan = new Person('Juan', 24);
// let maria = new Person('Maria', 28);

// function Teacher(name, age, lesson) {
//   Person.call(this, name, age);
//   this.lesson = lesson;
// }

// Teacher.prototype = new Person();
// Teacher.prototype = Object.create(Person.prototype);

// Teacher.prototype.constructor = Teacher;
// Object.defineProperty(Teacher.prototype, 'constructor', {
//   value: Teacher,
//   enumerable: false,
//   writable: true,
// });

// Teacher.prototype.teach = function() {
//   console.log('currently teachin top v6');
// }

// const simon = new Teacher('Simon', 29, 'TOP');

// console.log(juan.hasOwnProperty('name'));
// console.log(maria.greet());

// console.log(simon);
// simon.greet();
// simon.teach();

// Clases

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('hello ' + this.name);
  }
}

// Person.prototype.farewell = function() {
//   console.log('goobye ' + this.name)
// }

let juan = new Person('Juan', 24);
let maria = new Person('Maria', 28);

console.log(juan);
juan.greet();
// juan.farewell();
console.log(maria);

class Teacher extends Person {
  constructor(name, age, lesson) {
    super(name, age);
    this.lesson = lesson;
  }

  teach() {
    console.log('currently teachin top v6');
  }
}

const simon = new Teacher('Simon', 29, 'TOP');
console.log(simon);
simon.greet();
simon.teach();
console.log(simon.hasOwnProperty('name'));

// simon.farewell();



