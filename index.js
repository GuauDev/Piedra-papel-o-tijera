var resultado
let jugadorEnLetras
let enemigoEnLetras
const spanResultado = document.getElementById('resultado')
const spanEleccionJugador = document.getElementById('eleccion-jugador')
const spanEleccionEnemigo = document.getElementById('eleccion-enemigo')
const tarjeta = document.getElementById('tarjeta')

function ataqueEnLetras(ataque) {
    if(ataque==1){
        return 'piedra'
    }else if(ataque == 2){
        return 'papel'
    }else if(ataque == 3){
        return 'tijera'
    }
}

function mostrar(jugador,enemigo,resultado){
    tarjeta.style.display = 'flex'
    spanEleccionJugador.innerHTML = jugador
    spanEleccionEnemigo.innerHTML = enemigo
    spanResultado.innerHTML = resultado
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function piedra(){
    combate(1)
}

function papel(){
    combate(2)
}

function tijera(){
    combate(3)
}

function ok() {
    tarjeta.style.display='none'
}

function combate(jugador) {
    let enemigo=aleatorio(1,3)
    jugadorEnLetras=ataqueEnLetras(jugador)
    enemigoEnLetras=ataqueEnLetras(enemigo)
    if(jugador == enemigo){
        resultado='empate'
    }else if(jugador == 1 && enemigo == 3){
        resultado='ganaste'
    }else if (jugador == 2 && enemigo == 1){
        resultado='ganaste'
    }else if (jugador == 3 && enemigo == 2){
        resultado='ganaste'
    }else{
        resultado='perdiste'
    }
    mostrar(jugadorEnLetras, enemigoEnLetras, resultado)
}