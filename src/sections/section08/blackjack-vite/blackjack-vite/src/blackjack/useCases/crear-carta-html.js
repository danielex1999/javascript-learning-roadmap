/**
 * @param {String} Carta Es un string que representa la carta, ejemplo: '2C', 'JD', 'AH'
 * @returns{HTMLImageElement} Retorna un elemento HTML de tipo imagen con la carta solicitada
 * @description Esta función se encarga de crear el HTML de una carta, recibe como argumento la carta y retorna un elemento HTML de tipo imagen con la carta solicitada
 * Ejemplo: crearCartaHTML('2C') retorna <img class="carta" src="assets/cartas/2C.png">
 * Ejemplo: crearCartaHTML('JD') retorna <img class="carta" src="assets/cartas/JD.png">
 * Ejemplo: crearCartaHTML('AH') retorna <img class="carta" src="assets/cartas/AH.png"> 
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}