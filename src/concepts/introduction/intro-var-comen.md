# JavaScript – Variables, comentarios y versiones del lenguaje

## Limpieza del código
- No es buena práctica escribir código JavaScript directamente dentro del HTML.
- Se debe eliminar el `<script>` embebido.
- Mantener el archivo `app.js` correctamente importado en el `index.html`.

## Comentarios en JavaScript
- Los comentarios son líneas que JavaScript **ignora al ejecutar**.
- Sirven para documentar el código y dejar notas para el futuro.

### Comentario de una línea
```js
// Este es un comentario
```

- Shortcut en Visual Studio Code:
  - **Windows/Linux:** `Ctrl + /`
  - **macOS:** `Cmd + /`

## ¿Qué es una variable?
- Es un **contenedor de información**.
- Apunta a un espacio en memoria.
- Su valor puede cambiar en el tiempo (excepto las constantes).

## Formas de declarar variables
```js
let a = 10;
var b = 10;
const c = 10;
```

### Diferencias clave
- `let`: forma moderna y recomendada para variables.
- `var`: forma antigua, aún válida por compatibilidad.
- `const`: crea una constante (no se puede reasignar).

### Reasignación
```js
a = 20; // válido
b = 30; // válido
c = 20; // ❌ error: no se puede reasignar una constante
```

- JavaScript mostrará un error claro en la consola.
- Los errores son normales y parte del desarrollo.

## Uso de la consola del navegador
- Se puede inspeccionar el valor de variables escribiendo su nombre en la consola.
```js
a
b
```
- Las variables viven en el objeto global `window`.
- Desde la consola se pueden modificar valores (temporalmente).

## Mala práctica: variables sin declaración
```js
c = 30; // ❌ mala práctica
```
- Siempre se deben declarar con `let`, `var` o `const`.

## Evolución de JavaScript (ECMAScript)
- **1997:** ECMAScript 1 (primer estándar).
- **2009:** ECMAScript 5 (ES5).
- **2015:** ECMAScript 6 (ES6 / ES2015) – gran actualización:
  - `let`, `const`
  - clases
  - mejor manejo de scope
  - mejoras de rendimiento
- Desde 2015: lanzamientos **anuales**.

## ¿Qué versión de JavaScript usar?
- ES6+ es soportado por la mayoría de navegadores modernos.
- Navegadores muy antiguos pueden no soportar algunas características.

### Polyfills
- Código que permite usar características modernas en versiones antiguas de JavaScript.
- Ejemplo: simular clases, arrow functions, etc. en ES5.

## Declaración de múltiples variables
### Forma tradicional
```js
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let x = a + b;
```

### Forma compacta (una sola instrucción)
```js
let a = 10,
    b = 20,
    c = 30,
    d = 40,
    x = a + b;
```

- JavaScript ignora saltos de línea y espacios.
- El código se ejecuta de izquierda a derecha.
- Esta forma es válida y común, pero debe mantenerse legible.

## Uso de `console.log`
```js
console.log(x);
```
- Permite verificar valores durante la ejecución.
- Es una herramienta clave para depuración.

## Buenas prácticas vistas
- Separar HTML y JavaScript.
- Usar `let` y `const` en lugar de `var`.
- No reasignar constantes.
- Declarar siempre las variables.
- Usar la consola para inspeccionar el estado del programa.
- Priorizar código legible.
