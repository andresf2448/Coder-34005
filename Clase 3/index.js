/* 
estructura del for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
//i++     i = i + 1

/* for(let i = 0; i < 100; i = i + 2){
  console.log(i);
} */

/* for(let i = 20; i < 25; i++){
  alert(i);
}

alert("terminamos"); */

/* let numero = parseInt(prompt("Ingrese un numero"));

for(let i = 0; i <= 10; i++){
  let resultado = numero * i;
  let mensaje = `${numero} * ${i} = ${resultado}`;
  alert(mensaje);
} */

/* for(let turno = 1; turno <= 6; turno++){
  let nombre = prompt("Ingrese su nombre para asignar turno");
  let mensaje = `Turno #${turno} Nombre: ${nombre}`;
  alert(mensaje);
}

alert("acabamos los turnos"); */

/* for(let i = 0; i <= 10; i++){
  if(i === 5){
    break;
  }

  console.log(i);
}

console.log("terminamos"); */

/* for(let i = 0; i <= 10; i++){
  if(i === 5){
    continue;
  }

  console.log(i);
}

console.log("terminamos"); */

/* let nombre = "andres";

console.log("hola " + nombre);
console.log(`hola ${nombre}`); */

//WHILE
/* 
while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
} 
*/

/* let valor = false;

while(valor){
  console.log("Peligro");
} */
/* let usuario = prompt("Ingrese el nombre del usuario");

while(usuario != "pepito"){
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese el nombre del usuario");
}

alert("Bienvenido"); */

/* let repetir = false; */

/* while(repetir){
  console.log("entramos");
} */

/* do{
  console.log("entramos");
}while(repetir); */

/* 
estructura del switch

switch(valor){
  case value1:
    codigo a ejecutar
    break;

  case value2;
    codigo a ejecutar
    break;

  default:
    codigo a ejecutar
    break;
}
*/

/* let moneda = "usd";

switch(moneda){
  case "cop":
    console.log("Moneda de colombia");
    break;

  case "clp":
    console.log("Moneda de chile");
    break;
  
  case "ars":
    console.log("Moneda de argentina");
    break;

  default:
    console.log("diferente");
    break; 
} */

let entrada = prompt("Ingresar un nombre").toUpperCase();

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}
