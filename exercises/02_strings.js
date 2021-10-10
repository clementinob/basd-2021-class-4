/*
  Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
  (utilizar toUpperCase).
*/
  var stringsA1 = 'Otorrinolaringología';
  
//  console.log(stringsA1.toUpperCase());

/*
  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres 
  guardando el resultado en una nueva variable (utilizar substring).
*/
  var stringsB1 = 'Electrocardiograma';
  var outcomeB = stringsB1.substring(0,4);
  
//  console.log(outcomeB);

/*
  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
  guardando el resultado en una nueva variable (utilizar substring).
*/
  var stringsC1 = 'Paralelepípedo';
  var outcomeC = stringsC1.substring(stringsC1.length - 3, stringsC1.length);

//  console.log(outcomeC);

/*
  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
  mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
  toLowerCase y el operador +).
*/
  var stringsD1 = 'esternocleidomastoideo';
  var outcomeD = stringsD1.substring(0,1).toUpperCase() + stringsD1.substring(1, stringsD1.length).toLowerCase();

//  console.log(outcomeD);

/*
  Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
  primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
  var stringsE1 = 'Become a Software Developer';
  var outcomeE = stringsE1.indexOf(' ');

//  console.log(outcomeE);

/*
  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
  Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
  palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y 
  el operador +).
*/
  var stringsF1 = 'caleidoscopio extravagante';
  var space = stringsF1.indexOf(' ');

  var outcomeF =  stringsF1.substring(0,1).toUpperCase() + 
                  stringsF1.substring(1, space + 1).toLowerCase() + 
                  stringsF1.substring(space +1, space + 2).toUpperCase() + 
                  stringsF1.substring(space + 2, stringsF1.length).toLowerCase();
  
//  console.log(outcomeF);