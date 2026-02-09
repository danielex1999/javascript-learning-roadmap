# Patrón Módulo en JavaScript (IIFE)

## ¿Qué es el patrón módulo?
- Es el **patrón de diseño más común en JavaScript**.
- Funciona desde versiones muy antiguas del lenguaje.
- Proporciona:
  - **Encapsulación** (scope privado)
  - **Protección del código**
  - **Evitar contaminación del objeto global (`window`)**

La idea clave es **encerrar todo el código dentro de una función autoejecutada**.

---

## IIFE: función anónima autoejecutada
Existen dos formas equivalentes.

### Forma clásica
```js
(function () {
  // código privado
})();
```

### Con función de flecha
```js
(() => {
  // código privado
})();
```

- Ambas crean un **scope aislado**.
- No dejan referencias accesibles desde fuera.

---

## Ejemplo básico
```js
(() => {
  const personajes = ['Ana', 'Mercy', 'Mei'];
  console.log(personajes);
})();
```

✅ Se ejecuta automáticamente  
✅ `personajes` **no existe** en la consola global

```js
personajes; // ❌ ReferenceError
```

---

## Encapsulación real
- El código vive en memoria **sin nombre público**
- No se puede:
  - modificar desde la consola
  - inspeccionar fácilmente
  - reutilizar sin una interfaz explícita

Esto es exactamente lo que buscamos para proteger lógica interna.

---

## Modo estricto (`'use strict'`)
Recomendado dentro del módulo.

```js
(() => {
  'use strict';

  personajes = ['Ana', 'Mercy', 'Mei']; // ❌ Error
})();
```

Con `use strict`:
- No se permiten variables sin declarar
- Se detectan errores comunes más temprano
- Código más seguro y predecible

✅ Solución correcta:
```js
(() => {
  'use strict';

  const personajes = ['Ana', 'Mercy', 'Mei'];
})();
```

> Recomendación: **usar siempre `use strict` dentro del módulo**

---

## Aplicación al proyecto
1. Tomar **todo el código** del archivo (juego).
2. Envolverlo dentro del módulo:

```js
(() => {
  'use strict';

  // TODO el código del juego aquí dentro
})();
```

3. Ajustar la tabulación (opcional pero recomendado).
4. Guardar y recargar.

---

## Resultado
- ✅ La aplicación sigue funcionando igual.
- ✅ Variables como `deck` ya **no están en `window`**.
- ✅ El usuario no puede:
  - ver el deck
  - manipular cartas
  - predecir la siguiente jugada

Esto es **protección real del código**.
