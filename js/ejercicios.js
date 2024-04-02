// 1. Generalmente	es	la	suma,	pero	ya	la	hicimos	en	el	video!
// 2. Hacer	un	programa	para	solicitar	por	teclado	un	número	y	luego devolver	su
// valor	elevado	al	cubo.
// 1. Generalmente es la suma, pero ya la hicimos en el video!
// 2. Hacer un programa para solicitar por teclado un número y luego devolver su
// valor elevado al cubo.
// Nota:	no	olvides	que	sólo	contamos	con	las	cuatro	operaciones	básicas.

function ejercicio2() {
  let resultadoEjercicio2 = parseInt(
    prompt("Ejercicio 2: Ingresa un número por favor")
  );
  let resultadoCubo = resultadoEjercicio2 ** 3;
  if (!isNaN(resultadoEjercicio2)) {
    // Mostrar resultados en el contenedor
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 2: El cubo de " +
      resultadoEjercicio2 +
      " es " +
      resultadoCubo +
      "</p>";
  } else {
    // Mostrar mensaje de error en el contenedor
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 2: El dato ingresado es incorrecto, por favor ingresa un número.</p>";
  }
}

// 3. Hacer	un	programa	que	permita	ingresar	el	año	actual	y	el	año	de	la	fecha	de
// nacimiento	de	una	persona	y	luego	calcule	y	emita	por	pantalla	su	edad.
// Nota:	no	hay	que	tener	en	cuenta	si	la	persona	cumplió	años	o	no,
// simplemente	calcular.
// Nota:	no	olvides	que	sólo	contamos	con	las	cuatro	operaciones	básicas.
function ejercicio3() {
  let resultadoEjercicio3 = prompt("Ejercicio 3: Ingresa tu año de nacimiento");
  // Obtener el año actual
  let today = new Date();

  let year = today.getFullYear();

  let edad = year - resultadoEjercicio3;

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 3: Tienes " + edad + " años</p>";

  return edad;
}

// 4. Hacer	un	programa	que	permita	ingresar	los	kilómetros	existentes	entre	dos
// ciudades	y	la	velocidad	promedio	de	un	vehículo.	Calcular	y	emitir	por	pantalla
// el	tiempo	aproximado	que	demandará	llegar	de	un	punto	a	otro	teniendo	en
// cuenta	los	datos	ingresados.
function ejercicio4() {
  let distanciaEjercicio4 = prompt(
    "Ejercicio 4: Ingresa los kilómetros existentes entre dos ciudades"
  );

  let velocidadEjercicio4 = prompt(
    "Ejercicio 4: Ingresa la velocidad promedio de un vehículo"
  );
  // Calcular el tiempo en horas (formulaTiempoEjercicio4)
  let formulaTiempoEjercicio4 = distanciaEjercicio4 / velocidadEjercicio4;
  // Calcular las horas (horaEjercicio4)
  // Anteriormente, hice uso de Math.trunc para obtener la parte entera de formulaTiempoEjercicio4, pero descubrí que cambiarlo a Math.floor asegura que siempre redondeemos hacia abajo, es decir, que obtengamos la parte entera más baja.
  let horaEjercicio4 = Math.floor(formulaTiempoEjercicio4);
  // Calcular los minutos (minutoEjercicio4)
  // Calculé los minutos restantes después de las horas multiplicando la parte decimal de formulaTiempoEjercicio4 por 60. Esto nos da la parte fraccional en minutos.
  // Hice una corrección aplicando la función Math.round para redondear correctamente los minutos. Anteriormente, había usado Math.trunc que simplemente truncaba hacia cero, pero redondear es más apropiado en este contexto.
  let minutoEjercicio4 = Math.round((formulaTiempoEjercicio4 % 1) * 60);

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 4: Tardarás en llegar de una ciudad a otra " +
    horaEjercicio4 +
    ":" +
    minutoEjercicio4 +
    "</p>";
}

// 5. Una	casa	de	computación	paga	a	sus	empleados	un	sueldo	fijo	de	ARS15000
// más	una	comisión	del	5%	sobre	el	total	facturado	por	cada	empleado.	Hacer	un
// programa	para	ingresar	el	total	facturado	por	un	empleado	y	que	luego	calcule
// y	emita	por	pantalla	el	sueldo	total	a	cobrar	por	el	mismo.

