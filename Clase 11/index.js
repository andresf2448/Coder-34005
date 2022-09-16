//variables
// let nombre = prompt("Ingrese el nombre");

//condicionales
// if (nombre === "pepito") {
//   alert("Hola Pepito");
// } else if (nombre === "andres") {
//   alert("Hola andres");
// } else {
//   alert("quién eres?");
// }
// let nombre = "andres";

// if(nombre){
//   console.log("hay nombre");
// }else{
//   console.log("no hay nombre");
// }

//bucles
/* let usuario = prompt("Ingrese el usuario");

while(usuario != "ghabriel"){
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese el usuario");
}

alert("Bienvenido"); */

/* for (let i = 0; i < 10; i = i + 3) {
  console.log(i);
}
 */

//funciones
/* function suma(x, y) {
  return x + y;
} */

/* const suma = (x, y) => {
  return x + y;
}

console.log(suma(9, 8)); */

//objetos
/* let persona = {
  nombre: "juan",
  edad: 56,
  direccion: "AV"
};

console.log(persona.nombre); */
/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona("pepito", 345, "AV");
console.log(persona1); */

/* class Persona {
  constructor(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log(this.nombre + "Hablando");
  }
}

const persona1 = new Persona("pepito", 345, "AV");
console.log(persona1); */

//Arreglos
/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

let nombre = prompt("Ingrese el nombre del producto a verficar");
let encontrado = productos.find(item => item.producto === nombre);
let mensaje = `
Id: ${encontrado.id}
Nombre: ${encontrado.producto}
precio: $${encontrado.precio}
`;

alert(mensaje); */

/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

localStorage.setItem("carrito", JSON.stringify(productos)); */

//////////////////////////////////////////////////////////////////////////////////
/* let carrito = [];
let carritoStorage = localStorage.getItem("carrito");
const eliminar = (id) => {
  console.log(id);
} 

if(carritoStorage){
  carrito = JSON.parse(carritoStorage);
}

if (carrito.length > 0) {
  carrito.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
                    <h2>Id: ${item.id}</h2>
                    <p>nombre: ${item.producto}</p>
                    <b>$${item.precio}</b>
                    <button id="eliminar${item.id}">Eliminar</button>
    `;
    document.body.append(div);

    let botonEliminar = document.getElementById(`eliminar${item.id}`);
    botonEliminar.addEventListener("click", () => eliminar(item.id));
  });
} else {
  let div = document.createElement("div");
  div.innerHTML = "No hay elementos en el carrito";
  document.body.append(div);
}

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  localStorage.clear();
  alert("se eliminó el carrito de compras");
}) */

//Storage
/* 
localStorage
sessionStorage
setItem("clave", "valor") //guardar en el storage
getItem("clave") //traer elementos del storage mediante la clave
removeItem("clave"); //eliminar un valor por su clave
clear() //elimina todo el storage
JSON.stringify(elemento) //convertir el elemento en un formato json
JSON.parse(elemento) //convertir el elemento de formato json a formato de elemento javascript
*/

//Formularios
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  console.log(inputs[0].value);
  console.log(inputs[1].value);
})