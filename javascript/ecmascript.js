// paramatros por defecto
// function sum(a, b) {
//   if(!a) {
//     a = 0;
//   }

//   if(!b) {
//     b = 0;
//   }

//   return a + b;
// }

function sum(a = 0, b = 0) {
  if(typeof(a) !== 'number') {
    return 'A debe ser un número';
  }

  return a + b;
}

function getName(user = {}) {
  return user.name;
}

console.log(sum(2, 1));
console.log(getName());

// Plantillas literals
let name = 'Ana';
console.log('Hola ' + name + '!\nHola ' + name);
console.log(`Hola ${name}!`); // Interpolación
console.log(`${1234 + 2345}`);
console.log(`${['a', 1, 'b']}`);
console.log(`${getName({ name: 'Maria' })}`);
console.log(`Hola ${name}!
Hola ${name}`);

// Destructuración
let obj = { a: 1, b: 2, c: 3 };

// let a = obj.a;
// let b = obj.b;
// let c = obj.c;

let { a: one, b, c } = obj;

console.log(one, b, c);

let arr = [1, 2, 3, 4, 5];

let [number, two, loquesea, nose] = arr;

console.log(number, two, loquesea, nose);

// Los tres puntos + rest
// [...var+'']

console.log(...[1, 2, 3]);
console.log([...12345+'']);

let obj2 = { ...obj };
// let obj2 = { ...obj, a: 4 };
// let obj2 = { ...obj, ...obj3, ...obj4 };
console.log(obj === obj2);

let arr2 = [ ...arr ];
// let arr2 = [ ...arr, 1, 2, 3 ];
// let arr2 = [ ...arr, ...arr3, ...arr4 ];
console.log(arr2 === arr);

let { b: b2, ...rest } = obj2;
console.log(rest);

let [first, ...restArr] = arr2;
console.log(restArr);

// Propiedades y métodos concisos
let lesson = 'TOP'
// function person(name, age) {
//   return {
//     name: name,
//     age: age,
//     lesson: lesson,
        // greet: function greet() {
        //   console.log('hola mundo')
        // }
//   }
// }

function person(name, age) {
  return {
    name,
    age,
    lesson,
    greet() {
      console.log('hola mundo')
    }
  }
}

let obj7 = { lesson }

let juan = person('Juan');
console.log(juan.name)


// Arrow functions
// const person = (name, age) => {
//   return {}
// }

const promise = new Promise((resolve, reject) => {
  resolve('hola mundo');
});



// async / await
async function resolvePromise() {
  // promise
  //   .then(msj => console.log(msj))
  //   .catch(err => console.log(err));

  try {
    const msj = await promise;
  } catch(err) {
    console.log(err);
  } finally() {
    // ....
  }

  // return msj;
}

// const result = await axios({
//   url:
//   method: ...
// })

// const createTask = async () => {

// }

