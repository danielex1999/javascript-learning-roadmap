# Ciclo `for` en JavaScript

## Datos de ejemplo
```js
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];
```

---

## 1) `for` tradicional
Es el más flexible y explícito. Tiene **tres partes**:
1. Inicialización
2. Condición
3. Incremento

```js
console.warn('for tradicional');

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}
```

### Puntos clave
- `i` inicia en `0` (los arreglos empiezan en 0).
- La condición suele usar `array.length`.
- El incremento (`i++`) evita ciclos infinitos.

---

## 2) `for...in`
Itera sobre los **índices** del arreglo (o claves de un objeto).

```js
console.warn('for in');

for (let i in heroes) {
  console.log(heroes[i]);
}
```

### Cuándo usarlo
- Cuando necesitas el **índice**.
- Es válido para arreglos y objetos.

> Nota: En arreglos, hoy se prefiere `for...of` para valores.

---

## 3) `for...of`
Itera directamente sobre los **valores** del arreglo.

```js
console.warn('for of');

for (let heroe of heroes) {
  console.log(heroe);
}
```

### Ventajas
- Código más limpio y legible.
- No necesitas manejar índices manualmente.
- Ideal cuando solo te importan los **valores**.

---

## Scope y `let`
```js
for (let i = 0; i < heroes.length; i++) {
  // i solo existe aquí
}
// console.log(i); // ❌ Error: i no está definida
```

- Con `let`, la variable vive **solo dentro del ciclo**.
- Evita efectos colaterales (a diferencia de `var`).

---

## Comparación rápida

| Ciclo       | Itera sobre | Cuándo usarlo |
|-------------|-------------|----------------|
| `for`       | Índices     | Control total (saltos, pasos personalizados) |
| `for...in`  | Índices     | Cuando necesitas claves/índices |
| `for...of`  | Valores     | Lectura simple de arreglos |

---

## Buenas prácticas
- ✅ Usa `for...of` para recorrer arreglos cuando solo lees valores.
- ✅ Usa `for` tradicional si necesitas controlar el índice.
- ❌ Evita `var`; usa `let`.
- ✅ Usa `array.length` para no “hardcodear” límites.

---

## Cierre
- El `for` es el ciclo más usado en JavaScript.
- Con `for`, `for...in` y `for...of` cubres la mayoría de casos.
