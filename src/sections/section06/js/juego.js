const miModulo = (() => {
    "use strict"

    let deck         = []
    const tipos      = ["C", "D", "H", "S"],
          especiales = ["A", "J", "Q", "K"];

    let puntosJugadores=[];

    //Referencias del HTML
    const   btnPedirCarta   = document.querySelector("#pedirCarta"),
            btnDetener      = document.querySelector("#detener"),
            btnNewGame      = document.querySelector("#nuevoJuego");

    

    const   divCartasJugadores  = document.querySelectorAll(".divCartas"),
            puntosHTML          = document.querySelectorAll("small");

    //Esta Función inicializa el juego
    const inicializarJuego = (numJugadores = 2) =>{
        deck = crearDeck();

        puntosJugadores = [];
        for(let i=0;i< numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = "");

        btnPedirCarta.disabled   = false;
        btnDetener.disabled = false;
    }

    // Esta función crea un nuevo deck
    const crearDeck = () => {

        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo)
            }
        }
        return _.shuffle(deck);
    }


    //Tomar carta
    const pedirCarta = () => {
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }


    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? ({ A: 14, K: 13, Q: 12, J: 11 })[valor] : valor * 1;
    }

    //Turno: 0 = primer Jugador y el último sera la computadora
    const acumularPuntos= (carta,turno) =>{
            puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
            puntosHTML[turno].innerHTML = puntosJugadores[turno];
            return puntosJugadores[turno]
    }

    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement("img");
        imgCarta.src = `/src/cartas/${carta}.png`;
        imgCarta.classList.add("carta")
        divCartasJugadores[turno].append(imgCarta)
    }

    const determinarGanador = () =>{
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert("Nadie Gana")
            } else if (puntosMinimos > 21) {
                alert("Computadora Gana")
            } else if (puntosComputadora > 21) {
                alert("Jugador Gana")
            } else {
                alert("Computadora Gana")
            }
        }, 1000);

    }

    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1)
            crearCarta(carta,puntosJugadores.length-1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
    }

    //Eventos
    btnPedirCarta.addEventListener("click", () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta,0) 

        crearCarta(carta,0)

        if (puntosJugador > 21) {
            btnPedirCarta.disabled = true
            btnDetener.disabled = true
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            btnPedirCarta.disabled = true
            btnDetener.disabled = true
            turnoComputadora(puntosJugador)
        }
    })

    btnDetener.addEventListener("click", () => {
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0])
    })

    btnNewGame.addEventListener("click", () => {
        inicializarJuego();
    })
})();



