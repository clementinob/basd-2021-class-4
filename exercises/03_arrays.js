/*
  Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
  "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
  var arraysA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
  "Octubre", "Noviembre", "Diciembre"];
  
//  console.log(arraysA[5] + ' ' + arraysA[11]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
  
//  console.log(arraysA.slice(0).sort());

/* Agregar un elemento al principio y al final del array (utilizar unshift y push). */
  arraysA.unshift("Newells");
  arraysA.push("Central");

//  console.log(arraysA);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */
  arraysA.shift();
  arraysA.pop();

//  console.log(arraysA);

/* Invertir el orden del array (utilizar reverse). */
//  console.log(arraysA.slice(0).reverse());

/* Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */
//  console.log(arraysA.join(" - "));

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
  var arraysG = arraysA.slice(4, 11);

//  console.log(arraysG);