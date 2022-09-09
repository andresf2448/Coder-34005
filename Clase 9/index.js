// primera forma
/* const respuesta = () => {
  console.log("Hola Click");
}

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", respuesta); */

//segunda forma
// const respuesta = () => {
//   console.log("Hola Click");
// }

// let boton = document.getElementById("btnPrincipal");
// boton.onclick = respuesta;

/* const respuesta = (nombre) => {
  console.log("Hola Click " + nombre);
}

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", () => respuesta("andres")); */

// let boton = document.getElementById("btnPrincipal");
// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));

/* let boton = document.getElementById("btnPrincipal");
let saludo = document.getElementById("saludo");

boton.addEventListener("mousedown", () => {
  saludo.className = "verde";
});
boton.addEventListener("mouseover", () => {
  saludo.className = "rojo";
});
boton.addEventListener("mouseout", () => {
  saludo.className = "amarillo";
});
boton.addEventListener("click", () => {
  saludo.className = "azul";
}); */

// let nombre = document.getElementById("nombre");
// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// nombre.addEventListener("keyup", (e) => {
//   if(e.key === "a"){
//     saludo.className = "rojo";
//   }else if(e.key === "s"){
//     saludo.className = "verde";
//   }else if(e.key === "d"){
//     saludo.className = "amarillo";
//   }else{
//     saludo.className = "azul";
//   }
// });

// let nombre = document.getElementById("nombre");
// nombre.addEventListener("change", () => console.log("change"));

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// nombre.addEventListener("input", () => {
//   if(!nombre.value.includes("@")){
//     saludo.className = "rojo";
//   }else{
//     saludo.className = "azul";
//   }
// });

/* let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let inputs = e.target.children;

  if(!inputs[0].value.includes("@")){
    inputs[0].value = "";
  }
}) */
let productos = [];

let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";

  let inputs = e.target.children;
  productos.push(inputs[0].value);

  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = item;
    contenedor.append(div);
  });

  inputs[0].value = "";
});
