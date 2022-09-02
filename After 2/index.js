/* const obj = {nombre: "andres", edad: 45};

function cambiarNombre(nombre){
  obj.nombre = nombre;
}

cambiarNombre("litzy");
console.log(obj); */

/* function sumar(x, y){
  return x + y;
}

let resultado = sumar(5,6);

console.log(resultado - 50); */

/* const ListaProductos = [
  { producto: "babyshowers", cantidad: 20, precioConDesc: 900, sinDesc: 50 },
  { producto: "cumpleaños", cantidad: 2, precioConDesc: 8000, sinDesc: 4500 },
  { producto: "comuniones", cantidad: 10, precioConDesc: 1900, sinDesc: 200 },
  { producto: "props", cantidad: 20, precioConDesc: 1300, sinDesc: 80 },
  { producto: "bautismos", cantidad: 1, sinDesc: 5500 },
  { producto: "books", cantidad: 1, sinDesc: 3200 },
  { producto: "gigantografias", cantidad: 1, sinDesc: 7000 },
  { producto: "invitacionesDigitales", cantidad: 1, sinDesc: 1300 },
]; */

/* let nombre = prompt("Ingrese le nombre producto");
let producto = ListaProductos.find(item => item.producto === nombre);

let mensaje = `nombre: ${producto.producto}, cantidad: ${producto.cantidad}`;
alert(mensaje) */

/* let producto = ListaProductos.find(item => item.producto === "babyshowers");
let index = ListaProductos.indexOf(producto);

console.log(index); */

/* let numero = 4;
let numero1 = numero;

numero1 = 7;
console.log(numero);

|   4  |     |  7   |
numero        numero1 */

/* let obj = {nombre: "andres", edad: 50};
let obj1 = obj;

obj1.nombre = "camila";

console.log(obj);

|   {nombre: "camila", edad: 50}   |
        obj    obj1 */

/* 
paso por valor
cuando a una variable le asignas un valor que tiene tipo de dato primitivo entonces el valor pasa como una copia

paso referencia
cuando a una variable le asignas un valor que su tipo de dato no es primitivo entonces asignas es misma posicion en la memoria

*/

/* let productos = ListaProductos.filter(item => item.cantidad > 10);
console.log(productos); */
/* const ListaProductos = [
  { producto: "babyshowers", cantidad: 20, precioConDesc: 900, sinDesc: 50 },
  { producto: "cumpleaños", cantidad: 2, precioConDesc: 8000, sinDesc: 4500 },
  { producto: "comuniones", cantidad: 10, precioConDesc: 1900, sinDesc: 200 },
  { producto: "props", cantidad: 20, precioConDesc: 1300, sinDesc: 80 },
  { producto: "bautismos", cantidad: 1, sinDesc: 5500 },
  { producto: "books", cantidad: 1, sinDesc: 3200 },
  { producto: "gigantografias", cantidad: 1, sinDesc: 7000 },
  { producto: "invitacionesDigitales", cantidad: 1, sinDesc: 1300 },
];

let nuevaCantidad = ListaProductos.map((item) => {
  return {
    producto: item.producto,
    cantidad: item.cantidad + 5,
    precioConDesc: item.cantidad + 100,
    sinDesc: item.sinDesc,
  };
});

console.log(nuevaCantidad); */


const ListaProductos = [
  { producto: "babyshowers", cantidad: 20, precioConDesc: 900, sinDesc: 50 },
  { producto: "cumpleaños", cantidad: 2, precioConDesc: 8000, sinDesc: 4500 },
  { producto: "comuniones", cantidad: 10, precioConDesc: 1900, sinDesc: 200 },
  { producto: "props", cantidad: 20, precioConDesc: 1300, sinDesc: 80 },
  { producto: "bautismos", cantidad: 1, sinDesc: 5500 },
  { producto: "books", cantidad: 1, sinDesc: 3200 },
  { producto: "gigantografias", cantidad: 1, sinDesc: 7000 },
  { producto: "invitacionesDigitales", cantidad: 1, sinDesc: 1300 },
];

ListaProductos.forEach(item => console.log(item.producto));