/*
  Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
  mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/
var ifElseA1 = Math.random(0, 0.5);
if (ifElseA1 >= 0.5){
 // window.alert(ifElseA1.toFixed(3) + " is greater than 0.5");
} else {
 // window.alert(ifElseA1.toFixed(3) + " is lesser than 0.5")
}

/* 
  Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
  “Bebe” si la edad es menor a 2 años;
  “Nino” si la edad es entre 2 y 12 años;
  “Adolescente” entre 13 y 19 años;
  “Joven” entre 20 y 30 años;
  “Adulto” entre 31 y 60 años;
  “Adulto mayor” entre 61 y 75 años;
  “Anciano” si es mayor a 75 años.
*/
  var age = 100;
  if (age < 2) {
    window.alert("Bebe");
  } else if (age >= 2 && age <= 12){
    window.alert("Nino");
  } else if (age >= 13 && age <= 19){
    window.alert("Adolescente");
  } else if (age >= 20 && age <= 30){
    window.alert("Joven");
  } else if (age >= 31 && age <= 60){
    window.alert("Adulto");
  } else if (age >= 61 && age <= 75){
    window.alert("Adulto mayor");
  } else {
  //  window.alert("Anciano");
  }
