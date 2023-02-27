let numero1;
let numero2;
let resultado;
let opcion;

alert("Bienvenido a la calculadora basica de JS");
do {
    numero1 = parseFloat(prompt("Introduce un numero: "));

    opcion = parseInt(prompt("Selecciona una operacion: \n 1- Suma \n 2- Resta \n 3-multiplicacion \n 4-Division"));

    numero2 = parseFloat(prompt("Introduce un numero: "));
    resultado=obtenerResultado(numero1,numero2,opcion,resultado);
    alert(console.log("El resultado es: " + resultado));
    let confirmar = confirm("Desea hacer otra operacion?");
}while (confirmar);

function obtenerResultado(numero1,numero2,opcion,resultado){

    switch (opcion) {
        case 1:
            resultado = numero1 + numero2;
            break;
        case 2:
            resultado = numero1 - numero2;
            break;

        case 3:
            resultado = numero1 * numero2;
            break;
        case 4:
            if (numero2 != 0) {
                resultado = numero1 / numero2;
                break;
            } else {
                alert(console.log("No se puede dividir por 0"));
            }
        default:
            alert(console.log("La opcion elegida es invalida"));

    }
    if(resultado!=null){
    alert(console.log("El resultado es: " + resultado));
    }
   
} 