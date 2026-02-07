
//function crearPersona(nombre, apellido){
//        return {nombre, apellido}
//}
const crearPersona = (nombre,apellido) => ({nombre, apellido});



const persona = crearPersona("Juan","Cavero");
console.log(persona)


function imprimeArgumentos(){
    console.log(arguments)
}

const imprimeArgumentos2 = (edad,...args) => {
    //console.log({edad,args})
    return args;
}

const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10,true,false,"Daniel","Hola")
console.log({casado,vivo,nombre,saludo})


const {apellido: nuevoApellido} = crearPersona("Juan","Cavero");
console.log({nuevoApellido})


const tony = {
    nombre: "Tony Stark",
    codeName: "IronMan",
    vivo: false,
    //edad: 40,
    trajes: ["Mark I","Mark V", "HulkBuster"],
};

const imprimePropiedades =  ({nombre, codeName,vivo,edad = 15 ,trajes}) => {
    
    
    console.log({nombre}),
    console.log({codeName}),
    console.log({vivo}),
    console.log({edad}),
    console.log({trajes})
}

imprimePropiedades(tony)