/* 
estructura de una funcion

function nombreFuncion(){
  codigo a ejecutar por la funcion
} */

/* function saludar(){
  let apellido = prompt("Ingrese su apellido");
  let mensaje = `Hola ${apellido}`;
  alert(mensaje);
}

saludar(); */

/* 
estructura de una funcion con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}
*/

/* function sumar(num1, num2){
  let resultado = num1 + num2;
  console.log(resultado);
}

sumar(7, 9); */

/* function sumar(num1, num2){
  let resultado = num1 + num2;
  alert(resultado);
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
sumar(num1, num2); */

/* function suma(x, y){
  return x + y;
}

let resultado = suma(4, 55);
console.log(resultado); */

/* function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      return "operacion no definida";
      break;
  }
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(num1, num2, operacion);
alert(resultado); */

/* function saludar(){
  console.log("hola");
  return
  console.log("chao");
}

saludar(); */

/* function saludar(nombre){
  if(nombre === "andres"){
    return "hola andres";
  }else if(nombre === "fabian"){
    return "hola fabian";
  }else{
    return "Hola desconocido";
  }
}

let nombre = prompt("Ingresa el nombre");
let saludo = saludar(nombre);
alert(saludo); */
/* let resultado;

function sumar(){
  resultado = 5 + 6;
}

sumar();
console.log(resultado); */

/* {
  let resultado = 5;
}
console.log(resultado); */

/* function sumar(){
  let resultado = 5;
}

function restar(){
  let resultado = 5;
} */

/* const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }

console.log( suma(15,20) )
console.log( resta(15,5) ) */

/* const suma = () => num1 + num2;
console.log(suma(4,5)); */

/* const calculdaora = (num1, num2, operacion) => {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      return "operacion no definida";
      break;
  }
} */

/* const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;

let precioProducto  = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                = resta(suma(500, iva(500)), 50);
                = resta(suma(500, 500*0.21), 50);
                = (500 + 500*0.21) - 50; */

/* const suma = () => {};
suma(); */

/* function suma(){

} */

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;

let precioProducto = parseInt(prompt("Ingrese precio del producto"));
let descuento = parseInt(prompt("Ingrese el descuento"));

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

alert(nuevoPrecio);