function ejercicio5() {
  let totalFacturadoEjercicio5 = prompt(
    "Ejercicio 5: Ingresa el total facturado por un empleado"
  );
  // Aca tuve un pequeño problema, resulta que cuando imprimía en pantalla el 'sueldoTotalEjercicio5, me devolvía los resultados de las variables en cadena(descubrí que los prompt devuelven cadena). Así que me vi obligado a usar parseInt para convertir la entrada a un número.
  totalFacturadoEjercicio5 = parseInt(totalFacturadoEjercicio5);
  let sueldoFijoEjercicio5 = 15000;
  // Para calcular porcentaje siempre corro la coma 2 lugares a la izquierda para multiplicarlo con el total facturado. En esta caso se trataba del 5%, por lo que le pongo 0.05.
  let comisionEjercicio5 = totalFacturadoEjercicio5 * 0.05;
  let sueldoTotalEjercicio5 =
    sueldoFijoEjercicio5 + totalFacturadoEjercicio5 + comisionEjercicio5;

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 5: El sueldo total a cobrar por el empleado es ARS " +
    sueldoTotalEjercicio5 +
    "</p>";
  return sueldoTotalEjercicio5;
}

// 6. Hacer	un	programa	para	ingresar	por	teclado	las	tres	notas	de	exámenes	de	un
// alumno	y	luego	calcule	y	emita	por	pantalla	el	promedio	final.

function ejercicio6() {
  let nota1Ejercicio6 = prompt("Ejercicio 6: Ingresa la primera nota");
  let nota2Ejercicio6 = prompt("Ejercicio 6: Ingresa la segunda nota");
  let nota3Ejercicio6 = prompt("Ejercicio 6: Ingresa la tercera nota");
  let promedioEjercicio6 =
    (parseInt(nota1Ejercicio6) +
      parseInt(nota2Ejercicio6) +
      parseInt(nota3Ejercicio6)) /
    3;
  // Quería que se mostrara solamente 2 decimales en pantalla, por eso el método .toFixed(2).
  promedioEjercicio6 = promedioEjercicio6.toFixed(2);

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 6: Tu promedio final es: " +
    promedioEjercicio6 +
    "</p>";
  return promedioEjercicio6;
}

// 7. Hacer	un	programa	para	ingresar	por	teclado	los	metros	cuadrados	totales	de
// un	predio	y	los	metros	cuadrados	cubiertos;	luego	calcular	y	mostrar	por
// pantalla	el	porcentaje	de	metros	cuadrados	cubiertos	y	el	porcentaje	de
// metros	cuadrados	descubiertos.

function ejercicio7() {
  let metrosCuadradosEjercicio7 = prompt(
    "Ejercicio 7: Ingresa los metros cuadrados totales de tu predio"
  );

  let metrosCuadradosCubiertosEjercicio7 = prompt(
    "Ejercicio 7: Ingresa los metros cuadrados cubiertos de tu predio"
  );

  let porcentajeCubiertosEjercicio7 =
    (parseInt(metrosCuadradosCubiertosEjercicio7) * 100) /
    parseInt(metrosCuadradosEjercicio7);

  let metrosCuadradosDescubiertosEjercicio7 =
    parseInt(metrosCuadradosEjercicio7) -
    parseInt(metrosCuadradosCubiertosEjercicio7);

  let porcentajeDescubiertosEjercicio7 =
    (parseInt(metrosCuadradosDescubiertosEjercicio7) * 100) /
    metrosCuadradosEjercicio7;

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 7: Metros cuadrados cubiertos: " +
    porcentajeCubiertosEjercicio7.toFixed(2) +
    "%</p><p>Resultado de Ejercicio 7: Metros cuadrados descubiertos: " +
    porcentajeDescubiertosEjercicio7.toFixed(2) +
    "%</p>";
}

// 8. Una	importante	cadena	de	delivery	cuenta	con	una	promoción	por	tiempo
// limitado	en	la	que	otorga	un	15%	de	descuento	sobre	el	total	del	valor	de	la
// compra	realizada.	Hacer	un	programa	para	solicitar	el	monto	total	y	el	mismo
// calcule	y	emita	por	pantalla	el	total	a	cobrar	con	el	descuento	aplicado.

