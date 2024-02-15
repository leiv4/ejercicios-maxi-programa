// 1. Hacer	un	programa	para	ingresar un	número	y	luego	se	emita	por	pantalla	un
// cartel	aclaratorio	si	“Es	mayor	a	10” o	“No	es	mayor	a	10”.
function ejercicio11() {
  let numEjercicio11 = parseInt(prompt("Ejercicio 11: Ingresa un numero"));
  if (!isNaN(numEjercicio11) && numEjercicio11 > 10) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 11: Es mayor a 10</p>";
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 11: No es mayor a 10</p>";
  }
}

ejercicio11();
// 2. Hacer	un	programa	para	ingresar dos	números	distintos	y	luego	se	muestre	por
// pantalla	el	menor	de	ellos.
// Nota: no	te	olvides	del	ambiente	ideal.	Qué	es	eso?	Mira:
// https://youtu.be/TTvnrL1KUZM?t=931

function ejercicio12() {
  let numero1Ejercicio12 = parseInt(
    prompt("Ejercicio 12: Ingresa el primer numero")
  );
  let numero2Ejercicio12 = parseInt(
    prompt("Ejercicio 12: Ingresa el segundo numero")
  );
  if (
    !isNaN(numero1Ejercicio12) &&
    !isNaN(numero2Ejercicio12 && numero1Ejercicio12 < numero2Ejercicio12)
  ) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de ejercicio 12:  " + numero1Ejercicio12 + "</p>";
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 12:  " + numero2Ejercicio12 + "</p>";
  }
}

ejercicio12();
// 3. Hacer	un	programa	para	ingresar dos	números y	que	luego	emita	por	pantalla
// el	mayor	de	ellos	o	un	cartel	aclaratorio	“Son	iguales” en	el	caso	de	que	así sea.
// Nota:	los	números	pueden	ser	iguales.

function ejercicio13() {
  let numero1Ejercicio13 = parseInt(
    prompt("Ejercicio 13: Ingresa el primer numero")
  );
  let numero2Ejercicio13 = parseInt(
    prompt("Ejercicio 13: Ingresa el segundo numero")
  );
  if (numero1Ejercicio13 === numero2Ejercicio13) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 13: Son iguales</p>";
  } else if (numero1Ejercicio13 > numero2Ejercicio13) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 13: " + numero1Ejercicio13 + "</p>";
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 13: " + numero2Ejercicio13 + "</p>";
  }
}

ejercicio13();
// 4. Hacer	un	programa	para	ingresar	un	número	y	luego	se	emita	un	cartel	por
// pantalla	“Positivo” si	el	número	es	mayor	a	cero,	“Negativo” si	el	número	es
// menor	a	cero	o	“Cero” si	el	número	es	igual	a	cero.
// Nota: requiere	más	de	in	IF!	Repasa cómo	se	escribirían:
// https://youtu.be/TTvnrL1KUZM?t=1180

function ejercicio14() {
  let numero1Ejercicio14 = parseInt(prompt("Ejercicio 14: Ingresa un numero"));
  if (numero1Ejercicio14 === 0) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 14: Cero</p>";
  } else if (numero1Ejercicio14 > 0) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 14: Positivo</p>";
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 14: Negativo</p>";
  }
}

ejercicio14();
// 5. Hacer	un	programa	para	ingresar un	número	y	mostrar	por	pantalla	un	cartel
// aclaratorio	si	el	mismo	es	PAR	o	IMPAR.
// Nota: leé	sobre	el	operador	“Resto”.	En	el	próximo	video	lo	explicaremos!

function ejercicio15() {
  let numeroEjercicio15 = parseInt(prompt("Ejercicio 15: Ingresa un numero"));
  if (numeroEjercicio15 % 2 === 0) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 15: Par</p>";
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 15: Impar</p>";
  }
}

ejercicio15();
// 6. Una	casa	de	video	juegos otorga	un	descuento	dependiendo	del	importe	de	la
// compra	realizada según	los	siguientes	valores:
// • Si	el	importe	es	menor	a	ARS	1000,	no	hay	descuento.
// • Si	el	importe	es ARS	1000	 o	más	pero	menor	a	ARS	5000,	aplica	un
// descuento	del	10%.
// • Si	el	importe	es ARS	5000	o	más,	aplica	un	descuento	del	18%.
// Hacer	un	programa	para	ingresar	un	importe	de	venta	y	luego	muestre	por
// pantalla	el	importe	final	con	el	descuento	que	corresponda.

