/**
 * 
 * @param {Array<String>} carta 
 * @returns {<String>}
 */
const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
export default pedirCarta;