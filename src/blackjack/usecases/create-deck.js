import _ from 'underscore';

// the "export" keyword labels variables or functions to make them available outside the current module.


// This comments were added with the "better comments" extension to help us identify what kind of
// objects our arguments are. 
/**
 * This function creates a new deck
 * @param {Array<String>} tiposDeCarta example: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales example: ['A','J','Q','K'];
 * @returns {Array<String>} // returns a new card deck
 */
const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('tiposDeCarta es obligatorio como arreglo de strings');
    if (!tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio como arreglo de strings');

    let deck = []; // initialize deck

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

export default crearDeck;