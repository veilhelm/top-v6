// Array
let arr = [1,2,3,4,5,6,7,8,9,10];

// Obtener un elemento
// console.log(arr[0]);
// console.log(arr[1]);

// Asignación por valor
// let str = "hola mundo";
// let num = 3;
// let bool = true;

// console.log(str);


// Asignación por referencia
// let obj = {}
// let str = new String()
// let arr = [];
// console.log(arr === arr2)
// console.log([1,2,3] === [1,2,3]);


// Agregar elementos
// arr.push(11);
// console.log(arr);

// modifican el arreglo original
let arr2 = arr;
arr2.push(11); // final
// console.log(arr);

arr.unshift(0); // principio
// console.log(arr);

arr.splice(5, 0, 50, 51, 52); // en un indice especifico
// console.log(arr);

// no modifican el arreglo original
let arr3 = arr2.concat([99, 100]);
// console.log(arr2);
// console.log(arr3);

let arr4 = [-2, -1].concat(arr2);
// console.log(arr4);

let arr5 = arr2.slice(0, 5).concat(49).concat(arr.slice(5));
// console.log(arr5);

// Remover elementos

// modifican el arreglo original
arr2.pop(); // final
arr2.shift(); // principio
arr2.splice(5, 2); // en un indice especifico

// no modifican el arreglo original
let arr6 = arr2.slice(1); // principio
let arr7 = arr2.slice(0, -1); // final
let arr8 = arr2.slice(0, 5).concat(arr.slice(6)); // un indice especifico
// console.log(arr7);

// Iteraciones
for(let value of arr8) {
  console.log(value);
}

// Objects
let obj = { name: 'Maria', 'last-name': 'Lopez' };

// camelCase
// PascalCase
// snake_case
// kebbab-case

let obj2 = obj;

// obtener un valor
// console.log(obj.name);
// let prop = 'last-name';
// console.log(obj[prop]);
// console.log(obj['name']);

// Agregar un valor

// modifican el objeto original
// obj2.age = 20;
// obj2['age'] = 20;
// console.log(obj);

// no modifican el objeto original
let obj3 = Object.assign({}, obj2, { age: 20 });
// console.log(obj2);
// console.log(obj3);

// Eliminar un elemento

// modifican el objeto original
delete obj2.name;
// delete obj2['name'];
console.log(obj);

// Iteraciones
for(let key in obj3) {
  let value = obj3[key];
  console.log(key, value);
}