function ejercicio8() {
  let montoTotalEjercicio8 = prompt(
    "Ejercicio 8: Ingresa el monto total de tu compra"
  );
  montoTotalEjercicio8;
  let descuentoEjercicio8 = montoTotalEjercicio8 * 0.15;
  let montoFinalEjercicio8 = montoTotalEjercicio8 - descuentoEjercicio8;

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 8: Gracias por tu compra en éste día tan especial, por lo que te damos un descuento del 15% sobre el total: ARS " +
    montoFinalEjercicio8 +
    "</p>";
}

// 9. Una	universidad	desea	conocer	los	porcentajes	de	mujeres	y	hombres	en	las
// carreras	de	ciencias	exactas.	Se	solicita	un	programa	para	cargar	la	cantidad	de
// mujeres	y	la	cantidad	de	hombres	y	que	el	mismo	calcule	y emita	por	pantalla
// los	porcentajes	correspondientes.
function ejercicio9() {
  let cantidadMujeresEjercicio9 = prompt(
    "Ejercicio 9: Ingresa la cantidad de mujeres"
  );
  let cantidadHombresEjercicio9 = prompt(
    "Ejercicio 9: Ingresa la cantidad de hombres"
  );
  let cantidadTotalAlumnosEjercicio9 =
    parseInt(cantidadMujeresEjercicio9) + parseInt(cantidadHombresEjercicio9);
  let porcentajeMujeresEjercicio9 =
    (parseInt(cantidadMujeresEjercicio9) * 100) /
    parseInt(cantidadTotalAlumnosEjercicio9);
  let porcentajeHombresEjercicio9 =
    (parseInt(cantidadHombresEjercicio9) * 100) /
    parseInt(cantidadTotalAlumnosEjercicio9);

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 9: Porcentaje de mujeres: " +
    porcentajeMujeresEjercicio9.toFixed(2) +
    "%</p><p>Resultado de Ejercicio 9: Porcentaje de hombres: " +
    porcentajeHombresEjercicio9.toFixed(2) +
    "%</p>";
}

// 10. Hacer	un	programa	que	permita	ingresar	por	teclado	dos	números	y	que	luego
// muestre	por	pantalla	la	suma,	la	resta,	la	multiplicación	y	la	división	de	dichos
// números.	Se	deben	mostrar	cuatro	resultados	en	pantalla.	Los	números	deben
// ser	solicitados	una	única	vez.

function ejercicio10() {
  let primerNumeroEjercicio10 = prompt("Ejercicio 10: Ingresa el primer número");
  let segundoNumeroEjercicio10 = prompt("Ejercicio 10: Ingresa el segundo número");
  let sumaEjercicio10 =
    parseInt(primerNumeroEjercicio10) + parseInt(segundoNumeroEjercicio10);
  let restaEjercicio10 =
    parseInt(primerNumeroEjercicio10) - parseInt(segundoNumeroEjercicio10);
  let multiplicaciónEjercicio10 =
    parseInt(primerNumeroEjercicio10) * parseInt(segundoNumeroEjercicio10);
  let divisionEjercicio10 =
    parseInt(primerNumeroEjercicio10) / parseInt(segundoNumeroEjercicio10);

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 10: La suma es: " +
    sumaEjercicio10 +
    "</p><p>Resultado de Ejercicio10: La resta es: " +
    restaEjercicio10 +
    "</p><p>Resultado de Ejercicio10: La multiplicación es: " +
    multiplicaciónEjercicio10 +
    "</p><p>Resultado de Ejercicio10: La division es: " +
    divisionEjercicio10 +
    "</p>";
}

// 11. Hacer	un	programa	para	ingresar un	número	y	luego	se	emita	por	pantalla	un
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

// 12. Hacer	un	programa	para	ingresar dos	números	distintos	y	luego	se	muestre	por
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

// 13. Hacer	un	programa	para	ingresar dos	números y	que	luego	emita	por	pantalla
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

// 14. Hacer	un	programa	para	ingresar	un	número	y	luego	se	emita	un	cartel	por
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

// 15. Hacer	un	programa	para	ingresar un	número	y	mostrar	por	pantalla	un	cartel
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

