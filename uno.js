/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contador = 0;
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var contadorMasculino = 0;
	var contadorFemenino = 0;
	var acumuladorEdad = 0;
	var contadorAmbosSexos = 0;
	var promedioEdad;
	var temperaturaMaximaF = 0;
	var nombresTemperaturaMaximaF;
	var banderaTemperatura = true;

	do {
		do {
			nombre = prompt('Ingrese su nombre')
		} while (!(isNaN(nombre)) || nombre == false);
		
		do {
			temperatura = parseInt(prompt('Ingrese temperatura corporal'));
		} while (isNaN(temperatura) || temperatura < 0);

		do {
			sexo = prompt('Ingrese F o M segun su sexo.'); 
		} while (sexo !='F' && sexo != 'M');

		do {
			edad = parseInt(prompt('Ingrese su edad'));
		} while (isNaN(edad) || edad < 0);

		//A
		switch (sexo) {
			case 'F':
				contadorFemenino++;
				break;
			default:
				contadorMasculino++;
				break;
		}
		//B
		acumuladorEdad += edad;
		
		//C
		if (sexo == 'F' && banderaTemperatura == true){
			temperaturaMaximaF = temperatura;
			nombresTemperaturaMaximaF = nombre;
			banderaTemperatura = false;
		} else {
			if (temperatura > temperaturaMaximaF && sexo == 'F') {
				temperaturaMaximaF = temperatura;
				nombresTemperaturaMaximaF = nombre;
			}
		}

		contador++;
	} while (contador < 5);

	//A
	if (contadorFemenino == 0) {
		console.log('No hay personas de sexo femenino');
	} else {
		console.log('La cantidad de mujeres es: ' +contadorFemenino);
	}
	if(contadorMasculino == 0){
		console.log ('No hay personas de sexo masculino');
	} else {
		console.log('La cantidad de hombres es: ' + contadorMasculino);
	}
	//B
	contadorAmbosSexos = contadorFemenino + contadorMasculino;
	promedioEdad = acumuladorEdad / contadorAmbosSexos;
	console.log ('La edad promedio es: ' + promedioEdad);
	//C
	if (temperaturaMaximaF == 0) {
		console.log ('No hay mujeres para tomar la temperatura maxima');
	} else {
		console.log ('La temperatura maxima de mujeres se llama ' + nombresTemperaturaMaximaF + ' con una temperatura de (' + temperaturaMaximaF + 'º)');
	}
}
