let bar = 'foo';

// console.log(bar);

let obj = {
  name: 'name',
  lastname: 'lastname'
};

// try {
//   let foos = {};
//   foo.name;

//   console.log(foos);
// } catch(error) {
//   console.log(error.message);
// }

try {
  let pass = '12345';

  if(pass !== '678910') {
    throw Error('Invalid password');
  }

  console.log('Valid passwrod');
} catch(error) {
  console.log(error);
}

console.log('here');

// throw "ups algo salió mal";

// throw new Error('ups algo salió mal');

