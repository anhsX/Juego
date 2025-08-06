let numeroSecreto;
let intentos;
let listaNumeros = [];
let tope = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos==1) ? ' intento' : ' intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');

    }else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ('p', 'El numero secreto es menor');
        }else {
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        }
        intentos++;
        borrarCaja();}
    return;
}
        
function generarNumeroSecreto(tope){ 
    let numeroGenerado= Math.floor(Math.random()*tope)+1;
    console.log(numeroGenerado);
    console.log(listaNumeros);

    if (listaNumeros.length == tope) {
        asignarTextoElemento('p', 'No quedan numeros por probar');
        return;
    }
    else{
        if(listaNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto(tope, listaNumeros);
        }else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
    }   }
}

function condicionesInciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento ('p', 'Indica un numero del 1 al 10');
    numeroSecreto= generarNumeroSecreto(tope);
    intentos=1;
    return;
}

function borrarCaja(){
    (document.querySelector('#valorUsuario').value)="";
    return;
}

function reiniciarJuego(){
    borrarCaja();
    condicionesInciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


condicionesInciales();