// 16. Una	casa	de	video	juegos otorga	un	descuento	dependiendo	del	importe	de	la
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
      "<p>Resultado de Ejercicio 16: No hay descuento, el importe final es de: ARS " +
      importeEjercicio16 +
      "</p>";
  } else if (importeEjercicio16 >= 1000 && importeEjercicio16 < 5000) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 16: Al igualar o superar el importe de ARS 1000, tu descuento del 10% es de: ARS " +
      porcentajePeque +
      "</p>" +
      "<p>Por lo que el importe final es de: ARS " +
      descuentoPeque +
      "</p>";
  } else if (importeEjercicio16 >= 5000) {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 16: Al igualar o superar el importe de ARS 5000, tu descuento del 18% es de: ARS " +
      porcentajeGrande +
      "</p>" +
      "<p>Por lo que el importe final es de: ARS " +
      descuentoGrande +
      "</p>";
  }
}

// 17. Hacer	un programa	para	ingresar	cuatro	números distintos y	luego	mostrar	por
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
// 18. Hacer	un	programa	para	ingresar	cuatro	números distintos	y	luego	mostrar	por
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

// 19. Hacer	un	programa para	ingresar	cinco	números	distintos	y	luego	mostrar	por
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

// 20. Hacer	un	programa	para	ingresar	cuatro	números y	luego	mostrar	por	pantalla
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

// 21. Hacer	un	programa	para	ingresar cuatro	números	y	luego	mostrar	por	pantalla
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
// 22. Hacer	un	programa	para	ingresar	un	valor	que	estará expresado	en	minutos.	Si
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

// 23. Hacer un programa que solicite el ingreso de un número y que luego emita un
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

// 24. Hacer un programa que solicite el ingreso de dos números y luego calcular:
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

// 25. Hacer un programa para ingresar dos números. Si el segundo es distinto de
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
// 26. Un importante negocio de desinfectante líquido realiza descuentos
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
        "<p>Resultado de Ejercicio 26: El descuento es del 10%. Por lo tanto, su importe es de: ARS </p>" +
        importeEjercicio26 * 0.1;
    } else if (litrosEjercicio26 >= 301 && litrosEjercicio26 <= 500) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 26: El descuento es del 15%. Por lo tanto su importe es de: ARS </p>" +
        importeEjercicio26 * 0.15;
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 26: No hay descuento, su importe es de: ARS </p>" +
        importeEjercicio26;
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 26: El dato ingresado es incorrecto, por favor ingresa un número. </p>";
  }
}

// 27. Hacer un programa que solicite el ingreso de las notas del primer parcial y del
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
      "<p>Resultado de Ejercicio 27: El dato ingresado es incorrecto, por favor ingresa un número. </p>";
  }
}

// 28. Hacer un programa para ingresar por teclado la longitud de los tres lados de un
// triángulo y que luego determine e informe con un cartel aclaratorio a qué tipo
// de triángulo corresponde:
// a. Equilátero: cuando los tres lados sean iguales.
// b. Isósceles: cuando dos de los tres lados sean iguales.
// c. Escaleno: cuando todos los lados sean distintos.
//  maxiprograma.com
function ejercicio28() {
  let lado1Ejercicio28 = parseInt(prompt("Ejercicio 28: Ingresa el primer lado"));
  let lado2Ejercicio28 = parseInt(prompt("Ejercicio 28: Ingresa el segundo lado"));
  let lado3Ejercicio28 = parseInt(prompt("Ejercicio 28: Ingresa el tercer lado"));
  if (
    !isNaN(lado1Ejercicio28) &&
    !isNaN(lado2Ejercicio28) &&
    !isNaN(lado3Ejercicio28)
  ) {
    if (
      lado1Ejercicio28 === lado2Ejercicio28 &&
      lado1Ejercicio28 === lado3Ejercicio28
    ) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 28: Es un triángulo equilátero. </p>";
    } else if (
      lado1Ejercicio28 === lado2Ejercicio28 ||
      lado1Ejercicio28 === lado3Ejercicio28 ||
      lado2Ejercicio28 === lado3Ejercicio28
    ) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 28: Es un triángulo isósceles. </p>";
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 28: Es un triángulo escaleno. </p>";
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 28: El dato ingresado es incorrecto, por favor ingresa un número. </p>";
  }
}

