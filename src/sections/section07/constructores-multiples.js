class Persona{

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = "Daniel",
      apellido1 = "Cavero",
      pais1 = "Peru";


const mica = {
    nombre: "Micaela",
    apellido: "Macedo",
    pais: "Peru"
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(mica);

persona1.getInfo();      
persona2.getInfo();