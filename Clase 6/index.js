/* const array1 = [];
const array2 = [1, 2, 3, 7, 10, 921];
const nombres = ["andres", "mariana", "andrea", "viviana"];
const array4 = [1, true, false, "andres"];

console.log(nombres[2]);
console.log(array2[2] + array2[4]); */

/* const nombres = ["andres", "mariana", "andrea", "viviana", "pepito"];

for(let index = 0; index < nombres.length; index++){
  alert(nombres[index]);
} */

/* const nombres = ["andres", "mariana", "andrea", "viviana", "pepito"];
console.log(nombres.length); // longitud del arreglo

nombres.push("camila"); //agrega al final del arreglo
console.log(nombres);
console.log(nombres.length);

nombres.unshift("Lucas"); //agrega al principio del arreglo
console.log(nombres);

nombres.pop(); //elemina del final del arreglo
console.log(nombres);

nombres.shift(); //elimina del principio del arreglo
console.log(nombres); */

/* const nombres = ["andres", "mariana", "andrea", "viviana", "pepito"];
const perritos = ["firu", "max"]; */

// nombres.splice(2, 2); elimina los elementos en el rango pasado parametros
// console.log(nombres.join("-")); une todos los elementos separdos por lo que se pase como parametro

// console.log(perritos.concat(nombres)); concatena o une dos arreglos

// const copia = nombres.slice(2, 5); hace una copia de un fragmento del arreglo
// console.log(copia);

// console.log(nombres.indexOf("andrea")); Encuentra la posicion del elemento en el arreglo

// console.log(nombres.includes("marianaaaaaaa")); valida si un elemento esta o no en el arreglo

/* nombres.reverse();
console.log(nombres); */

/* const encontrarIndex = (array, elemento) => {
  for (let index = 0; index < array.length; index++) {
    if(array[index] === elemento){
      return index;
    }
  }
}

const nombres = ["andres", "mariana", "andrea", "viviana", "pepito"];
console.log(encontrarIndex(nombres, "jose")); */

/* const nombres = ["andres", "mariana", "andrea", "viviana", "pepito"];

const eleminar = (nombre) => {
  let index = nombres.indexOf(nombre);

  if(index != -1){
    nombres.splice(index, 1);
  }

  console.log(nombres);
}

eleminar("viviana"); */

/* const personas = [
  { nombre: "manuela", edad: 23 },
  { nombre: "mariano", edad: 25 },
  { nombre: "pepito", edad: 50 },
];

for (let i = 0; i < 2; i++) {
  let nombre = prompt("Ingrese el nombre del usuario");
  let edad = prompt("ingrese la edad del usuario");

  let obj = { nombre: nombre, edad: edad };

  personas.push(obj);
}

console.log(personas); */

/* const personas = [
  { nombre: "manuela", edad: 23 },
  { nombre: "mariano", edad: 25 },
  { nombre: "pepito", edad: 50 },
];

for(const item of personas){
  console.log(item);
}
 */

class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
}
const personas = [];

for (let i = 0; i < 2; i++) {
  let nombre = prompt("Ingrese el nombre del usuario");
  let edad = prompt("ingrese la edad del usuario");

  let obj = new Persona(nombre, edad);

  personas.push(obj);
}

console.log(personas);