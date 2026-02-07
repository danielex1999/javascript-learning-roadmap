# Arreglos en JavaScript – Introducción y uso básico

## ¿Qué es un arreglo?
- Un arreglo es una **colección de elementos**.
- Se parece a una lista (ej. lista del supermercado).
- En JavaScript, los arreglos son **objetos especiales**.
- Se identifican por **llaves cuadradas `[]`**.
- Los índices **empiezan en 0**.

---

## Crear arreglos

### Forma poco común
```js
const arr = new Array(10);
console.log(arr);
```
- Crea un arreglo con **10 espacios vacíos**.
- `length` es 10.
- Existe, pero **no es la forma recomendada**.

### Forma recomendada
```js
const arr = [];
console.log(arr);
```
- Arreglo vacío.
- `length` es 0.

---

## Arreglo con datos
```js
const videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videojuegos });
```

- Contiene 3 strings.
- Al desplegarlo en consola se ven sus índices:
  - `0 → Mario 3`
  - `1 → Megaman`
  - `2 → Chrono Trigger`

---

## Acceder a un elemento por índice
```js
console.log(videojuegos[0]); // Mario 3
```

- Se usa el índice dentro de `[]`.

---

## Arreglos con distintos tipos de datos
En JavaScript **no es obligatorio** que todos los elementos sean del mismo tipo.

```js
let arregloCosas = [
  true,
  123,
  'Fernando',
  1 + 2
];
```

- El resultado de operaciones se evalúa **antes** de insertarse.
- `1 + 2` se convierte en `3`.

---

## Arreglos con funciones y objetos
```js
let arregloCosas = [
  true,
  123,
  'Fernando',
  function () {},
  () => {},
  { a: 1 }
];
```

- Un arreglo puede contener:
  - booleanos
  - números
  - strings
  - funciones
  - objetos
  - otros arreglos

---

## Arreglos dentro de arreglos (arreglos anidados)
```js
let arregloCosas = [
  true,
  123,
  'Fernando',
  ['Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Goodman']]
];
```

---

## Acceder a arreglos anidados

### Obtener un subarreglo
```js
console.log(arregloCosas[3]);
```

### Obtener un elemento interno
```js
console.log(arregloCosas[3][2]); // Dr. Light
```

### Acceder a niveles más profundos
```js
console.log(arregloCosas[3][3][1]); // Goodman
```

- Cada par de `[]` accede a **un nivel más profundo**.
- La mecánica siempre es la misma:
  1. Acceder al arreglo
  2. Elegir el índice
  3. Repetir si hay más arreglos dentro

---

## Conceptos clave
- Los arreglos:
  - Empiezan en índice `0`
  - Pueden crecer dinámicamente
  - Pueden contener cualquier tipo de dato
- Es posible anidar arreglos dentro de otros arreglos.
- Acceder a datos profundos puede volverse difícil de leer.

---

## Nota importante
- En proyectos reales, **no es ideal** encadenar muchos accesos como:
```js
arreglo[3][3][1]
```
- Más adelante se verán **formas más limpias y seguras** de manejar estructuras complejas.

