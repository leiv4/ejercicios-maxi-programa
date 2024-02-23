// 1. Hacer un programa que solicite el ingreso de un número y que luego emita un
// cartel por pantalla aclarando si el mismo es múltiplo de 5.
function ejercicio23() {
  let numEjercicio23 = parseInt(prompt("Ejercicio 23: Ingresa un número"));

  if (!isNaN(numEjercicio23)) {
    if (numEjercicio23 % 5 === 0) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 23: El número ingresado (" +
        numEjercicio23 +
        "), es múltiplo de 5 </p>";
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 23: El número ingresado (" +
        numEjercicio23 +
        "), no es múltiplo de 5 </p>";
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 23: El dato ingresado es incorrecto, por favor ingresa un número. </p>";
  }
}

ejercicio23();
// 2. Hacer un programa que solicite el ingreso de dos números y luego calcular:
// a. La resta si el primero es mayor que el segundo.
// b. La suma si son iguales.
// c. El producto si el primero es menor.
// Se deberá emitir un cartel por pantalla con el resultado correspondiente.
function ejercicio24() {
  let num1Ejercicio24 = parseInt(prompt("Ejercicio 24: Ingresa el primer número"));
  let num2Ejercicio24 = parseInt(prompt("Ejercicio 24: Ingresa el segundo número"));
  if (!isNaN(num1Ejercicio24 && num2Ejercicio24)) {
    if (num1Ejercicio24 > num2Ejercicio24) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 24: La resta es: " +
        (num1Ejercicio24 - num2Ejercicio24) +
        "</p>";
    } else if (num1Ejercicio24 === num2Ejercicio24) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 24: La suma es: " +
        (num1Ejercicio24 + num2Ejercicio24) +
        "</p>";
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 24: El producto es: " +
        (num2Ejercicio24 - num1Ejercicio24) +
        "</p>";
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 24: El dato ingresado es incorrecto, por favor ingresa un número. </p>";
  }
}

ejercicio24();
// 3. Hacer un programa para ingresar dos números. Si el segundo es distinto de
// cero, calcular la división del primero por el segundo y mostrar el resultado por
// pantalla; caso contrario, emitir un cartel aclarando que no se puede dividir por
// cero.
function ejercicio25() {
  let num1Ejercicio25 = parseInt(prompt("Ejercicio 25: Ingresa el primer número"));
  let num2Ejercicio25 = parseInt(prompt("Ejercicio 25: Ingresa el segundo número"));
  if (!isNaN(num1Ejercicio25 && num2Ejercicio25)) {
    if (num2Ejercicio25 !== 0) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 25: La division es: " +
        num1Ejercicio25 / num2Ejercicio25 +
        "</p>";
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 25: No se puede dividir por cero. </p>";
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "Resultado de Ejercicio 25: El dato ingresado es incorrecto, por favor ingresa un número. ";
  }
}
ejercicio25();
// 4. Un importante negocio de desinfectante líquido realiza descuentos
// dependiendo de la cantidad de litros vendidos según la siguiente escala:
// a. Si vende menos de 100 litros, no hay descuento.
// b. Si vende entre 101 y 300 litros, el descuento es del 10%.
// c. Si vende entre 301 y 500 litros, el descuento es del 15%.
// d. Finalmente, si la venta es de más de 500 litros, el descuento es del 25%.
// Hacer un programa que solicite el ingreso del importe total de la venta y la
// cantidad de litros vendidos y calcule y emita el importe con el descuento
// aplicado.

function ejercicio26() {
  let litrosEjercicio26 = parseInt(
    prompt("Ejercicio 26: Ingresa la cantidad de litros vendidos")
  );
  let importeEjercicio26 = parseInt(
    prompt("Ejercicio 26: Ingresa el importe total de la venta")
  );
  if (!isNaN(litrosEjercicio26) || !isNaN(importeEjercicio26)) {
    if (litrosEjercicio26 >= 101 && litrosEjercicio26 <= 300) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 26: El descuento es del 10%. Por lo tanto, su importe es de: AR$</p>" +
        importeEjercicio26 * 0.1;
    } else if (litrosEjercicio26 >= 301 && litrosEjercicio26 <= 500) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 26: El descuento es del 15%. Por lo tanto su importe es de: AR$</p>" +
        importeEjercicio26 * 0.15;
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 26: No hay descuento, su importe es de: AR$</p>" +
        importeEjercicio26;
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 26: El dato ingresado es incorrecto, por favor ingresa un número. </p>";
  }
}

