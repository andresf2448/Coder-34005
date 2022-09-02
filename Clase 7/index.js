//Funciones de alto orden

/* function mayorQue(n){
  return m => m > n;
}

let mayorQueCinco = mayorQue(5); // m => m > 5
console.log(mayorQueCinco(6));

let mayorQueNueve = mayorQue(9); // m => m > 9
console.log(mayorQueNueve(10)); */

/* function operaciones(op){
  if(op === "sumar"){
    return (x, y) => x + y;
  }

  if(op === "restar"){
    return (x, y) => x - y;
  }

  if(op === "multiplicar"){
    return (x, y) => x * y;
  }

  if(op === "dividir"){
    return (x, y) => x / y;
  }
}

let suma = operaciones("sumar"); //(x, y) => x + y;
let resta = operaciones("restar");

console.log(suma(5, 20));
console.log(resta(5, 20)); */

/* function recorrer(arreglo, funcion){
  for(const numero of arreglo){
    funcion(numero);
  }
}

recorrer([1,4,3,5,6,7], console.log); */

//Metodos avanzados de los arreglos

//for each recorre el arreglo como un for tradicional
/* const productos = [
  { id: 1, nombre: "pantalon", precio: 100 },
  { id: 2, nombre: "zapato", precio: 1700 },
  { id: 3, nombre: "gorra", precio: 600 },
  { id: 4, nombre: "camisa", precio: 1400 },
];

productos.forEach(item => console.log(item)); */

//find encuentra dentro del arreglo el primer elemento que cumpla la condicion
/* const productos = [
  { id: 1, nombre: "pantalon", precio: 100 },
  { id: 2, nombre: "zapato", precio: 1700 },
  { id: 3, nombre: "gorra", precio: 600 },
  { id: 4, nombre: "camisa", precio: 1400 },
];

let nombre = prompt("Ingrese el nombre del producto");
let producto = productos.find(item => item.nombre === nombre);

if(producto === undefined){
  alert("producto no encontrado");
}else{
  let mensaje = `
Id: ${producto.id}
Nombre: ${producto.nombre}
Precio: $${producto.precio}
`;
alert(mensaje);
} */

//filter filtra los elementos que cumplan la condicion
/* const productos = [
  { id: 1, nombre: "pantalon", precio: 100 },
  { id: 2, nombre: "zapato", precio: 1700 },
  { id: 3, nombre: "gorra", precio: 600 },
  { id: 4, nombre: "camisa", precio: 1400 },
];

let precio = parseInt(prompt("Ingrese el precio mínimo"));
let filtrados = productos.filter(item => item.precio > precio);

filtrados.forEach(item => {
  let mensaje = `
Id: ${item.id}
Nombre: ${item.nombre}
Precio: $${item.precio}
`;
alert(mensaje);
}); */

//some verifica si al menos uno de los elementos del arreglo cumple la condicion dada
/* const productos = [
  { id: 1, nombre: "pantalon", precio: 100 },
  { id: 2, nombre: "zapato", precio: 1700 },
  { id: 3, nombre: "gorra", precio: 600 },
  { id: 4, nombre: "camisa", precio: 1400 },
];

console.log(productos.some(item => item.nombre === "camisa")); */

//map transforma la estructura de los elementos del arreglo
/* const productos = [
  { id: 1, nombre: "pantalon", precio: 100 },
  { id: 2, nombre: "zapato", precio: 1700 },
  { id: 3, nombre: "gorra", precio: 600 },
  { id: 4, nombre: "camisa", precio: 1400 },
]; */

/* const nombres = productos.map(item => item.nombre);
console.log(nombres); */

/* const productosActualizados = productos.map(item => {
  return {
    id: item.id,
    nombre: item.nombre,
    precio: item.precio + item.precio * 0.21
  }
});

console.log(productosActualizados); */

//reduce reducir todo un arreglo a un solo valor

/* const numeros = [1, 2, 3, 4, 5, 6];

const total = numeros.reduce((acumulador, item) => acumulador + item, 0);
console.log(total); */

/* const productos = [
  { id: 1, nombre: "pantalon", precio: 100 },
  { id: 2, nombre: "zapato", precio: 1700 },
  { id: 3, nombre: "gorra", precio: 600 },
  { id: 4, nombre: "camisa", precio: 1400 },
];

const total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(total); */

/* const numeros = [1, 2, 10, 3, 7,4, 5, 6];
console.log(numeros.sort((a, b) => a - b)); //menor a mayor
console.log(numeros.sort((a, b) => b - a)); //mayor a menor */

/* const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
  
    return 0;
  })
); */

/* const productos = [
  { id: 1, nombre: "pantalon", precio: 100 },
  { id: 2, nombre: "zapato", precio: 1700 },
  { id: 3, nombre: "gorra", precio: 600 },
  { id: 4, nombre: "camisa", precio: 1400 },
];

let producto = productos.find(item => item.nombre === "zapato");
console.log(producto); */


//Math
/* console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(1,4,67,4,8,54));
console.log(Math.min(1,4,67,4,8,54)); */
/* console.log(Math.ceil(3.14));
console.log(Math.floor(3.14)); */
/* console.log(Math.round(3.4));
console.log(Math.round(3.6)); */
/* console.log(Math.sqrt(9)); */
/* 
console.log(Math.ceil(Math.random() * 10)); */

// console.log(Date());
// console.log(new Date(2022, 1, 12, 23, 54, 23));

/* let fecha = new Date("September 1, 2022"); */
/* console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDay()); */

/* console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toTimeString()); */

let hoy = new Date("September 1, 2022");
let diciembre = new Date("December 25, 2022");

console.log(diciembre - hoy);
const milisegundosPorDia = 86400000;

console.log((diciembre - hoy) / milisegundosPorDia);




