import { valorCarta } from "./valor-carta.js";
import { pedirCarta } from "./pedir-carta.js";
import { crearCartaHTML } from "./crear-carta-html.js";

/**
 * @param {Number} puntosMinimos Es el puntaje mínimo que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Es el HTML donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora Es el HTML donde se muestran las cartas de la computadora
 * @param {Array<String>} deck El mazo de cartas
 * @description Esta función se encarga de simular el turno de la computadora   
 */

export const turnoComputadora = (puntosMinimos,puntosHTML,divCartasComputadora,deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!puntosHTML) throw new Error('El elemento HTML para los puntos es necesario');
    if (!divCartasComputadora) throw new Error('El contenedor para las cartas de la computadora es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML  .innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
