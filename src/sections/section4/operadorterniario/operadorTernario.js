const dia = 1
const horaActual = 11;

let horaApertura, mensaje;

// if(dia === 0 || dia === 6){
//     console.log("Fin de Semana");
//     horaApertura = 9;
// }else{
//     console.log("Día de Semana");
//     horaApertura = 11;
// }

horaApertura =  ([0,6].includes(dia)) ? 9: 11;
// if (horaActual >= horaApertura){
//     mensaje="Esta Abierto";
// }else{
//     mensaje=`Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? "Esta abierto" : `Esta cerrado, hoy abrimos a las ${horaApertura}`

console.log({horaApertura,mensaje})