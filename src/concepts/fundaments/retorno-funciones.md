# Funciones en JavaScript – Return y valores de retorno

## Retorno vs impresión en consola
- `console.log()` **NO es** el retorno de una función.
- El retorno se define únicamente con la palabra reservada `return`.
- Si una función **no tiene `return` explícito**, retorna:
```js
undefined
```

---

## `return` en funciones
```js
function saludar() {
  return 1;
}
```

### Uso del valor retornado
```js
const retornoSaludar = saludar();
console.log(retornoSaludar); // 1
```

- El valor retornado reemplaza la llamada a la función.
- `return` **finaliza inmediatamente** la ejecución de la función.

```js
function ejemplo() {
  return 10;
  console.log('Nunca se ejecuta');
}
```

---

## Sin `return`
```js
function saludar() {
  console.log('Hola');
}

const resultado = saludar();
console.log(resultado); // undefined
```

---

## Qué se puede retornar
Una función puede retornar **cualquier tipo de dato**:
- números
- strings
- booleanos
- arreglos
- objetos
- funciones

### Ejemplo: retornar un arreglo
```js
function saludar() {
  return [1, 2];
}
```

```js
const retorno = saludar();
console.log(retorno[0], retorno[1]);
```

> JavaScript **no permite** retornar múltiples valores separados por comas.
> Para “retornar varios valores” se usan arreglos u objetos.

---

## Función con lógica real: sumar
```js
function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2)); // 3
```

- `a` y `b` son parámetros.
- El resultado se retorna al lugar donde se llamó la función.

---

## Función de flecha equivalente
```js
const sumarDos = (a, b) => {
  return a + b;
};
```

### Versión resumida (return implícito)
```js
const sumarDos = (a, b) => a + b;
```

- Válido solo cuando:
  - hay **una sola instrucción**
  - esa instrucción es el `return`

---

## Ejemplo con `Math.random`
### Función tradicional
```js
function getAleatorio() {
  return Math.random();
}
```

### Función de flecha
```js
const getAleatorioDos = () => Math.random();
```

```js
console.log(getAleatorioDos());
```

- `Math` es un objeto global.
- `Math.random()` retorna un número entre `0` y `1`.

---

## Puntos clave sobre `return`
- Toda función retorna algo:
  - explícito → valor definido
  - implícito → `undefined`
- `return`:
  - devuelve un valor
  - detiene la ejecución de la función
- Las funciones de flecha permiten:
  - código más corto
  - return implícito
  - mejor legibilidad
