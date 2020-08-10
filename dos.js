/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar()
{
  var respuesta;
  var marca;
  var precio;
  var peso;
  var tipo;
  var acumuladorPeso = 0;
  var banderaLiquidos = true;
  var liquidoMasCaro;
  var marcaLiquidoMasCaro;
  var banderaSolidos = true;
  var solidoMasLiviano;
  var marcaSolidoMasLiviano;
  
  do {

    do {
      marca = prompt('Ingrese la marca');
    } while (marca == false);

    do {
      precio = parseInt(prompt('Ingrese el precio'));
    } while (isNaN(precio) || precio < 0);

    do {
      peso = parseInt(prompt('Ingrese el peso en kilogramos'));
    }while (isNaN(peso) || peso < 0);

    do {
      tipo = prompt('Ingrese liquido o solido');
    }while(tipo != 'liquido' && tipo != 'solido');
    
    //A
    acumuladorPeso += peso;
    //B
    if (tipo == 'liquido'){
      if (banderaLiquidos == true) {
        banderaLiquidos = false;
        liquidoMasCaro = precio;
        marcaLiquidoMasCaro = marca;
      } else {
        if (precio > liquidoMasCaro) {
          liquidoMasCaro = precio;
          marcaLiquidoMasCaro = marca;
        }
      }
    }
    //C
    if (tipo == 'solido'){
      if (banderaSolidos == true){
        banderaSolidos = false;
        solidoMasLiviano = peso;
        marcaSolidoMasLiviano = marca;
      } else {
        if (solidoMasLiviano > peso){
          solidoMasLiviano = peso;
          marcaSolidoMasLiviano = marca;
        }
      }
    }

    respuesta = confirm('Desea seguir ingresando datos?');
  } while (respuesta == true)

  //A
  console.log ('El peso total de la compra es: ' + acumuladorPeso + ' kg');
  //B
  if (banderaLiquidos == true) {
    console.log ('No se compraron liquidos');
  } else {
    console.log ('La marca del liquido mas caro: ' + marcaLiquidoMasCaro + ' con un precio de ' + liquidoMasCaro + '$')
  }
  //C
  if(banderaSolidos == true){
    console.log ('No se compraron solidos');
  } else {
    console.log ('La marca del solido mas liviano es: ' + marcaSolidoMasLiviano + ' con un peso de: ' + solidoMasLiviano + 'kg');
  }
}
