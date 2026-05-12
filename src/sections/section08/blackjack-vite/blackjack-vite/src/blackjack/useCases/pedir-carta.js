
/**
 * Este archivo se encarga de tomar una carta del deck
 * @param {Array<String>} deck Es un arreglo de string que representa el deck de cartas
 * @return {String} Retorna la carta tomada del deck
 * @throws {Error} Si el deck esta vacio lanza un error
 * */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) throw new Error('El deck esta vacio');

    const carta = deck.pop();
    return carta;
}