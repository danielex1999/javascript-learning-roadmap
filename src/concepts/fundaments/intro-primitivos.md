# Tipos de datos primitivos en JavaScript



## Strings (cadenas de texto)

### Declaración básica
```js
let nombre = 'Peter Parker';
console.log(nombre);
```

- Todo lo que esté entre comillas es un **string**.
- Se puede reasignar el valor:
```js
nombre = 'Ben Parker';
```

### Error común: redeclarar con `let`
```js
let nombre = 'Peter Parker';
let nombre = 'Ben Parker'; // ❌ Error
```

- Con `let` **no se puede redeclarar** la misma variable.
- JavaScript detecta el error antes de ejecutar el código.

> Con `var` esto sí era posible, pero es mala práctica.

---

## Formas de declarar strings
```js
let nombre1 = 'Tía May';     // comillas simples
let nombre2 = "Tía May";    // comillas dobles
let nombre3 = `Tía May`;    // backticks
```

- Todas representan strings.
- La elección depende del contexto y preferencias.
- Las comillas simples suelen ser la opción recomendada.

---

## Operador `typeof`
- Permite saber el tipo de dato de una variable:
```js
console.log(typeof nombre);
```

### Cambio de tipo (tipado débil)
```js
nombre = 123;
console.log(typeof nombre); // number
```

- JavaScript infiere el tipo según el valor asignado.
- Una misma variable puede cambiar de tipo.

---

## Booleanos
```js
let esMarvel = true;
let esDC = false;
```

- Solo aceptan:
  - `true`
  - `false`
- Siempre en **minúsculas**.

❌ Incorrecto:
```js
let activo = True; // Error
```

```js
console.log(typeof esMarvel); // boolean
```

---

## Números
```js
let edad = 33;
console.log(typeof edad); // number
```

- JavaScript solo tiene **un tipo numérico**.
- No diferencia entre enteros y decimales:
```js
let precio = 33.00001; // sigue siendo number
```

---

## Undefined
```js
let superPoder;
console.log(typeof superPoder); // undefined
```

- Significa:
  - La variable existe
  - Pero no tiene valor asignado

---

## Null
```js
let soyNull = null;
console.log(typeof soyNull); // object
```

- Representa ausencia total de valor.
- `typeof null` devuelve `"object"` (comportamiento histórico).
- Aunque genere confusión, **null se considera un primitivo**.

---

## Symbols
```js
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
```

- Los symbols crean **identificadores únicos**.
- Aunque se creen igual, **nunca son iguales**.

```js
console.log(typeof symbol1); // symbol
console.log(symbol1 === symbol2); // false
```

---

## Resumen de tipos primitivos
JavaScript tiene **6 tipos de datos primitivos**:

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `symbol`

### Características clave
- Son **inmutables**
- No son objetos
- El tipo pertenece al **valor**, no a la variable
- JavaScript infiere el tipo automáticamente

---

## Convención de nombres (Camel Case)
- Estándar en JavaScript:
```js
let superPoderSpiderMan;
```

- Primera palabra en minúscula
- Cada palabra siguiente inicia con mayúscula
- Mejora la legibilidad del código
