/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta;
	var titular;
	var lugar;
	var temporada;
	var cantidadDePersonas;
	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var banderaTitular = true;
	var titularConMasPersonas;
	var acumuladorMasPersonas;
	var contadorInvierno = 0;
	var acumuladorPersonasInvierno = 0;
	var promedioInvierno;

	do {

		do {
			titular = prompt('Ingrese el nombre del titular');
		}while (titular == false || !(isNaN(titular)));

		do {
			lugar = prompt('Ingrese destino del viaje: bariloche, cataratas o salta');
		} while (lugar != 'bariloche' && lugar != 'cataratas' && lugar != 'salta');
		
		do {
			temporada = prompt('Ingrese la temporada a vacacionar: otoño, invierno, verano o primavera');
		}while(temporada != 'otoño' && temporada != 'invierno' && temporada != 'verano' && temporada != 'primavera');
		
		do{
			cantidadDePersonas = parseInt(prompt('Ingrese la cantidad de personas que van'))
		} while (isNaN(cantidadDePersonas) || cantidadDePersonas < 0);

		//A
		switch (lugar) {
			case 'bariloche':
				contadorBariloche++;
				break;
			case 'cataratas':
				contadorCataratas++;
				break;
			case 'salta':
				contadorSalta++;
				break;
		}
		
		//B
		if (banderaTitular == true){
			banderaTitular = false;
			titularConMasPersonas =	titular;
			acumuladorMasPersonas = cantidadDePersonas;
		} else {
			if (acumuladorMasPersonas < cantidadDePersonas) {
				titularConMasPersonas =	titular;
				acumuladorMasPersonas = cantidadDePersonas;
			}
		}
		//C
		if (temporada == 'invierno'){
			acumuladorPersonasInvierno += cantidadDePersonas;
			contadorInvierno++;
		}


		respuesta = confirm('Desea seguir ingresando datos?');
	}while (respuesta == true);

	//A
	if (contadorBariloche >= contadorCataratas && contadorBariloche >= contadorSalta){
		console.log ('El lugar mas elegido es Bariloche con: ' + contadorBariloche + ' personas que la eligieron');
	} else if (contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
		console.log ('El lugar mas elegido es Cataratas con: ' + contadorCataratas + ' personas que la eligieron');
	} else {
		console.log ('El lugar mas elegido es Salta con : ' + contadorSalta + ' personas que la eligieron');
	}

	//B
	console.log ('El nombre del titular que lleva mas personas es: ' + titularConMasPersonas + ' con un total de ' + acumuladorMasPersonas + ' cantidad de personas');

	//C
	promedioInvierno = acumuladorPersonasInvierno / contadorInvierno;
	if (contadorInvierno == 0){ 
		console.log('Nadie viaja en invierno');
	} else {
		console.log('El promedio de personas que viaja en Invierno es: ' + promedioInvierno);
	}
}
