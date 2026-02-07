# Diferencias entre `var`, `let` y `const` en JavaScript

## Advertencia importante
- A partir de este punto **no se recomienda usar `var`**.
- `var` introduce problemas serios de:
  - colisión de nombres
  - sobreescritura de propiedades globales
  - errores difíciles de detectar

## Problema 1: Contaminación del objeto global `window`
- Las variables declaradas con `var`:
  - Se agregan automáticamente al objeto global `window`.

### Ejemplo peligroso
```js
var outerWidth = 123123;
var outerHeight = 600;
```

- Estas propiedades **ya existen** en `window`.
- Al usar `var`, se sobrescriben valores internos del navegador.
- Resultado:
  - `window.outerWidth` y `window.outerHeight` devuelven valores falsos.
  - El comportamiento del navegador queda alterado.
  - El error es muy difícil de rastrear.

## Solución: `let` y `const`
```js
let outerWidth = 123123;
const outerHeight = 600;
```

- `let` y `const`:
  - **NO sobrescriben** propiedades del objeto `window`.
  - Se mantienen dentro de su propio scope (ámbito).
- Al consultar:
```js
window.outerWidth
window.outerHeight
```
- Se obtienen los valores reales del navegador.

✅ **Conclusión:** `let` y `const` son seguros frente al objeto global.

---

## Problema 2: Hoisting con `var`
- JavaScript:
  - Primero registra variables y funciones.
  - Luego ejecuta el código línea por línea.

### Ejemplo con `var`
```js
console.log(miNuevoNombre);

var miNuevoNombre = 'Fernando Herrera';
```

- No ocurre error de referencia.
- El resultado es:
```
undefined
```

### ¿Por qué?
- `var` es **hoisted** (elevado):
  - JavaScript sabe que la variable existe.
  - Pero aún no tiene valor asignado.
- Esto puede provocar bugs muy difíciles de detectar.

### Ejemplo más peligroso
```js
console.log(miNuevoNombre + ' Jiménez');
```

- Resultado:
```
undefined Jiménez
```

- El programa sigue ejecutándose con datos incorrectos.

---

## Comportamiento correcto con `let` y `const`
```js
console.log(miNuevoNombre);

let miNuevoNombre = 'Fernando Herrera';
```

- Error claro y explícito:
```
Cannot access 'miNuevoNombre' before initialization
```

✅ Ventajas:
- El error es inmediato.
- Indica exactamente el problema.
- Evita resultados incorrectos silenciosos.

---

## Diferencia entre errores
- **No definida**:
  - La variable no existe en ningún lugar.
- **No inicializada**:
  - La variable existe, pero se está usando antes de asignarle valor.

`let` y `const` permiten distinguir claramente ambos casos.

---

## Reglas finales
- ✅ Usar `let` para variables que cambian.
- ✅ Usar `const` para valores que no cambian.
- ❌ Evitar `var` en proyectos modernos.
- ⚠️ Usar `var` solo si se requiere compatibilidad con navegadores muy antiguos.