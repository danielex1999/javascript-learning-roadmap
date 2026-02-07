# Palabras reservadas y nombres de variables en JavaScript


## Buenas prácticas para nombres de archivos
- Usar **solo minúsculas**.
- Separar palabras con **guiones (`-`)**.
- ❌ Evitar:
  - espacios
  - mayúsculas
  - caracteres especiales (`ñ`, acentos, símbolos)

### ¿Por qué?
- La mayoría de servidores usan **Linux**, que es **case sensitive**.
- Un archivo `Palabras-Reservadas.js` ≠ `palabras-reservadas.js`.
- En producción puede fallar aunque en desarrollo funcione.

✅ Recomendado:
```
palabras-reservadas.js
```

---

## ¿Qué son las palabras reservadas?
- Son palabras con un **significado especial** en JavaScript.
- Están reservadas para la sintaxis del lenguaje.
- Usarlas como nombres de variables:
  - genera errores
  - o malas prácticas

### Ejemplo inválido
```js
const = 123; // ❌ Error de sintaxis
```

### Ejemplo válido
```js
constante = 123; // ✅ válido
```

---

## Cómo identificar palabras reservadas
- El editor de código suele resaltarlas con otro color:
  - `if`
  - `for`
  - `while`
  - `class`
  - `const`
  - `let`
- Algunas palabras no dan error inmediato, pero **no deben usarse**.

### Ejemplo problemático
```js
let enum = 123; // ❌ Error (enum es palabra reservada)
```

---

## Herramientas útiles
- Existen sitios web que validan si un nombre es válido en JavaScript.
- Útil cuando no estás seguro si un identificador es permitido.
- El editor de código también ayuda mucho.

---

## Nombres de variables: reglas básicas

### ✅ Permitido
```js
let nombre;
let _contador;
let $elemento;
let objeto123;
```

### ❌ No permitido
```js
let 1nombre;
let precio.99;
let nombre con espacios;
```

---

## Caracteres especiales
- JavaScript permite técnicamente:
```js
let ñ = 10;
let π = 3.14;
```

- ❌ **No recomendado**
  - Problemas de codificación
  - Ambientes internacionales
  - Dificultad de lectura y mantenimiento

✅ Usar solo:
- letras del alfabeto inglés
- números
- `_` (guion bajo)
- `$` (símbolo de dólar)

---

## Convenciones de nombres (Naming conventions)

### Variables y funciones
- **lowerCamelCase**
```js
let nombreCompleto;
let superPoderSpiderMan;
```

### Clases
- **UpperCamelCase (PascalCase)**
```js
class JuegoAnual {}
```

---

## Uso del guion bajo (`_`)
- Permitido como primer carácter.
- Útil para:
  - separar números
  - convenciones internas
```js
let precio_99_99;
```

---

## Uso del símbolo `$`
- Totalmente válido en JavaScript.
- Muy usado en librerías (ej. jQuery).
```js
let $boton;
let $formulario;
```

- No significa nada especial por sí mismo.

---

## Importancia semántica
- JavaScript no se preocupa por el nombre de la variable.
- **Los humanos sí**.

❌ Malo:
```js
let x = 'Fernando';
```

✅ Bueno:
```js
let nombreUsuario = 'Fernando';
```

- El nombre debe describir claramente el propósito de la variable.

---

## Resumen
- Evitar palabras reservadas.
- Usar nombres claros y descriptivos.
- Seguir convenciones:
  - lowerCamelCase para variables
  - UpperCamelCase para clases
- Evitar caracteres especiales y mayúsculas en archivos.
- Priorizar legibilidad y mantenimiento.

👉 Con la práctica, elegir buenos nombres se vuelve natural.
