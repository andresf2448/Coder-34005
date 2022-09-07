//getElementById
/* let div = document.getElementById("aplicacion");
console.log(div.innerHTML);
console.log(div.innerText); */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText); */

//getElementsByClassName
/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

//getElementsByTagName
/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
  console.log(perrito.innerHTML);
} */

/* let contenedor = document.getElementById("contenedor");

let seccion = prompt("Ingresa la seccion deseada");

if (seccion === "carrito") {
  contenedor.innerHTML = "<h1>Bienvenido al carrito</h1>";
  contenedor.className = "amarillo";
}else if(seccion === "favoritos"){
  contenedor.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
  contenedor.className = "azul";
}else{
  contenedor.innerHTML = "<h1>Bienvenido a nuestra pagina</h1>";
  contenedor.className = "rojo";
} */

//Crear nodos
/* let contenedor = document.getElementById("contenedor");
let div = document.createElement("div");
div.innerHTML = "<h1>Hola a todos</h1>";

// document.body.append(div);
contenedor.append(div); */

//Eliminar nodos
/* let saludo = document.getElementById("saludo");
saludo.remove(); */

/* let contenedor = document.getElementById("contenedor");
let productos = ["camisa", "gorra", "pantalon", "zapato", "media"];

for(const producto of productos){
  let li = document.createElement("li");
  li.innerHTML = producto;
  contenedor.append(li);
} */

/* let contenedor = document.getElementById("contenedor");
let producto = {id: 1, nombre: "camisa", precio: 10000};

contenedor.innerHTML = `<h2>ID: ${producto.id}</h2>
                        <p>Producto: ${producto.nombre}</p>
                        <b>$${producto.precio}</b>`; */

let contenedor = document.getElementById("contenedor");
let productos = [
  { id: 1, nombre: "camisa", precio: 1000, status: "disponible" },
  { id: 2, nombre: "zapato", precio: 700, status: "no disponible" },
  { id: 3, nombre: "pantalon", precio: 1300, status: "disponible" },
  { id: 4, nombre: "gorra", precio: 100, status: "no disponible" },
];

let precio = parseInt(prompt("Ingrese el precio minimo"));
let productosFiltrados = productos.filter(item => item.precio > precio && item.status === "disponible");

for (const producto of productosFiltrados) {
  let item = document.createElement("div");
  item.innerHTML = `<h2>ID: ${producto.id}</h2>
                    <p>Producto: ${producto.nombre}</p>
                    <b>$${producto.precio}</b>`;

  contenedor.append(item);
}
