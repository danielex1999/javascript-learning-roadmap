import _ from 'underscore';


/**
    * Esta función crea un nuevo deck
    * @param {Array<String>} tiposDeCartas Ejemplo: ['C', 'D', 'H', 'S']
    * @param {Array<String>} especialesDeCartas Ejemplo: ['A', 'J', 'Q', 'K']
    * @returns {Array<String>} Retorna un nuevo deck de cartas  
*/
export const crearDeck = (tiposDeCartas, especialesDeCartas) => {

    if (!tiposDeCartas || tiposDeCartas.length === 0) throw new Error('Tipos de cartas es obligatorio como un arreglo de string');
    if (!especialesDeCartas || especialesDeCartas.length === 0) throw new Error('Especiales de cartas es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCartas) {
        for (let esp of especialesDeCartas) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);

    return deck;
}