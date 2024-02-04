// 1. Generalmente	es	la	suma,	pero	ya	la	hicimos	en	el	video!
// 2. Hacer	un	programa	para	solicitar	por	teclado	un	número	y	luego devolver	su
// valor	elevado	al	cubo.
// 1. Generalmente es la suma, pero ya la hicimos en el video!
// 2. Hacer un programa para solicitar por teclado un número y luego devolver su
// valor elevado al cubo.
// Nota:	no	olvides	que	sólo	contamos	con	las	cuatro	operaciones	básicas.

function ejercicio2() {
  let resultadoEjercicio2 = prompt("Ejercicio 2: Ingresa un número por favor");

  // Lógica del ejercicio 2
  let resultadoCubo = resultadoEjercicio2 ** 3;

  // Mostrar resultados en el contenedor
  document.getElementById("resultados").innerHTML +=
    "<p>Ejercicio 2: El cubo de " +
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

  let today = new Date();
  let year = today.getFullYear();

  let edad = year - resultadoEjercicio3;

  document.getElementById("resultados").innerHTML +=
    "<p>Ejercicio 3: Tienes " + edad + " años</p>";

  return edad;
}

ejercicio3();
// 4. Hacer	un	programa	que	permita	ingresar	los	kilómetros	existentes	entre	dos
// ciudades	y	la	velocidad	promedio	de	un	vehículo.	Calcular	y	emitir	por	pantalla
// el	tiempo	aproximado	que	demandará	llegar	de	un	punto	a	otro	teniendo	en
// cuenta	los	datos	ingresados.
// 5. Una	casa	de	computación	paga	a	sus	empleados	un	sueldo	fijo	de	ARS15000
// más	una	comisión	del	5%	sobre	el	total	facturado	por	cada	empleado.	Hacer	un
// programa	para	ingresar	el	total	facturado	por	un	empleado	y	que	luego	calcule
// y	emita	por	pantalla	el	sueldo	total	a	cobrar	por	el	mismo.
// 6. Hacer	un	programa	para	ingresar	por	teclado	las	tres	notas	de	exámenes	de	un
// alumno	y	luego	calcule	y	emita	por	pantalla	el	promedio	final.
// 7. Hacer	un	programa	para	ingresar	por	teclado	los	metros	cuadrados	totales	de
// un	predio	y	los	metros	cuadrados	cubiertos;	luego	calcular	y	mostrar	por
// pantalla	el	porcentaje	de	metros	cuadrados	cubiertos	y	el	porcentaje	de
// metros	cuadrados	descubiertos.
// 8. Una	importante	cadena	de	delivery	cuenta	con	una	promoción	por	tiempo
// limitado	en	la	que	otorga	un	15%	de	descuento	sobre	el	total	del	valor	de	la
// compra	realizada.	Hacer	un	programa	para	solicitar	el	monto	total	y	el	mismo
// calcule	y	emita	por	pantalla	el	total	a	cobrar	con	el	descuento	aplicado.
// 9. Una	universidad	desea	conocer	los	porcentajes	de	mujeres	y	hombres	en	las
// carreras	de	ciencias	exactas.	Se	solicita	un	programa	para	cargar	la	cantidad	de
// mujeres	y	la	cantidad	de	hombres	y	que	el	mismo	calcule	y emita	por	pantalla
// los	porcentajes	correspondientes.
// 10. Hacer	un	programa	que	permita	ingresar	por	teclado	dos	números	y	que	luego
// muestre	por	pantalla	la	suma,	la	resta,	la	multiplicación	y	la	división	de	dichos
// números.	Se	deben	mostrar	cuatro	resultados	en	pantalla.	Los	números	deben
// ser	solicitados	una	única	vez.
