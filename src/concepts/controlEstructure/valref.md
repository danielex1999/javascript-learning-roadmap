# Paso por valor vs paso por referencia en JavaScript



## Paso por valor (primitivos)
Los **primitivos** (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`) se pasan **por valor**.

```js
let a = 10;
let b = a;

a = 30;

console.log(a, b); // 30, 10
```

✅ Cada variable tiene **su propio espacio en memoria**.  
Cambiar `a` **no afecta** a `b`.

---

## Paso por referencia (objetos)
Los **objetos** (objetos literales, arreglos, funciones) se pasan **por referencia**.

```js
const juan = { nombre: 'Juan' };
const ana  = juan;

ana.nombre = 'Ana';

console.log(juan, ana);
// Ambos muestran nombre: 'Ana'
```

❗ Ambas variables apuntan **al mismo lugar en memoria**.  
Modificar una, modifica la otra.

---

## Objetos y funciones: el problema clásico
```js
const cambiarNombre = (persona) => {
  persona.nombre = 'Tony';
  return persona;
};

const peter = { nombre: 'Peter' };
const tony  = cambiarNombre(peter);

console.log(peter, tony);
// Ambos quedan con nombre: 'Tony'
```

- El objeto se pasó **por referencia**.
- La función modificó el objeto original.

---

## Solución: romper la referencia (Spread Operator)

### Clonar objetos con spread
```js
const cambiarNombre = (persona) => {
  return {
    ...persona,
    nombre: 'Tony'
  };
};
```

```js
const peter = { nombre: 'Peter' };
const tony  = cambiarNombre(peter);

console.log(peter, tony);
// peter: 'Peter', tony: 'Tony'
```

✅ Se crea un **nuevo objeto** en memoria.  
✅ Se rompe la referencia.

---

## Spread vs REST (diferencia clave)
- **REST**: junta valores → `(...args)` en parámetros.
- **SPREAD**: separa valores → `{ ...obj }`, `[ ...arr ]`.

```js
// REST
const fn = (...args) => args;

// SPREAD
const copia = { ...original };
```

---

## Arreglos y referencia
```js
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas;

otrasFrutas.push('Mango');

console.log(frutas, otrasFrutas);
// Ambos tienen 'Mango'
```

---

## Romper referencia en arreglos

### Opción 1: Spread (recomendada)
```js
const otrasFrutas = [...frutas];
```

### Opción 2: slice()
```js
const otrasFrutas = frutas.slice();
```

Ambas crean un **nuevo arreglo independiente**.

---

## Comparación de rendimiento
```js
console.time('slice');
const a1 = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const a2 = [...frutas];
console.timeEnd('spread');
```

🔎 Observación general:
- `spread` suele ser **ligeramente más rápido** que `slice`
- La diferencia depende del motor y del contexto

---

## Reglas mentales clave
- ✅ **Primitivos → por valor**
- ✅ **Objetos y arreglos → por referencia**
- ✅ Para evitar efectos colaterales:
  - usar **spread** para clonar
- ✅ Especial cuidado al pasar objetos a funciones
