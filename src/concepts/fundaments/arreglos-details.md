# Arreglos en JavaScript – Propiedades y métodos básicos

## Arreglo base
```js
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
```

---

## Propiedad `length`
- Indica cuántos elementos tiene el arreglo.

```js
console.log('Largo:', juegos.length);
```

- Resultado: `4`
- Importante:
  - `length` **no es un método**
  - No lleva paréntesis

---

## Primer y último elemento

### Primer elemento
```js
let primero = juegos[0];
```

### Último elemento (dinámico)
```js
let ultimo = juegos[juegos.length - 1];
```

- Útil cuando el arreglo cambia de tamaño.

```js
console.log({ primero, ultimo });
```

---

## Recorrer un arreglo con `forEach`
```js
juegos.forEach((elemento, indice, arreglo) => {
  console.log(elemento, indice, arreglo);
});
```

- `forEach` ejecuta una función por cada elemento.
- Parámetros:
  - `elemento`: valor actual
  - `indice`: posición
  - `arreglo`: arreglo completo

---

## Agregar elementos

### `push` – agregar al final
```js
let nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);
```

- Agrega al final del arreglo.
- Retorna la nueva longitud.

### `unshift` – agregar al inicio
```js
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log(nuevaLongitud, juegos);
```

- Agrega al inicio del arreglo.
- Retorna la nueva longitud.

---

## Eliminar elementos

### `pop` – eliminar el último
```js
let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);
```

- Elimina el último elemento.
- Retorna el elemento eliminado.

---

## Eliminar elementos en una posición específica: `splice`
```js
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);

console.log(juegosBorrados, juegos);
```

- Parámetros:
  1. Índice inicial
  2. Cantidad de elementos a borrar
- Retorna un **nuevo arreglo** con los elementos eliminados.
- Modifica el arreglo original.

---

## Buscar la posición de un elemento: `indexOf`
```js
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);
```

- Retorna el índice si lo encuentra.
- Retorna `-1` si **no existe**.

### Importante
- Es **case sensitive**:
```js
juegos.indexOf('metroid'); // -1
```

---

## Nota importante: referencia
- Algunos métodos:
  - **modifican el arreglo original** (`push`, `pop`, `shift`, `unshift`, `splice`)
- En consola, los arreglos pueden parecer inconsistentes si se imprimen como referencia.
- El tema de **paso por valor vs referencia** se verá más adelante.

---

## Resumen de métodos vistos

| Método     | Qué hace                              | Modifica arreglo |
|------------|---------------------------------------|------------------|
| `length`   | Tamaño del arreglo                    | ❌ No            |
| `forEach`  | Recorre el arreglo                    | ❌ No            |
| `push`     | Agrega al final                       | ✅ Sí            |
| `unshift`  | Agrega al inicio                      | ✅ Sí            |
| `pop`      | Elimina el último                     | ✅ Sí            |
| `splice`   | Elimina elementos por posición        | ✅ Sí            |
| `indexOf`  | Busca índice de un elemento           | ❌ No            |
