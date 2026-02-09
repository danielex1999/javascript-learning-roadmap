# “Constructores múltiples” en JavaScript (patrón fábrica estática)

## Contexto
En lenguajes como **Java**, es común tener **sobrecarga de constructores** (múltiples constructores con distintas firmas).
En **JavaScript esto NO existe**:  
👉 **una clase solo puede tener un constructor**.

Entonces, ¿cómo logramos un comportamiento similar?  
La solución recomendada es usar **métodos estáticos tipo fábrica**.

---

## Clase base
Creamos una clase sencilla `Persona` con un solo constructor.

```js
class Persona {

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(
      `${this.nombre} ${this.apellido} - ${this.pais}`
    );
  }
}
```

### Uso normal (constructor “clásico”)
```js
const persona1 = new Persona('Melissa', 'Flores', 'Honduras');
persona1.getInfo();
```

---

## El problema
Ahora queremos crear una instancia **a partir de un objeto**:

```js
const fer = {
  nombre: 'Fernando',
  apellido: 'Herrera',
  pais: 'Costa Rica'
};
```

❌ No queremos hacer esto:
```js
new Persona(fer.nombre, fer.apellido, fer.pais);
```

Queremos algo más limpio y flexible.

---

## Solución: método estático tipo fábrica
Creamos un **método estático** que devuelva una nueva instancia.

```js
class Persona {

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  getInfo() {
    console.log(
      `${this.nombre} ${this.apellido} - ${this.pais}`
    );
  }
}
```

---

## Uso del “constructor alternativo”
⚠️ **No lleva `new`**, porque es un método, no un constructor.

```js
const persona2 = Persona.porObjeto(fer);
persona2.getInfo();
```

**Resultado:**

Fernando Herrera - Costa Rica



---

## Qué logramos con esto
✅ Simulamos **múltiples constructores**  
✅ Código más limpio  
✅ API más expresiva  
✅ Ideal para:
- respuestas HTTP
- objetos JSON
- diferentes formatos de entrada

---

## Puedes tener múltiples fábricas
```js
static porJSON(json) {
  const { nombre, apellido, pais } = JSON.parse(json);
  return new Persona(nombre, apellido, pais);
}

static porDefecto() {
  return new Persona('Sin nombre', 'Sin apellido', 'Sin país');
}
```

Uso:
```js
Persona.porDefecto();
Persona.porJSON(jsonString);
```

---

## Buenas prácticas
- ✅ Usar **un solo constructor**
- ✅ Crear **métodos estáticos descriptivos**
- ✅ Nombrar métodos según el origen de los datos
- ❌ No intentar múltiples `constructor()` (da error)

---

## Resumen
- JavaScript **no soporta** sobrecarga de constructores
- La solución correcta es usar **métodos estáticos tipo fábrica**
- Este patrón es:
  - limpio
  - flexible
  - ampliamente usado en JavaScript moderno
