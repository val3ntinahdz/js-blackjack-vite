import _ from 'underscore';

// the "Import" keyword let us call functionality from other modules (variables or functions).
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML, disableButton } from './usecases';
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// this module equals the returned value in "crearDeck" function
deck = crearDeck(tipos, especiales);
console.log(deck);

// pedirCarta();
const carta = pedirCarta(deck);
console.log("Carta pedida:", carta);

// valorCarta();
const cardValue = valorCarta(carta);
console.log("card value:", cardValue);


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        disableButton(btnPedir, btnDetener);
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck);

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        disableButton(btnPedir, btnDetener);
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }

});


btnDetener.addEventListener('click', () => {
    disableButton(btnPedir, btnDetener);
    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});