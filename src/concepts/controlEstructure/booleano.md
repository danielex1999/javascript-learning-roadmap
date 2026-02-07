# Lógica booleana en JavaScript – Operadores básicos


## Funciones de apoyo
Para visualizar qué se ejecuta y qué no:

```js
const regresaTrue = () => {
  console.log('Regresa true');
  return true;
};

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
};
```

---

## Operador NOT (`!`)
La **negación** invierte un valor booleano.

```js
console.warn(true);   // true
console.warn(!true);  // false
console.warn(!false); // true
```

### Doble negación
```js
console.warn(!!true);  // true
console.warn(!!false); // false
```

- Convierte cualquier valor a booleano real.
- No se usa frecuentemente, pero es válido.

### NOT con funciones
```js
console.warn(!regresaFalse()); // true
```

- Primero se ejecuta la función.
- Luego se niega su retorno.

---

## Operador AND (`&&`)
Devuelve `true` **solo si todas las condiciones son true**.

```js
console.warn(true && true);   // true
console.warn(true && false);  // false
console.warn(false && true);  // false
```

---

### AND y ejecución condicional (short-circuit)
```js
console.log(regresaFalse() && regresaTrue());
```

Salida:

Regresa false false


- JavaScript **no ejecuta** `regresaTrue()`
- Ya sabe que el resultado será `false`

#### Cambiando el orden
```js
console.log(regresaTrue() && regresaFalse());
```

Salida:

Regresa true Regresa false false



✅ El AND ejecuta **de izquierda a derecha**  
✅ Se detiene al encontrar `false`

---

### Uso común del AND
```js
regresaTrue() && console.log('Se ejecuta');
regresaFalse() && console.log('Nunca se ejecuta');
```

- Muy usado para ejecutar acciones condicionales.
- Evita escribir `if` innecesarios.

---

## Operador OR (`||`)
Devuelve `true` si **al menos una condición es true**.

```js
console.warn(true || false);   // true
console.warn(false || true);   // true
console.warn(false || false);  // false
```

---

### OR y short-circuit
```js
console.log(regresaTrue() || regresaFalse());
```

Salida:

Regresa true true

- No ejecuta `regresaFalse()`
- Ya obtuvo un `true`

#### Caso contrario
```js
console.log(regresaFalse() || regresaTrue());
```

Salida:

Regresa false Regresa true true



---

## Múltiples condiciones

### AND con varias condiciones
```js
console.warn(true && true && true && false); // false
```

- Todas deben ser `true`.

### OR con varias condiciones
```js
console.warn(true || true || true || false); // true
```

- Con que **una** sea `true`, basta.

---

## Reglas mentales importantes
- `!` → invierte el booleano
- `&&` → todo debe ser `true`
- `||` → al menos uno debe ser `true`
- Evaluación:
  - izquierda → derecha
  - **short-circuit**:
    - AND se detiene en `false`
    - OR se detiene en `true`

---

## ¿Por qué esto es importante?
- Base para:
  - `if / else`
  - operadores ternarios
  - validaciones
  - asignaciones condicionales
- Escribir código:
  - más corto
  - más eficiente
  - más expresivo

