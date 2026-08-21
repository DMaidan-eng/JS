//comentario en linea
/*
comentario en bloque
*/

//console.log
//console.log("Chau Mundo");

/*
tipos de datos
string =cadena de texto
number =numero
boolean =verdadero o falso
*/

/* string "cadena de texto"
let nombre = "Juan";
console.log(nombre); 

// number = numero
let edad = 30;
console.log(edad);

// boolean = verdadero o falso
let esEstudiante = true;
console.log(esEstudiante);
*/

// Variables: espacio de memoria que almacena un valor

// declarar variable
// let = variable local 
// const = constante
// var = variable global (no se usa mucho)

// inicializar variable
// let edad = 30;
// const miEdad = 24;

//const palabra reservada = palabra que tiene un solo significado en JS


// console.log nos permite salida de informacion en la consola del navegador

// otra es alert 
// alert("no lo uses mucho que es feo!");

// otra es prompt 
// para ingresar datos por teclado
//const nombre = prompt("Ingrese su nombre");
//console.log(nombre);

// confirm nos permite mostrar un mensaje de confirmacion
//let respuesta = confirm("¿Desea continuar?");
//console.log(respuesta);

//const numero1 = prompt ("Ingrese un numero");
//const numero2 = prompt ("Ingrese otro numero");


// Tarea 

//1 - parseInt o parseFloat

//2 - solicitar al nombre y apellido y mostrarlo en un mensaje final de este estilo para el caso del profe. "hola, tu nombre es lucas y tu apellido es ruiz"

//primer ejecicio
const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese otro numero"));

alert("El resultado de la suma es: " + (numero1 + numero2));

//segundo ejercicio
const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
alert("Hola, tu nombre es " + nombre + " y tu apellido es " + apellido);