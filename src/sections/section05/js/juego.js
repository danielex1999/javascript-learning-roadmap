/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck =[]

const tipos = ["C","D","H","S"];

const especiales = ["A","J","Q","K"];

//Pedir carta en HTML
const btnPedirCarta = document.querySelector("#pedirCarta");

const btnDetener = document.querySelector("#detener");

const btnNewGame = document.querySelector("#nuevoJuego");

const puntosHTML = document.querySelectorAll("small");

const divCartasJugador = document.querySelector("#jugador-cartas");

const divCartasComputadora = document.querySelector("#computadora-cartas");

let puntosJugador=0, puntosComputadora=0;

const crearDeck = () =>{
for (let i=2; i<=10;i++){
    for(let tipo of tipos){
    deck.push(i + tipo);
    }
}
for(let tipo of tipos){
    for(let especial of especiales){
        deck.push(especial + tipo)
    }
}


deck = _.shuffle(deck);
return deck
}

crearDeck()
//Tomar carta
const pedirCarta = () => {

    if(deck.length === 0){
        throw "No hay mas Cartas";
        console.log("???");
    }

    const carta = deck.pop(); 
    // console.log(deck);
    // console.log(carta);
    return carta;
}

//pedirCarta()

const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
    return isNaN(valor) ? ({ A:14, K:13, Q:12, J:11 })[valor] : valor * 1;
}

const turnoComputadora = (puntosMinimos) => {
    do{
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerHTML= puntosComputadora;

        const imgCarta = document.createElement("img");
        imgCarta.src=`/src/cartas/${carta}.png`;
        imgCarta.classList.add("carta")
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    }while((puntosComputadora < puntosMinimos) && (puntosMinimos < 21));

    setTimeout(() => {
       if(puntosComputadora === puntosMinimos){
        alert("Nadie Gana")
    }else if(puntosMinimos > 21){
        alert("Computadora Gana")
    }else if(puntosComputadora > 21){
        alert("Jugador Gana")
    }else{
        alert("Computadora Gana")
    }
}, 1000);

}
            


const valor = valorCarta(pedirCarta());
console.log({valor});

const divBotones = document.querySelector("#divBotones");


btnPedirCarta.addEventListener("click",()=>{
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerHTML = puntosJugador

    const imgCarta = document.createElement("img");
    imgCarta.src=`/src/cartas/${carta}.png`;
    imgCarta.classList.add("carta")

    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn("Perdiste animal")
        btnPedirCarta.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugador);
    }else if(puntosJugador === 21){
        console.warn("Genial")
        btnPedirCarta.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugador)
    }
})

btnDetener.addEventListener("click",()=>{
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador)
})


btnNewGame.addEventListener("click",()=>{
    deck = crearDeck();
    puntosJugador = 0, puntosComputadora= 0;

    puntosHTML[0].innerText=0,puntosHTML[1].innerText=0;

    divCartasComputadora.innerHTML="",divCartasJugador.innerHTML="";

    btnDetener.disabled,btnPedirCarta.disabled;
})