function ejercicio16() {
  let importeEjercicio16 = parseInt(
    prompt("Ejercicio 16: Ingresa el importe de la venta")
  );
  let porcentajePeque = importeEjercicio16 * 0.1;
  let porcentajeGrande = importeEjercicio16 * 0.18;
  let descuentoPeque = importeEjercicio16 - porcentajePeque;
  let descuentoGrande = importeEjercicio16 - porcentajeGrande;
  if (importeEjercicio16 < 1000) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 16: No hay descuento, el importe final es de: AR$" +
      importeEjercicio16 +
      "</p>";
  } else if (importeEjercicio16 >= 1000 && importeEjercicio16 < 5000) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 16: Al igualar o superar el importe de AR$1000, tu descuento del 10% es de: AR$" +
      porcentajePeque +
      "</p>" +
      "<p>Por lo que el importe final es de: AR$" +
      descuentoPeque +
      "</p>";
  } else if (importeEjercicio16 >= 5000) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 16: Al igualar o superar el importe de AR$5000, tu descuento del 18% es de: AR$" +
      porcentajeGrande +
      "</p>" +
      "<p>Por lo que el importe final es de: AR$" +
      descuentoGrande +
      "</p>";
  }
}

ejercicio16();
// 7. Hacer	un programa	para	ingresar	cuatro	números distintos y	luego	mostrar	por
// pantalla	el	mayor de	ellos.
function ejercicio17() {
  let numero1Ejercicio17 = parseInt(
    prompt("Ejercicio 17: Ingresa el primer numero")
  );
  let numero2Ejercicio17 = parseInt(
    prompt("Ejercicio 17: Ingresa el segundo numero")
  );
  let numero3Ejercicio17 = parseInt(
    prompt("Ejercicio 17: Ingresa el tercer numero")
  );
  let numero4Ejercicio17 = parseInt(
    prompt("Ejercicio 17: Ingresa el cuarto numero")
  );
  let máximo = Math.max(
    numero1Ejercicio17,
    numero2Ejercicio17,
    numero3Ejercicio17,
    numero4Ejercicio17
  );
  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 17: El mayor de los 4 números es: " + máximo + "</p>";
}
ejercicio17();
// 8. Hacer	un	programa	para	ingresar	cuatro	números distintos	y	luego	mostrar	por
// pantalla	el	menor	de	ellos.
function ejercicio18() {
  let numero1Ejercicio18 = parseInt(
    prompt("Ejercicio 18: Ingresa el primer numero")
  );
  let numero2Ejercicio18 = parseInt(
    prompt("Ejercicio 18: Ingresa el segundo numero")
  );
  let numero3Ejercicio18 = parseInt(
    prompt("Ejercicio 18: Ingresa el tercer numero")
  );
  let numero4Ejercicio18 = parseInt(
    prompt("Ejercicio 18: Ingresa el cuarto numero")
  );
  let mínimo = Math.min(
    numero1Ejercicio18,
    numero2Ejercicio18,
    numero3Ejercicio18,
    numero4Ejercicio18
  );
  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 18: El menor de los 4 números es: " + mínimo + "</p>";
}

ejercicio18();
// 9. Hacer	un	programa para	ingresar	cinco	números	distintos	y	luego	mostrar	por
// pantalla	el	mayor	y	el	menor	de	ellos.

function ejercicio19() {
  let numero1Ejercicio19 = parseInt(
    prompt("Ejercicio 19: Ingresa el primer numero")
  );
  let numero2Ejercicio19 = parseInt(
    prompt("Ejercicio 19: Ingresa el segundo numero")
  );
  let numero3Ejercicio19 = parseInt(
    prompt("Ejercicio 19: Ingresa el tercer numero")
  );
  let numero4Ejercicio19 = parseInt(
    prompt("Ejercicio 19: Ingresa el cuarto numero")
  );
  let numero5Ejercicio19 = parseInt(
    prompt("Ejercicio 19: Ingresa el quinto numero")
  );

  let máximo = Math.max(
    numero1Ejercicio19,
    numero2Ejercicio19,
    numero3Ejercicio19,
    numero4Ejercicio19,
    numero5Ejercicio19
  );
  let mínimo = Math.min(
    numero1Ejercicio19,
    numero2Ejercicio19,
    numero3Ejercicio19,
    numero4Ejercicio19,
    numero5Ejercicio19
  );
  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 19: El mayor de los 5 números es: " +
    máximo +
    "</p>" +
    "<p>Resultado de Ejercicio 19: El menor de los 5 números es: " +
    mínimo +
    "</p>";
}

