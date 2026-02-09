class Persona {

    static _conteo=0
    static get conteo(){
        return Persona._conteo+ ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log("Soy metodo estatico");
    }

    nombre = "";
    codigo = "";
    frase = "";
    comida="";

    constructor(nombre = "Sin nombre", codigo = "Sin codigo", frase = "Sin frase") {
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida= comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }
    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

const spiderman = new Persona("Peter Parker", "Spider-man", "Soy tu amigable vecino Spiderman");
const ironman = new Persona("Tony Stark", "Iron Man", "Yo soy Ironman");


// console.log(ironman)

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = "pizza"
spiderman.nemesis="Duende Verde"

console.log(spiderman.getComidaFavorita)

console.log(spiderman)


//Persona._conteo = 2
console.log('Conteo statico: ', Persona._conteo)
console.log('Las instancias: ', Persona.conteo)


console.log(Persona.mensaje());