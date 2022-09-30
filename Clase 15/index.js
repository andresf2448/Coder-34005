/* 
fetch(url, config);
*/

/* fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
  console.log(data[0].title);
  console.log(data[0].body);
}); */
// .catch(error => console.log(error));

/* const lista = document.getElementById("lista");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
  data.forEach(publicacion => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>ID: ${publicacion.id}</h2>
      <p>User: ${publicacion.userId}</p>
      <p>Titulo: ${publicacion.title}</p>
      <p>Publicación: ${publicacion.body}</p>
    `;

    lista.append(li);
  });
}); */

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "probando",
    body: "probando publicacion",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error)); */
/* 
const lista = document.getElementById("lista");

fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>ID: ${producto.id}</h2>
      <p>Nombre: ${producto.nombre}</p>
      <b>$${producto.precio}</b>
    `;

    lista.append(li);
  });
}); */

const traerDatos = async () => {
  const lista = document.getElementById("lista");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h2>ID: ${publicacion.id}</h2>
      <p>User: ${publicacion.userId}</p>
      <p>Titulo: ${publicacion.title}</p>
      <p>Publicación: ${publicacion.body}</p>
    `;

      lista.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

traerDatos();