ejercicio19();
// 10. Hacer	un	programa	para	ingresar	cuatro	números y	luego	mostrar	por	pantalla
// cuáles son	mayores	a	100.

function ejercicio20() {
  let numero1Ejercicio20 = parseInt(
    prompt("Ejercicio 20: Ingresa el primer numero")
  );
  let numero2Ejercicio20 = parseInt(
    prompt("Ejercicio 20: Ingresa el segundo numero")
  );
  let numero3Ejercicio20 = parseInt(
    prompt("Ejercicio 20: Ingresa el tercer numero")
  );
  let numero4Ejercicio20 = parseInt(
    prompt("Ejercicio 20: Ingresa el cuarto numero")
  );
  // Verificar que se hayan ingresado exactamente 4 números
  if (
    !isNaN(numero1Ejercicio20) &&
    !isNaN(numero2Ejercicio20) &&
    !isNaN(numero3Ejercicio20) &&
    !isNaN(numero4Ejercicio20)
  ) {
    const array = [
      numero1Ejercicio20,
      numero2Ejercicio20,
      numero3Ejercicio20,
      numero4Ejercicio20,
    ];

    const numerosMayoresA100 = array.filter((i) => i > 100);

    if (numerosMayoresA100.length > 0) {
      let resultadoHTML =
        "<p>Resultado de Ejercicio 20: Los números mayores que 100 son:</p>";
      numerosMayoresA100.forEach((num) => {
        resultadoHTML += "<p>" + num + "</p>";
      });
      document.getElementById("resultados").innerHTML += resultadoHTML;
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 20: No hay números mayores que 100 entre los ingresados.</p>";
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 20: Por favor, ingresa exactamente 4 números válidos.</p>";
  }
}

ejercicio20();
// 11. Hacer	un	programa	para	ingresar cuatro	números	y	luego	mostrar	por	pantalla
// cuántos son	menores	a	100.

function ejercicio21() {
  let numero1Ejercicio21 = parseInt(
    prompt("Ejercicio 21: Ingresa el primer numero")
  );
  let numero2Ejercicio21 = parseInt(
    prompt("Ejercicio 21: Ingresa el segundo numero")
  );
  let numero3Ejercicio21 = parseInt(
    prompt("Ejercicio 21: Ingresa el tercer numero")
  );
  let numero4Ejercicio21 = parseInt(
    prompt("Ejercicio 21: Ingresa el cuarto numero")
  );
  if (
    !isNaN(numero1Ejercicio21) &&
    !isNaN(numero2Ejercicio21) &&
    !isNaN(numero3Ejercicio21) &&
    !isNaN(numero4Ejercicio21)
  ) {
    const array = [
      numero1Ejercicio21,
      numero2Ejercicio21,
      numero3Ejercicio21,
      numero4Ejercicio21,
    ];

    const numerosMenoresA100 = array.filter((i) => i < 100);
    if (numerosMenoresA100.length < 100) {
      getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 21: Los números menores a 100 son:</p>";
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 21: No hay números menores que 100 entre los ingresados.</p>";
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 21: Por favor, ingresa exactamente 4 números válidos.</p>";
  }
}
ejercicio21();
// 12. Hacer	un	programa	para	ingresar	un	valor	que	estará expresado	en	minutos.	Si
// los	minutos	superan	los 60,	pasar	el	valor	a	horas,	de	lo	contrario	dejarlo	en
// minutos.	Mostrar	el	resultado	en	pantalla	aclarando	si	se	muestran	minutos	u
// horas.
function ejercicio22() {
  let tiempoEjercicio22 = parseInt(
    prompt("Ejercicio 22: Ingresa un número para devolver en formato hora")
  );
  if (tiempoEjercicio22 > 60) {
    let horas = Math.floor(tiempoEjercicio22 / 60);
    let minutos = tiempoEjercicio22 % 60;

    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 22: El tiempo es de " +
      horas +
      " hora/s y " +
      minutos +
      " minuto/s</p>";
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 22: El tiempo es de " +
      tiempoEjercicio22 +
      " minutos</p>";
  }
}

ejercicio22();
