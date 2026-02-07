
const heroes =["Hulk","Thor","Loki","Zeus"]

console.warn("For (Tradicional");

for (let i=0;i<=heroes.length-1;i++){
    console.log(heroes[i]);
}

console.warn("For (In)");

for (let i in heroes){
    console.log(heroes[i])
}

console.warn("For (Of)");

for (let i of heroes){
    console.log(i)
}