// 29. Hacer un programa para ingresar 4 números. Luego analizar e informar por
// pantalla si los mismos se encuentran ordenados de forma decreciente.
function ejercicio29() {
  let num1Ejercicio29 = parseInt(prompt("Ejercicio 29: Ingresa el primer número"));
  let num2Ejercicio29 = parseInt(prompt("Ejercicio 29: Ingresa el segundo número"));
  let num3Ejercicio29 = parseInt(prompt("Ejercicio 29: Ingresa el tercer número"));
  let num4Ejercicio29 = parseInt(prompt("Ejercicio 29: Ingresa el cuarto número"));
  if (
    !isNaN(num1Ejercicio29) &&
    !isNaN(num2Ejercicio29) &&
    !isNaN(num3Ejercicio29)
  ) {
    if (
      num1Ejercicio29 > num2Ejercicio29 &&
      num2Ejercicio29 > num3Ejercicio29 &&
      num3Ejercicio29 > num4Ejercicio29
    ) {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 29: Los números son ordenados de forma decreciente: " +
        num1Ejercicio29 +
        ", " +
        num2Ejercicio29 +
        ", " +
        num3Ejercicio29 +
        ", " +
        num4Ejercicio29 +
        ". </p>";
    } else {
      document.getElementById("resultados").innerHTML +=
        "<p>Resultado de Ejercicio 29: Los números no son ordenados de forma decreciente. </p>";
    }
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 29: El dato ingresado es incorrecto, por favor ingresa un número. </p>";
  }
}

// 30. El negocio de desinfectante antes mencionado vende además detergente
// suelto, y los precios se aplican según la siguiente escala:
// a. 25 ARS por litro los primeros 50 litros.
// b. 20 ARS por litro si la venta es de 51 a 200 litros.
// c. 15 ARS por litro si la venta es de 201 a 500 litros.
// d. 10 ARS por litro si la venta es de más de 500 litros.
// Además, si paga en efectivo, tiene un adicional del 10% sobre el importe final.
// Hacer un programa que solicite la cantidad de litros vendidos y el tipo de pago
// (ingresará 1 si paga en efectivo y 0 con cualquier otro medio de pago) y calcule
// y emita por pantalla el monto final a abonar por el cliente.
function ejercicio30() {
  let litrosEjercicio30 = parseInt(
    prompt("Ejercicio 30: Ingresa la cantidad de litros vendidos")
  );
  let tipoDePagoEjercicio30 = parseInt(
    prompt(
      "Ejercicio 30: Ingresa 1 si paga en efectivo y 0 con cualquier otro medio de pago"
    )
  );

  if (!isNaN(litrosEjercicio30) && !isNaN(tipoDePagoEjercicio30)) {
    let importeEjercicio30 = 0;

    if (litrosEjercicio30 <= 50) {
      importeEjercicio30 = litrosEjercicio30 * 25;
    } else if (litrosEjercicio30 <= 200) {
      importeEjercicio30 = litrosEjercicio30 * 20;
    } else if (litrosEjercicio30 <= 500) {
      importeEjercicio30 = litrosEjercicio30 * 15;
    } else {
      importeEjercicio30 = litrosEjercicio30 * 10;
    }

    let mensaje =
      "<p> Resultado de Ejercicio 30: Su importe es de: ARS " +
      importeEjercicio30 +
      "</p>";

    if (tipoDePagoEjercicio30 === 1) {
      let importeConDescuento = importeEjercicio30 * 0.9; // Aplica el descuento del 10% si paga en efectivo
      mensaje += "<p> Importe con descuento: ARS " + importeConDescuento + "</p>";
    }

    document.getElementById("resultados").innerHTML += mensaje;
  } else {
    document.getElementById("resultados").innerHTML +=
      "<p>Resultado de Ejercicio 30: El dato ingresado es incorrecto, por favor ingresa un número. </p>";
  }
}

// 31. Una importante marca de computadoras permite elegir cierta configuración del
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
function ejercicio31() {}

// 32. Hacer un programa que solicite cuatro números y emitir un cartel aclaratorio si
// son todos iguales entre sí, caso contrario, no emitir nada.
function ejercicio32() {}

// 33. Hacer un programa para ingresar tres números y luego mostrarlos ordenados
// de menor a mayor.
function ejercicio33() {}

