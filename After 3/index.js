/* let historialStorage = ["1 btc a 2000 usd", "1 btc a 2000 usd"];
let contenedor = document.getElementById("contenedor");
let historial = document.getElementById("historial");
historial.addEventListener("click", () => {
  //let compras = JSON.parse(localStorage.getItem("historial))

  let compras = ["1 btc a 2000 usd", "1 btc a 2000 usd"];

  compras.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    contenedor.append(li);
  })
}) */
/* let resultados = document.getElementById("resultados");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;
  let valor = parseInt(inputs[0].value);

  let div = document.createElement("div");
  div.innerHTML = `<h2>El valor a recibir en dolares es: ${valor * 0.234}</h2>`;
  resultados.append(div);
}); */

// const eliminarCarrito = () => {
//   localStorage.removeItem("carrito");
// };

// const agregarCarrito = (nombre, precio) => {
//   let carrito = JSON.parse(localStorage.getItem("carrito"));
//   let producto = {
//     id: carrito.length + 1,
//     nombre: nombre,
//     precio: precio
//   };

//   carrito.push(producto);
//   localStorage.setItem("carrito", JSON.stringify(carrito))
// }

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = prompt("Ingrese el precio del producto");

// agregarCarrito(nombre, precio);

// const modificarPrecio = (nombre, precio) => {
//   let carrito = JSON.parse(localStorage.getItem("carrito"));
//   let producto = carrito.find(item => item.nombre === nombre);

//   producto.precio = precio;
//   localStorage.setItem("carrito", JSON.stringify(carrito));
// }

// let nombre = prompt("Ingrese el nombre a modificar su precio");
// let precio = prompt("Ingrese el nuevo precio");
// modificarPrecio(nombre, precio);

const eliminarElemento = (nombre) => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = carrito.filter((item) => item.nombre != nombre);

  localStorage.setItem("carrito", JSON.stringify(nombre));
};
