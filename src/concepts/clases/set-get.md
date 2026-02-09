# Getters y Setters en clases de JavaScript

## Declarar propiedades: opcional pero útil
Puedes **no declarar** propiedades fuera del constructor y definirlas solo allí. El comportamiento será el mismo.

```js
class Persona {
  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
  }
}
```

Sin embargo, **declararlas explícitamente** es útil cuando:
- la propiedad **no viene del constructor**
- quieres dejar claro el **contrato** de la clase

```js
class Persona {
  comida = ''; // propiedad adicional

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
  }
}
```

---

## ¿Para qué sirven `set` y `get`?
- **`set`**: controla **cómo se asigna** un valor
- **`get`**: controla **cómo se obtiene** un valor
- Se usan como **propiedades**, no como métodos (sin paréntesis)

Casos comunes:
- Validación
- Normalización (mayúsculas, formatos)
- Encapsulación
- Valores calculados

---

## Regla crítica (evitar recursión infinita)
❌ El `set`/`get` **NO** puede usar el mismo nombre de la propiedad interna.  
✅ Usa una propiedad interna distinta (convención: `_propiedad`).

---

## Ejemplo completo

```js
class Persona {
  _comida = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
  }

  // SET
  set comidaFavorita(comida) {
    this._comida = comida.toUpperCase();
  }

  // GET
  get comidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this._comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}
```

### Uso
```js
const spiderman = new Persona(
  'Peter Parker',
  'Spiderman',
  'Soy tu amigable vecino Spiderman'
);

spiderman.comidaFavorita = 'pay de cereza de la tía May'; // SET
console.log(spiderman.comidaFavorita);                    // GET
```

**Salida:**

La comida favorita de Peter Parker es PAY DE CEREZA DE LA TÍA MAY


---

## Importante: no llevan paréntesis
✅ Correcto:
```js
spiderman.comidaFavorita = 'pizza';
console.log(spiderman.comidaFavorita);
```

❌ Incorrecto:
```js
spiderman.comidaFavorita();
```

---

## Error típico: recursión infinita
❌ Incorrecto:
```js
set comidaFavorita(comida) {
  this.comidaFavorita = comida; // loop infinito
}
```

✅ Correcto:
```js
set comidaFavorita(comida) {
  this._comida = comida;
}
```

---

## Advertencia: propiedades dinámicas
JavaScript permite agregar propiedades **en caliente**:

```js
spiderman.nemesis = 'Duende Verde'; // ❌ permitido, pero peligroso
spiderman.comida = 'Duende Verde'; // ❌ sobrescribe sin control
```

- No lanza error
- Rompe encapsulación
- Afecta solo a esa instancia

👉 Las **propiedades privadas (`#`)** solucionan esto (tema posterior).

---

## Buenas prácticas
- ✅ Usar `get`/`set` para controlar acceso
- ✅ Normalizar datos en el `set`
- ✅ Usar propiedades internas (`_prop`)
- ❌ No crear propiedades dinámicas
- ❌ No exponer propiedades internas

---

## Resumen
- `set`: controla asignación
- `get`: controla lectura
- Se usan como propiedades
- Evitan errores y mejoran encapsulación
- Fundamentales en OOP con JavaScript moderno
