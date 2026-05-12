/**
 * Este archivo se encarga de calcular el valor de una carta
 * @param { String } carta Es un string que representa la carta, ejemplo: '2C', 'JD', 'AH'
 * @return { Number } Retorna el valor de la carta, ejemplo: 2, 10, 11
 * */

export const valorCarta = (carta) => {

    if (!carta) throw new Error('La carta es un argumento obligatorio');

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}