var numeroIngresado;
var max = 10;
var min = 0;
let play = prompt("Quieres Jugar? (si o no)").toUpperCase();
if(play != "NO"){

alert("Jugaremos un Juego - Deberas adivinar el numero escondido esta escondido entre " + min + " y " + max);
alert("Estas preparado, tienes 3 intentos!");
function generarNumeroAleatorio(minimo, maximo) {
    return Math.floor(minimo + (maximo - minimo) * Math.random());
}
function validadorNumero(num) {
    var test = Number.isFinite(num);
    return test;
}
function validadorRango(min, max, ingreso) {
    var test = ingreso >= min && ingreso <= max;
    return test;
}
function validarTodo(min, max) {
    
    var ingreso;
    let testRango = 0;
    let testTotal = 0;
    var contador = 0;

    do {

        if (contador > 0) {
            alert("Error en ingreso")
        }
        ingreso = parseInt(prompt("Elija un numero entre " + min + " y " + max));
      
        testNum2 = isNaN(ingreso); // false
        /*alert(testNum2);*/
        if (testNum2 == true) {
            testTotal = 0;
            /*alert("yay");*/
        } else if (ingreso >= min && ingreso <= max) {
            testRango = 1; // true

        } else {
            testRango = 0;
        }

        contador++;
        testTotal = testRango;
        /*alert(testTotal);*/
    } while (testTotal == 0);

    /*alert(ingreso);*/
    return ingreso;
}
/*var check = parseInt(prompt("try me"));
var check2 = check >1;
alert(check);*/
var numeroSecreto = generarNumeroAleatorio(min, max);
/*alert(numeroSecreto);*/
var verificador = 0;
var incorrecto = 0;
do {
    alert("llevas " + incorrecto + " intentos");
    numeroIngresado = validarTodo(min, max);
    incorrecto++;

    if (numeroIngresado > numeroSecreto) {
        alert("El numero elegido es mayor al secreto");
        verificador = 0;
    } else if (numeroIngresado < numeroSecreto) {
        alert("Numero ingresado es menor al secreto");
        verificador = 0;
    } else if (numeroIngresado = numeroSecreto) {
        alert("GANASTE!");
        verificador = 1;
    }

    

} while (verificador == 0 && incorrecto < 3);
if (verificador == 0 ) {
    document.write(" JA - PERDISTE");
}
}else{
    alert("Enjoy the view!");
}

let msj;
msj = document.getElementById("msj");
msj.innerHTML = prompt("Say something nice!, i think caps dont work").toUpperCase();