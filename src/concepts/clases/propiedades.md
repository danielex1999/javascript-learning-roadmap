# Propiedades y métodos estáticos en clases de JavaScript

## ¿Qué significa “estático”?
- **Propiedades y métodos estáticos** pertenecen a la **clase**, no a las instancias.
- Se usan **sin crear** un objeto con `new`.
- Se acceden con: `NombreClase.propiedad` o `NombreClase.metodo()`.

---

## Propiedad estática
```js
class Persona {
  static _conteo = 0;

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;

    // Incrementa el conteo cada vez que se crea una instancia
    Persona._conteo++;
  }
}
```

### Claves
- `static` indica que **no vive en la instancia**.
- `_conteo` es solo una convención de nombre (no lo hace privado).

---

## Acceder a una propiedad estática
```js
console.log(Persona._conteo);
```

- ❌ `this._conteo` no aplica en métodos de instancia.
- ✅ `Persona._conteo` accede correctamente.

---

## Getter estático
Permite exponer el valor de forma controlada.

```js
class Persona {
  static _conteo = 0;

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
    Persona._conteo++;
  }

  static get conteo() {
    return `${Persona._conteo} instancias`;
  }
}
```

### Uso
```js
console.log(Persona.conteo);
```

---

## Método estático
```js
class Persona {
  static mensaje() {
    console.log('Hola a todos, soy un método estático');
  }
}
```

### Uso
```js
Persona.mensaje();
```

### Importante
- Los métodos estáticos **no tienen acceso a `this` de instancia**.
- `this` dentro de un método estático hace referencia a la **clase** (según el contexto), no a un objeto creado con `new`.

---

## Error común
```js
static mensaje() {
  console.log(this.nombre); // undefined
}
```

- `nombre` es de la **instancia**, no de la clase.
- En otros lenguajes esto sería error; en JS retorna `undefined`.

---

## Crear instancias y ver el conteo
```js
const spiderman = new Persona('Peter Parker', 'Spiderman', '...');
const ironman   = new Persona('Tony Stark', 'Iron Man', '...');

console.log(Persona.conteo); // "2 instancias"
```

---

## Definir propiedades estáticas fuera de la clase (no recomendado)
```js
Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);
```

- ✅ Es posible en JavaScript.
- ❌ Mala práctica:
  - Rompe la claridad del API
  - No queda documentado en la definición de la clase
- ✅ Preferible definir **todo lo estático dentro de la clase**.

---

## Buenas prácticas
- ✅ Usar `static` para:
  - contadores globales
  - utilidades relacionadas a la clase
  - constantes compartidas
- ✅ Acceder siempre con `NombreClase`
- ❌ No usar estáticos para datos que dependen de una instancia
- ❌ Evitar definir estáticos fuera de la clase

---

## Resumen
- `static` = pertenece a la **clase**
- No requiere `new`
- Ideal para:
  - contadores
  - utilidades
  - información global del tipo
- Mantén los estáticos **dentro** de la clase