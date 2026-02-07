const personaje = {
    nombre: "Tony Stark",
    codeName: "IronMan",
    vivo: false,
    edad: 40,
    coords: {
        lat:34.034,
        lng:-118.70
    },
    trajes: ["Mark I","Mark V", "HulkBuster"],
    direccion: {
        zip: "10880, 90265",
        ubicacion: "Malibu, California"
    },
    lastMovie: "Infinite war",
};

console.log(personaje)
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje['nombre']);
console.log("Edad:", personaje['edad']);

console.log("Coords:", personaje.coords);
console.log("Lat:", personaje.coords.lat);

console.log("No. Trajes:", personaje.trajes.length);
console.log("Last Traje:", personaje.trajes[personaje.trajes.length-1]);

const x = "vivo"
console.log("Vivo??", personaje[x])

console.log("Ultima Pelicula:", personaje.lastMovie)

//Más Detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;


const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//personaje = true;

Object.freeze(personaje);

personaje.dinero = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion= "Peru";
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);