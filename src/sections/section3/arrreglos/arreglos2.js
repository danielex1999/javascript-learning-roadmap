let juegos = ["Warframe", "Final Fantasy", "Fallout","Counter Strike"];
console.log('Largo: ', juegos.length);

let first = juegos[0];
let last = juegos[juegos.length-1]

console.log({first, last});

juegos.forEach((elemento,indice,arr) => {
    console.log({elemento,indice,arr})
})

let nuevaLongitud = juegos.push('Rakion');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift("Smite");
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let falloutIndex = juegos.indexOf("Fallout");
console.log({falloutIndex});
