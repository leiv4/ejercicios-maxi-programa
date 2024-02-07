// 1. Generalmente	es	la	suma,	pero	ya	la	hicimos	en	el	video!
// 2. Hacer	un	programa	para	solicitar	por	teclado	un	número	y	luego devolver	su
// valor	elevado	al	cubo.
// 1. Generalmente es la suma, pero ya la hicimos en el video!
// 2. Hacer un programa para solicitar por teclado un número y luego devolver su
// valor elevado al cubo.
// Nota:	no	olvides	que	sólo	contamos	con	las	cuatro	operaciones	básicas.

// RECORDATORIO PERSONAL: MODIFICAR EL CÓDIGO PARA QUE CUANDO EL USUARIO INGRESE UN DATO, SE CORROBORE QUE EL DATO INGRESADO SEA EL CORRECTO, DE LO CONTRARIO, PEDIR DE NUEVO EL DATO CORRECTO.
function ejercicio2() {
  let resultadoEjercicio2 = prompt("Ejercicio 2: Ingresa un número por favor");

  let resultadoCubo = resultadoEjercicio2 ** 3;
  // Mostrar resultados en el contenedor
  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 2: El cubo de " +
    resultadoEjercicio2 +
    " es " +
    resultadoCubo +
    "</p>";

  return resultadoCubo;
}
// Llamar a la función al cargar el script
ejercicio2();

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

ejercicio3();
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

ejercicio4();

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
    "<p>Resultado de Ejercicio 5: El sueldo total a cobrar por el empleado es AR$" +
    sueldoTotalEjercicio5 +
    "</p>";
  return sueldoTotalEjercicio5;
}

ejercicio5();
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

ejercicio6();
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

ejercicio7();
// 8. Una	importante	cadena	de	delivery	cuenta	con	una	promoción	por	tiempo
// limitado	en	la	que	otorga	un	15%	de	descuento	sobre	el	total	del	valor	de	la
// compra	realizada.	Hacer	un	programa	para	solicitar	el	monto	total	y	el	mismo
// calcule	y	emita	por	pantalla	el	total	a	cobrar	con	el	descuento	aplicado.

function ejercicio8() {
  let montoTotalEjercicio8 = prompt(
    "Ejercicio 8: Ingresa el monto total de tu compra"
  );
  let descuentoEjercicio8 = montoTotalEjercicio8 * 0.15;
  let montoFinalEjercicio8 = montoTotalEjercicio8 - descuentoEjercicio8;

  document.getElementById("resultados").innerHTML +=
    "<p>Resultado de Ejercicio 8: Gracias por tu compra en éste día tan especial, por lo que te damos un descuento del 15% sobre el total: AR$" +
    montoFinalEjercicio8 +
    "</p>";
}

ejercicio8();
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

ejercicio9();
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

ejercicio10();
