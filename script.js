var numeroIngresado;
var max = 10;
var min = 0;
let pick;
let val = 0;
let verificador;
function secretNumber(){
    return Math.floor(min + (max - min) * Math.random());
}
//let play = prompt("Quieres Jugar? (si o no)").toUpperCase();
window.onload = function secretNumber(){}

let numSecreto = secretNumber();
//alert(numSecreto);

//let rem = document.getElementsById("1");

let apretame = document.getElementById("botonEncender");
let hide = document.getElementById("number1");
let rem = document.getElementById("form12");


apretame.addEventListener("click", play);

function play(){
    alert("Debes intentar adivinar el numero secreto del 0 al 9. Tienes 3 intentos");
    rem.remove();
    hide.className = "";

}

let adivina = document.getElementById("guess");


let boton0 = document.getElementById("boton0");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");
let boton8 = document.getElementById("boton8");
let boton9 = document.getElementById("boton9");

//alert(parseInt(boton0.innerText));

//apretame.addEventListener("click", juego);



boton1.addEventListener("click", numero1);
boton2.addEventListener("click", numero2);
boton3.addEventListener("click", numero3);
boton4.addEventListener("click", numero4);
boton5.addEventListener("click", numero5);
boton6.addEventListener("click", numero6);
boton7.addEventListener("click", numero7);
boton8.addEventListener("click", numero8);
boton9.addEventListener("click", numero9);
boton0.addEventListener("click", numero0);
//let intentos = [];


function numero1() {
  
    let numeroIngresado = parseInt(boton1.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}

function numero0() {
  
    let numeroIngresado = parseInt(boton0.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}

function numero2() {
  
    let numeroIngresado = parseInt(boton2.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}
function numero3() {
  
    let numeroIngresado = parseInt(boton3.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}
function numero4() {
  
    let numeroIngresado = parseInt(boton4.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}
function numero5() {
  
    let numeroIngresado = parseInt(boton5.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}
function numero6() {
  
    let numeroIngresado = parseInt(boton6.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}
function numero7() {
  
    let numeroIngresado = parseInt(boton7.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}
function numero8() {
  
    let numeroIngresado = parseInt(boton8.innerText);
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }  
}
function numero9() {
    
    let numeroIngresado = parseInt(boton9.innerText);
   
    if (numeroIngresado == numSecreto) {
        ganadora();
    } else if (numeroIngresado > numSecreto) {
        alert("El numero elegido es mayor al secreto");
        tryies();
    } else if (numeroIngresado < numSecreto) {
        alert("Numero ingresado es menor al secreto");
        tryies();
    }    
    
    }

function ganadora(){
    alert("GANASTE");
}

function tryies(){

     val = val + 1;
    
    if(val>100){
        alert("GANASTE!")
    }else if(val>=3){
        alert("perdiste");
    }else{
        alert("intento " + val + " volve a intentar");
       
    }
    return val;
}


//alert(pick);



