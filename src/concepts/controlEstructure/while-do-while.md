# Estructuras cíclicas en JavaScript – `while` y `do while`


## ¿Qué son los ciclos?
- Permiten **repetir un bloque de código** varias veces.
- Se usan cuando:
  - no queremos duplicar código
  - necesitamos procesar listas (arreglos)
  - debemos repetir validaciones

---

## Datos de ejemplo
```js
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
```

---

## Ciclo `while`
- Se ejecuta **mientras la condición sea verdadera**.
- Si la condición es falsa desde el inicio, **no se ejecuta nunca**.

### Sintaxis
```js
let i = 0;

while (i < carros.length) {
  console.log(carros[i]);
  i++;
}
```

**Resultado:**
Ford Mazda Honda Toyota



---

## Condición basada en valor (truthy / falsy)
```js
let i = 0;

while (carros[i]) {
  console.log(carros[i]);
  i++;
}
```

- Cuando `carros[i]` es `undefined`, el ciclo termina.
- Código más limpio y común en JavaScript.

---

## Evitar ciclos infinitos
⚠️ **Error común**: olvidar incrementar la variable de control.

```js
while (true) {
  // ciclo infinito
}
```

✅ Siempre asegúrate de que:
- la condición pueda llegar a ser falsa
- la variable de control cambie

---

## `break`
- Sale completamente del ciclo.

```js
let i = 0;

while (carros[i]) {
  if (i === 1) {
    break;
  }

  console.log(carros[i]);
  i++;
}
```

**Resultado:**
Ford


---

## `continue`
- Salta a la siguiente iteración del ciclo.

```js
let i = 0;

while (carros[i]) {
  if (i === 0) {
    i++;
    continue;
  }

  console.log(carros[i]);
  i++;
}
```

**Resultado:**
Mazda Honda Toyota



⚠️ **Importante**:
- Si usas `continue`, **incrementa antes** la variable
- De lo contrario, creas un ciclo infinito

---

## Ciclo `do while`
- Se ejecuta **al menos una vez**, aunque la condición sea falsa.
- La condición se evalúa **al final**.

### Sintaxis
```js
let j = 0;

do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
```

**Resultado:**
Ford Mazda Honda Toyota



---

## Diferencia clave: `while` vs `do while`

### `while`
```js
let j = 10;

while (carros[j]) {
  console.log(carros[j]);
}
```

**Resultado:**
(no imprime nada)



---

### `do while`
```js
let j = 10;

do {
  console.log(carros[j]);
} while (carros[j]);
```

**Resultado:**
undefined



✅ El bloque se ejecuta **una vez como mínimo**.

---

## ¿Cuándo usar cada uno?

### `while`
✅ Cuando:
- la condición debe cumplirse antes de ejecutar
- no quieres ejecuciones innecesarias

### `do while`
✅ Cuando:
- necesitas ejecutar el código al menos una vez
- validaciones iniciales o menús interactivos

---

## Resumen
- `while`: evalúa antes de ejecutar
- `do while`: ejecuta primero, evalúa después
- `break`: rompe el ciclo
- `continue`: salta a la siguiente iteración
- Cuidado con ciclos infinitos

