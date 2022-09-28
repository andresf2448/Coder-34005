/* 
setTimeout(funcion, tiempo)
*/
/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 3000);

console.log("final"); */

/* const boton = document.getElementById("boton");
const mensaje = document.getElementById("saludo");

boton.addEventListener("click", () => {
  mensaje.classList.add("color");

  setTimeout(() => {
    mensaje.classList.remove("color");
  }, 3000);
}); */

/* for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra);
  }, 1000)
}

for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra);
  }, 3000)
} */

/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 0);

console.log("final"); */

/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5); */

/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 0);

console.log("final"); */
/* 
setInterval(() => {
  console.log("hola");
});
 */
/* let counter = 0;

const interval = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);

  if (counter >= 5) {
    clearInterval(interval);
    console.log("Se removió el intervalo");
  }
}, 1000); */

//PROMESAS
/* new Promise((resolve, reject) => {
  //cuerpo de la promesa
}); */

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     // if(valor){
//     //   resolve("Promesa exitosa");
//     // }else{
//     //   reject("Promesa rechaza");
//     // }

//     valor ? resolve(["andres", "andrea", "sofia"]) : reject("Promesa rechaza");
//   });
// }

// futuro(true)
// .then(response => console.log(response))
// .catch(error => console.log(error))
// .finally(() => console.log("proceso terminado"));

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "zapato", precio: 500 },
  { id: 4, nombre: "pantalon", precio: 1300 },
];

const conseguirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      // reject("peticion fallida");
    }, 3000);
  });
};

conseguirProductos()
.then(response => {
  response.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

    document.body.append(div);
  });
})
.catch(error => console.log(error));