// 34. Hacer un programa para ingresar tres números y emitir un cartel aclaratorio si
// la suma de los dos primeros es mayor al producto del segundo con el tercero.
function ejercicio34() {}

// 35. Hacer un programa que solicite el ingreso de 10 números y que muestre el
// mayor de ellos por pantalla. Solo se debe emitir UN valor por pantalla.
function ejercicio35() {}

// 36. Hacer un programa que solicite 20 números y calcule y emita por pantalla
// cuántos son positivos (mayores a cero). Se debe mostrar un solo valor: el
// conteo final.
function ejercicio36() {}

// 37. Hacer un programa para mostrar los números del 1 al 10. No se debe realizar
// ningún pedido de datos.
function ejercicio37() {}

// 38. Hacer un programa para mostrar los números del 10 al 1. No se debe realizar
// ningún pedido de datos.
function ejercicio38() {}

// 39. Hacer un programa que muestre los números del 1 al 100 de 5 en 5. Ejemplo:
// 0, 5, 10, 15, 20…. 100.
function ejercicio39() {}

// 40. Hacer un programa que solicite UN número y luego calcule y emita un cartel
// aclaratorio si el mismo es primo o no es primo.
// Nota: un numero es primo cuando es divisible únicamente por 1 y por sí
// mismo.
function ejercicio40() {}

// 41. Hacer un programa que solicite 10 números y luego mostrar por pantalla el
// máximo de ellos y la posición en la que fue ingresado.
function ejercicio41() {}

// 42. Hacer un programa que solicite 20 números y luego mostrar por pantalla el
// menor de ellos y la posición en la que fue encontrado.
function ejercicio42() {}

// 43. Hacer un programa que solicite 20 edades y luego calcule el promedio de edad
// de aquellas personas mayores a 18 años.
function ejercicio43() {}

// 44. Hacer un programa que solicite 20 números y luego emitir por pantalla el
// máximo de los números pares y el mínimo de los números impares.
function ejercicio44() {}

// 45. Hacer un programa para ingresar 10 números y luego calcule y emita el mayor
// de los primos de la lista. En caso de no haber ningún número primo, deberá
// aclararlo con un cartel.
function ejercicio45() {}

// 46. Hacer un programa para mostrar los números del 1 al 10. No se debe realizar
// ningún pedido de datos. USANDO WHILE.
function ejercicio46() {}

// 47. Hacer un programa para mostrar los números del 10 al 1. No se debe realizar
// ningún pedido de datos. USANDO WHILE.
function ejercicio47() {}

// 48. Hacer un programa que solicite la edad de un grupo de personas. El programa
// deberá pedir edades hasta que se ingrese una edad menor a 18 años. Deberá
// mostrar por pantalla cuántas personas mayores se registraron.
function ejercicio48() {}

// 49. Hacer un programa que solicite dos números y luego muestre los números
// entre el menor y el mayor de ellos. Acordate, usando While.
function ejercicio49() {}

// 50. Hacer un programa que muestre los números del 1 al 100 de 5 en 5. Ejemplo:
// 0, 5, 10, 15, 20…. 100. Usando While.
function ejercicio50() {}

// 51. Hacer un programa que solicite UN número y luego calcule y emita un cartel
// aclaratorio si el mismo es primo o no es primo.
// Nota: usando While. Ya lo hicimos con FOR, ahora con While.
function ejercicio51() {}

// 52. Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego mostrar por pantalla el máximo de ellos y la posición
// en la que fue ingresado.
function ejercicio52() {}

// 53. Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego mostrar por pantalla el menor y el segundo menor.
function ejercicio53() {}

// 54. Realizar el nuevamente el ejercicio 8 pero ahora debe devolver además la
// posición en la que fue encontrado cada uno de los mínimos.
function ejercicio54() {}

// 55. Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego emitir por pantalla el máximo de los números
// negativos y el mínimo de los números positivos.
function ejercicio55() {}

// 56. Hacer un programa para ingresar una lista de números que corta cuando se
// ingresa un cero y luego mostrar: la cantidad de números primos, la cantidad de
// números pares, la cantidad de positivos y la cantidad de negativos.
// . Para resolver
// estos ejercicios vale todo ya… hay que usar TODO lo que aprendimos. Lo que sí… tendrás
// que analizar cuál ejercicio es de corte de control y cuál no…
function ejercicio56() {}

