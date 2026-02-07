# Estructuras de control en JavaScript – `if`, `else`, `else if`



## ¿Qué es una estructura de control?
- Permite **alterar el flujo secuencial** de ejecución del código.
- Decide:
  - qué líneas se ejecutan
  - cuáles se omiten
  - bajo qué condiciones
- Ejemplos:
  - ejecutar algo **solo si** se cumple una condición
  - ejecutar una alternativa **si no** se cumple

---

## Primera estructura de control: `if`

```js
let a = 5;

if (a > 10) {
  console.log('A es mayor a 10');
}

console.log('Fin del programa');
```

- El código dentro del `if` solo se ejecuta si la condición es **true**.
- En este caso:
  - `5 > 10` → `false`
  - No entra al `if`

---

## Comparaciones comunes
```js
>   // mayor que
<   // menor que
>=  // mayor o igual
<=  // menor o igual
```

### Ejemplo
```js
if (a >= 10) {
  console.log('A es mayor o igual a 10');
}
```

---

## `if` + `else`
Permite ejecutar un bloque alternativo si la condición no se cumple.

```js
if (a >= 10) {
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}
```

- Se lee como:
  - **Si** se cumple → ejecuta `if`
  - **Si no** → ejecuta `else`

---

## Condiciones booleanas
El `if` **siempre espera un booleano** (`true` o `false`).

```js
if (true)  { ... }
if (false) { ... }
```

> Más adelante se verá lógica booleana con más detalle.

---

## Ejemplo práctico: día de la semana

### Obtener el día actual
```js
const hoy = new Date();
const dia = hoy.getDay();
```

Valores de `getDay()`:
- `0` → domingo
- `1` → lunes
- `2` → martes
- …
- `6` → sábado

---

## Comparaciones: `=`, `==`, `===`

### ❌ Asignación (`=`)
```js
if (dia = 0) { ... }
```

- ❌ **ERROR LÓGICO**
- Asigna el valor
- Retorna el valor asignado
- Puede provocar bugs muy difíciles de detectar

---

### ⚠️ Doble igual (`==`)
```js
if (dia == '0') { ... }
```

- Compara **solo el valor**
- No compara el tipo
- `'0' == 0` → `true`

---

### ✅ Triple igual (`===`) (RECOMENDADO)
```js
if (dia === 0) { ... }
```

- Compara:
  - valor
  - tipo de dato
- `0 === '0'` → `false`

✅ **Usar siempre `===`** para evitar errores.

---

## Ejemplo completo con `if` y `else`
```js
if (dia === 0) {
  console.log('Domingo');
} else {
  console.log('No es domingo');
}
```

---

## Condiciones anidadas (no recomendado)
```js
if (dia === 0) {
  console.log('Domingo');
} else {
  if (dia === 1) {
    console.log('Lunes');
  } else {
    console.log('No es lunes ni domingo');
  }
}
```

- Funciona ✅
- Poco legible ❌
- Difícil de mantener ❌

---

## `else if` (forma correcta)
```js
if (dia === 0) {
  console.log('Domingo');
} else if (dia === 1) {
  console.log('Lunes');
} else if (dia === 2) {
  console.log('Martes');
} else {
  console.log('No es lunes, martes ni domingo');
}
```

✅ Más limpio  
✅ Más legible  
✅ Más fácil de mantener  

---

## Tips importantes
- ✅ Usar siempre `===`
- ❌ Nunca usar `=` en condiciones
- ❌ Evitar `if` anidados innecesarios
- ✅ Preferir `else if`
- ✅ Usar `console.log(condición)` para depurar

---

## Resumen
- `if` decide si un bloque se ejecuta
- `else` cubre el caso contrario
- `else if` permite múltiples condiciones
- `===` evita errores por conversión de tipos
- Las estructuras de control son la base de la lógica en JavaScript

