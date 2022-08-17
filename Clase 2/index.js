/* 
=   asignacion
let numero = 5;

== compara solamente valor
console.log(3 == "3") // true

=== compara tanto tipo como valor
console.log(3 === "3") //false
*/

/* 
estructura if

if(condicion){
  codigo que se ejecuta cuando la condicion sea verdadera
}
*/
/* let numero = 5;

if(numero === 7){
  console.log("entramos");
}

console.log("finaliza");

if(""){
  console.log("entramos");
} */

/* f */

/* 
estructura if  else
if(condicion){
  codigo a ejecutar cuando la condicion sea verdadera
}else{
  codigo a ejecutar cuando la condicion sea falsa
}
*/

/* let numero = 13;

if(numero === 10){
  console.log("eres el 10");
}else{
  console.log("no eres el 10");
}

console.log("termianmos"); */

/* let clima = "bonito dia";

if(clima === "cae agua"){
  console.log("dormir");
}else{
  console.log("salir");
}

console.log("termianmos"); */

/* let respuesta = prompt("Terminaste la tarea?");

if(respuesta.toLowerCase() === "si"){
  alert("Puedes salir a jugar");
}else{
  alert("no puedes salir");
} */

/* 
estructura if else if
if(condicion1){
  codigo a ejecutar en caso de que condicion1 sea verdadera
}else if(condicion2){
  codigo a ejecutar en caso de que condicion2 sea verdadera
}else{
  codigo a ejecutar en caso de que ninguna condicion sea verdadera
}
*/

/* let edad = parseInt(prompt("Ingresa tu edad"));

if(edad < 15){
  alert("no puedes entrar");
}else if(edad <= 17){
  alert("puedes entrar con un adulto responsable");
}else{
  alert("Puedes entrar");
} */
/* let numero = 5;
let valor = true;
let valor1 = 7 > numero; */

/* 
&& es verdadero si todas las condiciones son verdaderas de lo contrario es falso
|| es verdader si al menos una de las condiciones es verdadera
*/

/* let respuestaTarea = prompt("Terminaste la tarea?");
let respuestaCasa = prompt("Organizaste la casa?");

if(respuestaTarea.toLowerCase() === "si" && respuestaCasa.toLowerCase() === "si"){
  alert("Puedes salir a jugar");
}else{
  alert("no puedes salir");
} */

let nombre = prompt("Ingresa el nombre");

if((nombre !== "") && (nombre === "andres" || nombre === "ANDRES")){
  alert("Hola Andres");
}else{
  alert("valor incorrecto");
}