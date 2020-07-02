var numeroIngresado;
var max = 10;
var min = 0;
//let play = prompt("Quieres Jugar? (si o no)").toUpperCase();

let apretame = document.getElementById("botonEncender");
let adivina = document.getElementById("guess");
let guess1 = document.getElementsById("boton0");
let guess2 = document.getElementsById("boton1");
let guess3 = document.getElementsById("boton2");
let guess4 = document.getElementsById("boton3");
let guess5 = document.getElementsById("boton4");
let guess6 = document.getElementsById("boton5");
let guess7 = document.getElementsById("boton6");
let guess8 = document.getElementsById("boton7");
let guess9 = document.getElementsById("boton8");
let guess0 = document.getElementsById("boton9");


apretame.addEventListener("click", juego);
boton0.addEventListener("click", numero0);
boton1.addEventListener("click", numero1);
boton2.addEventListener("click", numero2);
boton3.addEventListener("click", numero3);
boton4.addEventListener("click", numero4);
boton5.addEventListener("click", numero5);
boton6.addEventListener("click", numero6);
boton7.addEventListener("click", numero7);
boton8.addEventListener("click", numero8);
boton9.addEventListener("click", numero9);

function numero0() {
    let pick = 0;
    return pick;
}
function numero1() {
    let pick = 1;
    return pick;
}

function numero2() {
    let pick = 2;
    return pick;
} function numero3() {
    let pick = 3;
    return pick;
} function numero4() {
    let pick = 4;
    return pick;
} function numero5() {
    let pick = 5;
    return pick;
} function numero6() {
    let pick = 6;
    return pick;
} function numero7() {
    let pick = 7;
    return pick;
} function numero8() {
    let pick = 8;
    return pick;
} function numero9() {
    let pick = 9;
    return pick;
}

function juego() {
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

        //numeroIngresado = validarTodo(min, max);
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
    if (verificador == 0) {
        alert("ja perdiste");
    }
}
