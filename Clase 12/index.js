let numero = 50;
numero = numero + 1;
numero += 1;
numero++;

//Operador ternario
// condicion ? codigo a ejecutar si la condicion es verdadera : codigo a ejecutar si la condicion no es verdadera

// let edad = 20;

/* if(edad >= 18){
  console.log("es mayor de edad");
}else{
  console.log("es menor de edad");
} */

// edad >= 18 ? console.log("es mayor de edad") : console.log("es menor de edad");

/* let edad = 20;
let permiso;

if(edad >= 18){
  permiso = true;
}else{
  permiso = false;
}

if(permiso){
  console.log("puedes entrar");
}else{
  console.log("no puedes entrar");
} */

/* let edad = 20;
let permiso = edad >= 18 ? true : false;
permiso ? console.log("puedes entrar") : console.log("no puedes entrar"); */

/* 
operador1 && operador2 si operador1 representa un valor verdadero entonces retorna operador2 en caso contrario
                        retorna operador1

operador1 || operador2 si operador1 no es falsy entonces retorna operador1 en caso contrario retorna el
                        operador2
*/

// const carrito = [];

/* if(carrito.length === 0){
  console.log("el carrito esta vacio");
} */

// carrito.length === 0 && console.log("el carrito esta vacio");

/* const usuario = {
  nombre: "juan",
  edad: 11
};

const registro = usuario.edad >= 18 && new Date();
console.log(registro); */

/* 
operador1 && operador2 si operador1 representa un valor verdadero entonces retorna operador2 en caso contrario
                        retorna operador1

operador1 || operador2 si operador1 no es falsy entonces retorna operador1 en caso contrario retorna el
                        operador2
*/

// console.log( 0 || "Falsy")  //falsy
// console.log( 40 || "Falsy")  //40
// console.log( null || "Falsy")  //falsy
// console.log( undefined || "Falsy")  //falsy
// console.log( "Hola Mundo" || "Falsy") //hola mundo
// console.log( "" || "Falsy")  //falsy
// console.log( NaN || "Falsy")  //falsy
// console.log( true || "Falsy")  //true
// console.log( false || "Falsy") //falsy

/* const usuario = {
  nombre: "juan",
  edad: 11
};

const usuario1 = null;
console.log(usuario || "El usuario no existe");
console.log(usuario1 || "El usuario no existe"); */

/* let carrito;
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}else{
  carrito = [];
} */

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* const usuario = {
  nombre: null,
  edad: 11,
  telefono: {
    casa: null,
    oficina: 1234
  }
};

console.log(usuario?.nombre || "El usuario no existe"); */
// console.log(usuario?.telefono?.casa || "propiedad no existe");

//DESTRUCTURACIÓN
/* const usuario = {
  nombre: "andres",
  edad: 50,
  direccion: "AV"
};

let {nombre, direccion, edad} = usuario;
console.log(nombre, edad, direccion); */

/* const usuario = {
  nombre: null,
  edad: 11,
  telefono: {
    casa: null,
    oficina: 1234,
  },
};

const {
  nombre,
  telefono: { oficina, casa },
} = usuario; */

/* const usuario = {
  nombre: "andres",
  edad: 50,
  direccion: "AV",
  colorCabello: "rojo",
};

let { nombre, edad, direccion, colorCabello } = usuario;

let div = document.createElement("div");
div.innerHTML = `
  nombre: ${JSON.stringify(usuario)}
  edad: ${edad}
  direccion: ${direccion}
`;

document.body.append(div); */

/* const mostrarInfo = ({nombre, edad, direccion, colorCabello}) => {
  console.log(nombre, edad, direccion, colorCabello);
};

const usuario = {
  nombre: "andres",
  edad: 50,
  direccion: "AV",
  colorCabello: "rojo",
};

mostrarInfo(usuario); */

/* const nombres = ["juan", "pedro", "Sofia"];
const [a, , b] = nombres;

console.log(a, b); */

/* const persona = {nombre: "juan", edad: 20};
const persona1 = {...persona};

persona1.nombre = "sofia";
console.log(persona); */

// const nombres = ["juan", "pedro", "Sofia"];
// console.log(...nombres);
// console.log(nombres.join(" "));

/* const numeros = [1, 2, 3, 54, 6, 7, 7, 89];
console.log(Math.max(...numeros)); */

/* const usuario = {
  nombre: "andres",
  edad: 50,
  direccion: "AV",
  colorCabello: "rojo",
};

const usuario1 = {
  ...usuario,
  edad: 70,
  familiar: "Mariana"
};

console.log(usuario1); */

/* const mostrar = (...nombres) => {
  console.log(nombres);
};

mostrar(1, 2, 3, 4, 5, "julian", true); */

/* const sumar = (...numeros) => {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
};

console.log(sumar(1, 2, 3, 34, 4, 5, 6, 7, 89, 9)); */

const usuarios = [{nombre: "hernan", edad: 50}, {nombre: "juan", edad: 70}];

usuarios.forEach(persona => {
  let {nombre, edad} = persona;
  console.log(nombre, edad);
})