// 57. Se dispone de una lista de 10 grupos de números enteros separados entre ellos
// por ceros. Se pide determinar e informar:
// a. El número de grupo con mayor porcentaje de números impares
// positivos respecto al total de números que forman el grupo.
// b. Para cada grupo, el último número primo y en qué orden apareció en
// ese grupo. Si en un grupo no hubiera números primos, informarlo con
// un cartel aclaratorio.
// c. Informar cuántos grupos están formados por todos números ordenados
// de mayor a menor.
function ejercicio57() {}

// 58. Una compañía de electricidad necesita calcular anualmente el consumo que ha
// registrado cada uno de sus usuarios y el monto pagado por cada uno de ellos.
// Para ello tiene un lote de registros por cada uno de los usuarios con los
// siguientes datos:
// • Zona (numérico entero).
// • Número de cliente (número de cuatro dígitos no correlativos).
// • Cantidad de kilovatios consumidos en el periodo.
// El lote se encuentra agrupado (no ordenado) por zona y finaliza con un registro
// con zona igual a cero.
// Se pide generar un listado con el siguiente formato:
// Zona: XX
// Cantidad de usuarios de la zona: XX
// Total facturado en la zona: XX
// Zona: XX
// Cantidad de usuarios de la zona: XX
// Total facturado en la zona: XX
// El precio es escalonado según la siguiente escala:
// • S  0.10 por kv por los primeros 100 kv de consumo.
// • S  0.12 por kv por el consumo de 101 a 200 kvs.
// • S  0.15 por kv por el consumo de 201 kvs en adelante.
// maxiprograma.com
function ejercicio58() {}

// 59. Hacer un programa para ingresar los valores de los pesos de distintas
// encomiendas que se deben enviar a distintos clientes y que finaliza cuando se
// ingresa un peso negativo. Se deben agrupar las encomiendas en camiones que
// pueden transportar hasta 200 kilos en total.
// Por ejemplo:
// 10, 20, 140, 70, 100, 40, 10, 50, 80, 90, 30, 40, 50, -10.
// Camión 1. Camión 2 Camión 3 Camión 4 Camión 5
// Se pide determinar e informar:
// a. El número de camión y peso total de encomiendas (Camión 1: 170kg,
// Camión 2: 170kg, etc.).
// b. El número de camión que transporta mayor cantidad de encomiendas
// (en el ejemplo anterior sería el camión 3 con 4 encomiendas).
// c. La cantidad de camiones que se terminaron cargando.
function ejercicio59() {}

// 60. Una compañía de turismo aventura registró los paquetes vendidos durante la
// última temporada vacacional. Para cada venta se ingresó:
// • Número de paquete (4 dígitos no correlativos).
// • Cantidad de personas incluidas.
// • Precio por persona.
// • Horas totales de actividades.
// • Tipo de aventura (“M”, Montaña. “T”, Trekking. “R”, Rafting. “B”, Bicicleta.
// “C”, Canopy. “E”, Escalar. “K”, Sky. “S”, Snowboard. “J”, Jumping. “P”,
// Parapente).
// El lote se encuentra no ordenado y agrupado por tipo de aventura y corta con
// número de paquete cero. En el lote no se ingresan registros cuyo tipo de aventura
// no se haya vendido.
// A partir de dichos datos, se solicita informar:
// a. La cantidad de paquetes vendidos de cada tipo de aventura..
// b. La cantidad total de personas que disfrutaron de las aventuras durante la
// temporada.
// c. El total recaudado por cada venta.
// d. La venta con mayor importe de cada tipo de aventura.
// e. El paquete con menos horas incurridas y en qué tipo de actividad fue.
function ejercicio60() {}

