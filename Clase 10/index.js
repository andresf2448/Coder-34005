/* localStorage.setItem("numero", "5");
localStorage.setItem("booleano", true); */

/* let numero = localStorage.getItem("numero");
console.log(typeof(numero)); */

/* localStorage.setItem("arreglo", [1, 2, 3, 4, 5]);
localStorage.setItem("objeto", {nombre: "pepito", edad: 50}); */
// sessionStorage.setItem("nombre", "camila");

/* for(let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);
  console.log("clave", clave);
  console.log("valor", localStorage.getItem(clave));
} */

//para borrar un elemento en particular usamos el removeItem
// localStorage.removeItem("nombre");

//para borrar el storage completo utilizamos clear
// localStorage.clear();

/* let arreglo = JSON.stringify([1, 2, 3, 4, 5]);
localStorage.setItem("arreglo", arreglo);

let objeto = JSON.stringify({nombre: "pepito", edad: 50});
localStorage.setItem("objeto", objeto); */

/* let objeto = JSON.parse(localStorage.getItem("objeto"));
console.log(objeto); */

/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};

for(const producto of productos){
  guardarStorage(producto.id, JSON.stringify(producto));
}

localStorage.setItem("carrito", JSON.stringify(productos)); */

//Sesion
/* let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  usuario = usuarioStorage;
  let mensaje = `Bienvenido ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
  alert("Bienvenido por primera vez");
} */

/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

localStorage.setItem("carrito", JSON.stringify(productos)); */

//////////////////////////////////////////////////////////////////////////////////
let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

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
    `;

    document.body.append(div);
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
})