
const elMayor = (a,b) => (a > b)? a:b;

const tieneMembresia = (miembro) => (miembro) ? "2 Dolares": "10 Dolares"


console.log(elMayor(10,20));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr =[
    "Peter",
    "Tony",
    "Gwen",
    amigo ? "Thor": "Loki",
]

console.log(amigosArr);

const nota =65;

const grado =   nota >=95 ? "A+":
                nota >=90 ? "A-":
                nota >=85 ? "B+":
                nota >=80 ? "B-":
                nota >=75 ? "C-":
                nota >=70 ? "C-": "F";


console.log({nota,grado})