// 61. Una empresa registró las compras realizadas a sus distintos proveedores durante
// todo el año anterior. Para cada compra se registraron los siguientes datos:
// • Número de proveedor (número de cuatro cifras no correlativo).
// • Día (1 a 31).
// • Mes (1 a 12).
// maxiprograma.com
// • Tipo de Factura (Responsable inscripto: "A",Consumidor Final: "B", o
// Monotributo: "C").
// • Número de Producto (número no correlativo).
// • Cantidad comprada.
// • Precio unitario del producto.
// Este lote finaliza con un registro con número de proveedor igual a 0.
// Los registros están agrupados por número de proveedor. En el lote anterior no
// aparecen
// registros de los proveedores a los que que no se les hayan realizado compras.
// Se pide determinar e informar:
// a. El monto máximo registrado en una sola compra por cada proveedor y el
// número de proveedor al que se le compró.
// b. La inversión total de todo el año discriminada por tipo de factura.
// c. La compra con menor monto registrada durante el mes de Agosto junto al
// número de producto comprado.
// d. La cantidad de compras que se realizaron a cada proveedor.
// e. El número de producto con mayor cantidad comprada en una sola compra y
// en qué proveedor se compró.
function ejercicio61() {}

// Esta serie de ejercicios, la vamos a resolver de una manera distinta. Hasta ahora solo
// hacíamos UN programa. Ahora vamos a hacer el programa principal por un lado y la función
// que resuelva lo que se pide por otro. Al final de esta guía de dejo un ejemplo. Igual lo vimos
// en el video, repásalo!
// 62. Hacer una función llamada “producto” que reciba dos números enteros y que
// devuelva el producto de ambos. Luego hacer un programa que pida el precio
// de un artículo y la cantidad vendida y muestre por pantalla el monto total a
// pagar. Usar la función.
function ejercicio62() {}

// 63. Hacer una función llamada “mayor” que reciba dos números enteros y
// devuelva el mayor de ellos o cero si son iguales.
function ejercicio63() {}

// 64. Hacer una función llamada “par” que reciba un número entero y devuelva 1 si
// es par o cero si no lo es. Hacer un programa para ingresar 20 números y
// mostrar por pantalla cuántos son pares.
function ejercicio64() {}

// 65. Hacer una función llamada “primo” que reciba un número entero y devuelva 1
// si el número es primo o cero si no lo es. Hacer un programa para ingresar
// números. El lote corta cuando se ingresa un número cero. Informar el
// promedio teniendo en cuenta sólo los números primos.
function ejercicio65() {}

// 66. Hacer una función llamada “pagos” que reciba un monto (float) y una cantidad
// de pagos (entero) y devuelva el monto de cada pago. Hacer un programa para
// ingresar 10 ventas. Para cada venta se conoce el monto y la cantidad de pagos.
// El programa deberá mostrar la cantidad de pagos y el monto del pago para
// cada una de las ventas.
function ejercicio66() {}

// 67. Hacer una función que se llame “sumaResta” que reciba dos números y que
// devuelva la suma Y la resta del primer número con el segundo.
// Nota: recordemos que una función solo puede devolver UN valor por return.
// Cómo podríamos hacer para tener ambos resultados en el main?
function ejercicio67() {}

// 68. Hacer una función de tipo void (porque no va a devolver nada) llamada
// “positivoNegativoCero” que reciba un número por valor y una variable por
// referencia. Que analice el número y escriba variable recibida por referencia
// con:
// a. 1 si el número es positivo.
// b. -1 si el número es negativo.
// c. 0 si el número es cero.
// maxiprograma.com
// Hacer un programa main que permita ingresar 100 números y emitir por
// pantalla cuántos son positivos, cuántos negativos y cuántos cero.
function ejercicio68() {}

// 69. Hacer un programa que permita ingresar una lista de números que corta
// cuando se ingresa un cero. A partir de dichos datos informar:
// a. El mayor de los números pares.
// b. La cantidad de números impares.
// c. El menor de los números primos.
// Hacer uso de las funciones anteriormente desarrolladas.
function ejercicio69() {}

function ejecutarEjercicio() {
  // Obtener el número del ejercicio del campo de entrada
  let numeroEjercicio = document.getElementById("numeroEjercicio").value;
  // Crear el nombre de la función a ejecutar
  let nombreFuncion = "ejercicio" + numeroEjercicio;
  // Verificar si la función existe
  if (typeof window[nombreFuncion] === "function") {
    // Ejecutar la función
    window[nombreFuncion]();
  } else {
    alert("El ejercicio " + numeroEjercicio + " no existe.");
  }
}

function borrarResultado() {
  // Borrar el contenido del contenedor de resultados
  document.getElementById("resultados").innerHTML = "";
}
