let numeroLimite = 10;
let intentos = 0;
let limiteIntentos = 3;
let numeroSecreto = 0;
let listaNumeros = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroLimite) + 1;
  if(listaNumeros.length == numeroLimite){
    listaNumeros = [];
  }
  if (listaNumeros.includes(numeroGenerado)){
    return generarNumeroSecreto();
  }else{
    listaNumeros.push(numeroGenerado)
    return numeroGenerado;
  }
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.querySelector("input").value);
  console.log(listaNumeros)
  limpiarInput()
    
    if (numeroUsuario == numeroSecreto) {
      asignarTextoElemento(
        "p",
        `Usted acertó en ${intentos} ${
          intentos === 1 ? "vez" : "veces"
        }, el número secreto era ${numeroSecreto}`
      );
      document.getElementById('intentar').setAttribute('disabled', 'true');
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(intentos === limiteIntentos){
        asignarTextoElemento(
          "p",
          `Usted perdió todos los intentos, el número secreto era ${numeroSecreto}`
        );
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
      }

      if (numeroUsuario > numeroSecreto && intentos != limiteIntentos) {
        asignarTextoElemento(
          "p",
          `Usted no acertó, le número secreto es menor, le quedan ${
            limiteIntentos - intentos
          } ${intentos == limiteIntentos - 1 ? "intento" : "intentos"}`
        );
      } else if (numeroUsuario < numeroSecreto && intentos != limiteIntentos) {
        asignarTextoElemento(
          "p",
          `Usted no acertó, el número secreto es mayor, le quedan ${
            limiteIntentos - intentos
          } ${intentos == limiteIntentos - 1 ? "intento" : "intentos"}`
        );
      }
      intentos++;
      console.log(intentos)
    
    return;
}

function limpiarInput() {
  document.querySelector("input").value = "";
  return;
}

function inicianNuevoJuego(){
    condicionesIniciales()
}

function condicionesIniciales(){
intentos = 1;
numeroSecreto = generarNumeroSecreto();
document.getElementById('reiniciar').setAttribute('disabled', 'true')
asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Ingresa un número del 1 al 10");
document.getElementById('intentar').removeAttribute('disabled');
}

condicionesIniciales()
console.log(numeroSecreto);