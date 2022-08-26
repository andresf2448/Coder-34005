/* let nombre = "pepito";
let edad = 5;
let colorCabello = "negro"; */

/* 
estructura de un objeto
{key1: value1, ..., keyn: valuen}
*/

/* const persona = {
  nombre: "pepito", 
  edad: 5, 
  colorCabello: "negro"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.colorCabello);
console.log(persona);

let key = "nombre";
console.log(persona[key]);
console.log(persona["colorCabello"]);
console.log(persona["edad"]);


persona.nombre = "Juan";
persona["edad"] = 100;
console.log(persona); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona("juan", 23, "AV");
const persona2 = new Persona("juanita", 25, "AV1");

console.log(persona1.nombre);
console.log(persona2.nombre); */

/* function Producto(img, precio, nombre){
  this.imagen = img;
  this.precio = precio;
  this.nombre = nombre;
}

const producto1 = new Producto("http", 406000, "Monitor Sam...");
const producto2 = new Producto("httpbase", 74900, "Base...");

console.log(producto1);
console.log(producto2); */

/* function Producto(info){
  this.imagen = info.img;
  this.precio = info.precio;
  this.nombre = info.nombre;
  this.descripcion = info.descripcion;
  this.color = info.color;
  this.alto = info.alto;
}

const producto1 = new Producto({
  img: "asefasdf",
  nombre: "asdf",
  precio: 234,
  color: "azul",
  descripcion: "asdfdf",
  alto: 123
})

console.log(producto1); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.hablar = function(){console.log("Hola soy " + this.nombre);}
}

const persona1 = new Persona("camila", 24, "AV");
persona1.hablar();
 */

/* const persona = {
  nombre: "pepito", 
  edad: 5, 
  colorCabello: "negro"
};

for(const key in persona){
  console.log(persona[key]);
} */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.hablar = function(){console.log("Hola soy " + this.nombre);}
} */

/* class Persona {
  constructor(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log("Hola soy " + this.nombre);
  }
}

const persona1 = new Persona("Marina", 23, "AV");
persona1.hablar(); */

/* class Producto{
  constructor(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;    
  }

  vender(){
    this.cantidad = this.cantidad - 1;
  }
}

const producto1 = new Producto("Monitor", 5000, 5);

console.log(producto1);
producto1.vender();
console.log(producto1); */


/* function Producto(info){
  this.imagen = info.img;
  this.precio = info.precio;
  this.nombre = info.nombre;
  this.descripcion = info.descripcion;
  this.color = info.color;
  this.alto = info.alto;
}

const producto1 = new Producto({
  img: "asefasdf",
  nombre: "asdf",
  color: "azul",
  descripcion: "asdfdf",
  alto: 123
})

const producto2 = new Producto({
  img: "zsdf",
  nombre: "asasdfdf",
  precio: 23344,
  color: "azasdful",
  descripcion: "a34rsdfdf",
  alto: 1234
}) */
