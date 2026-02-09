const fher = {
    nombre: "Fernando",
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`)
    }
}

const pedro = {
    nombre: "Pedro",
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`)
    }
}

// fher.imprimir();
// pedro.imprimir();

function Persona(nombre,edad){
    this.nombre = nombre,
    this.edad = edad

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`)

    }
}

const maria = new Persona("Maria",10);
maria.imprimir()