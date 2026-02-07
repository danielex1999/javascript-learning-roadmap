# Objetos literales en JavaScript – Operaciones avanzadas

## Eliminar propiedades de un objeto
Asignar `null` **no elimina** una propiedad, solo cambia su valor.

❌ Incorrecto:
```js
personaje.edad = null;
```

✅ Correcto (elimina la propiedad):
```js
delete personaje.edad;
```

- `delete` es una **palabra reservada**.
- Elimina completamente la clave del objeto.

---

## Convertir un objeto en pares clave–valor
Para tratar un objeto como si fuera un arreglo de pares:

```js
const entriesPares = Object.entries(personaje);
console.log(entriesPares);
```

- Retorna un **arreglo**.
- Cada elemento es un arreglo de dos posiciones:
  - `[clave, valor]`
- Muy útil para recorrer propiedades dinámicamente.

---

## Agregar propiedades dinámicamente
Se pueden crear propiedades en tiempo de ejecución:

```js
personaje.casado = true;
```

- La propiedad se agrega al objeto inmediatamente.
- Aparece al imprimir el objeto.

---

## `const` y objetos
Declarar un objeto con `const` **no lo vuelve inmutable**.

```js
const personaje = { nombre: 'Tony Stark' };
personaje.nombre = 'Ironman'; // ✅ permitido
```

❌ Lo que NO se permite:
```js
personaje = {}; // Error
```

### Regla clave
- `const` protege la **referencia**
- No protege las **propiedades internas**

---

## Congelar un objeto: `Object.freeze`
Para evitar modificaciones:

```js
Object.freeze(personaje);
```

Después de esto:
- ❌ No se pueden agregar propiedades
- ❌ No se pueden eliminar propiedades
- ❌ No se pueden modificar valores existentes

```js
personaje.dinero = 1000000; // ignorado
personaje.casado = false;  // ignorado
```

---

## Importante: `freeze` es superficial
`Object.freeze` **NO congela objetos anidados**.

```js
personaje.direccion.ubicacion = 'Costa Rica'; // ✅ permitido
```

Si se requiere bloquear todo:
- Se debe aplicar `Object.freeze` a cada objeto interno.

---

## Obtener las propiedades de un objeto
```js
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);
```

- Retorna un arreglo con los **nombres de las propiedades**
- Respeta el orden de creación

---

## Obtener los valores de un objeto
```js
const valores = Object.values(personaje);
console.log(valores);
```

- Retorna un arreglo con los **valores**
- En el mismo orden que las propiedades

---

## Métodos más usados con objetos

| Método | Descripción |
|------|-------------|
| `delete` | Elimina una propiedad |
| `Object.entries()` | Convierte a pares `[clave, valor]` |
| `Object.freeze()` | Congela el objeto |
| `Object.getOwnPropertyNames()` | Lista de propiedades |
| `Object.values()` | Lista de valores |