ejercicio26();
// 5. Hacer un programa que solicite el ingreso de las notas del primer parcial y del
// segundo parcial de una alumna de programación. El programa deberá analizar
// las notas y emitir la situación de la alumna según la siguiente escala:
// a. Si tiene 8 o más en ambos parciales, emitir “aprobación directa”.
// b. Si no tiene 8 o más en ambos pero tiene aprobados ambos parciales (se
// aprueba con 6 o más), emitir “rinde examen final”.
// c. Si tiene menos de 6 en alguno de los dos parciales, emitir “debe
// recuperar”.
// El programa debe emitir solo un cartel, el que corresponda.
function ejercicio27() {
  let nota1Ejercicio27 = parseInt(prompt("Ejercicio 27: Ingresa la primera nota"));
  let nota2Ejercicio27 = parseInt(prompt("Ejercicio 27: Ingresa la segunda nota"));
  if (!isNaN(nota1Ejercicio27) && !isNaN(nota2Ejercicio27)) {
    if (nota1Ejercicio27 >= 8 && nota2Ejercicio27 >= 8) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 27: Aprobación directa. </p>";
    } else if (nota1Ejercicio27 >= 6 && nota2Ejercicio27 >= 6) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 27: Rinde examen final. </p>";
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 27: Debe recuperar. </p>";
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 27: El dato ingresado es incorrecto, por favor ingresar un número. </p>";
  }
}

ejercicio27();
// 6. Hacer un programa para ingresar por teclado la longitud de los tres lados de un
// triángulo y que luego determine e informe con un cartel aclaratorio a qué tipo
// de triángulo corresponde:
// a. Equilátero: cuando los tres lados sean iguales.
// b. Isósceles: cuando dos de los tres lados sean iguales.
// c. Escaleno: cuando todos los lados sean distintos.
//  maxiprograma.com
// 7. Hacer un programa para ingresar 4 números. Luego analizar e informar por
// pantalla si los mismos se encuentran ordenados de forma decreciente.
// 8. El negocio de desinfectante antes mencionado vende además detergente
// suelto, y los precios se aplican según la siguiente escala:
// a. 25 ARS por litro los primeros 50 litros.
// b. 20 ARS por litro si la venta es de 51 a 200 litros.
// c. 15 ARS por litro si la venta es de 201 a 500 litros.
// d. 10 ARS por litro si la venta es de más de 500 litros.
// Además, si paga en efectivo, tiene un adicional del 10% sobre el importe final.
// Hacer un programa que solicite la cantidad de litros vendidos y el tipo de pago
// (ingresará 1 si paga en efectivo y 0 con cualquier otro medio de pago) y calcule
// y emita por pantalla el monto final a abonar por el cliente.
// 9. Una importante marca de computadoras permite elegir cierta configuración del
// equipo a comprar. Para ello existe la siguiente escala de precios:
// i5 (1) i7 (2) i9 (3)
// 8 RAM (1) USD 800 USD 900 USD 1200
// 16 RAM (2) USD 900 USD 1000 USD 1400
// 32 RAM (3) USD 1000 USD 1400 USD 2000
// Además, el equipo viene con un disco que permite almacenar 500 GB de
// información y que se puede ampliar a 1 TB si así lo desea, lo cual tiene un costo
// adicional de USD 300.
// Hacer un programa que solicite la opción de procesador, la opción de memoria
// RAM, y si extiende el disco o no (ingresa 1 para extender y 0 para no extender)
// y calcule y emita por pantalla el monto de la máquina seleccionada.
// Nota: si no entendés nada de compus, procesadores y eso, mirá:
// https://youtu.be/Bm3X8eHVv-s
// 10. Hacer un programa que solicite cuatro números y emitir un cartel aclaratorio si
// son todos iguales entre sí, caso contrario, no emitir nada.
// 11. Hacer un programa para ingresar tres números y luego mostrarlos ordenados
// de menor a mayor.
// 12. Hacer un programa para ingresar tres números y emitir un cartel aclaratorio si
// la suma de los dos primeros es mayor al producto del segundo con el tercero.
