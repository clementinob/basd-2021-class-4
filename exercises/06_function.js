/* 
  Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar 
  el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/



 /* 
    function suma (data1, data2){
      return data1 + data2;
    }
    var outputA = suma(5, 85);
    console.log(outputA); 
  */



/*
  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
  mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/


 /* function suma (data1, data2){
    if (typeof data1 == 'number' && typeof data2 == 'number'){
      return data1 + data2;
    } else{
        window.alert("Error! One of the parameters isn't a number!"); 
        return NaN;
      }
    }

    var outputB = suma(5, 2);
    console.log(outputB);
  
  */
  
/*
  Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/
  function validateInteger(data3){
    if (data3 % 1 == 0){
      return true;
    } else{
      return false;
    }
  }

/*
  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
  En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

  /*
    function suma (data1, data2){
      if (validateInteger(data1) == true && validateInteger(data2) == true){
        return data1 + data2;
      } else{
          window.alert("Error! One of the parameters isn't a whole number!"); 
          return NaN;
        }
    }

    var outputB = suma(5, 2.3);
    console.log(outputB);
  */

/*
  Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando 
  que todo siga funcionando igual.
*/
  

  /*
    function validateNumber (num1, num2){
      if (typeof num1 == 'number' && typeof num2 == 'number'){
        return true;
      } else {
          return false;
        }
    }

    function suma (data1, data2){
      if (validateNumber(data1, data2) == true){
        return data1 + data2;
      } else {
          window.alert("Error! One of the parameters isn't a number!"); 
          return NaN;
        }
    }

    var outputE = suma(25, 'e');
    console.log(outputE);
  */