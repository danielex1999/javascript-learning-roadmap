 let a = 8

 if(a >= 10){
    console.log("A es mayor o igual a 10");
 }else{
        console.log("A es menor a 10");

 }

// console.log("Fin del Programa")

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia})

if( dia === 0){
    console.log("Domingo")
}else{
    console.log("No es Domingo")
}


//Laboratorio
dia= 8
const dayWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

console.log(dayWeek[dia]||"Dia no definido")