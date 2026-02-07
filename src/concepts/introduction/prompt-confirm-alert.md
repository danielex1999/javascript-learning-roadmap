# Alert, Prompt y Confirm en JavaScript



## Alert
```js
alert('Hola mundo!');
```
- Muestra un mensaje al usuario.
- Es **bloqueante**: detiene la ejecución del programa hasta que el usuario haga clic en **OK**.
- Pertenece al objeto global `window`.

---

## Prompt
```js
let nombre = prompt('¿Cuál es tu nombre?', 'Sin nombre');
```

### Características
- Muestra un cuadro para ingresar información.
- Recibe:
  - Mensaje (string)
  - Valor por defecto (opcional)
- **Bloquea** la ejecución hasta que el usuario responda.
- Retorna:
  - Un **string** con el valor ingresado
  - Un **string vacío** (`''`) si se presiona OK sin escribir nada
  - **null** si el usuario presiona Cancelar

### Casos importantes
```js
// String vacío
''

// Valor escrito
'Fernando'

// Cancelar
null
```

- `''` (string vacío) ≠ `null` ≠ `undefined`
- Cada uno representa un estado distinto.

---

## Confirm
```js
const seleccion = confirm('¿Está seguro de borrar esto?');
console.log(seleccion);
```

### Características
- Muestra una pregunta con **OK** y **Cancelar**.
- Retorna un **booleano**:
  - `true` → OK
  - `false` → Cancelar
- También es **bloqueante**.

---

## Tipos de datos observados
- **string** → o (incluye string vacío)
- **null** → ausencia intencional de valor
- **boolean** → `true` / `false`

Los colores en la consola ayudan a identificarlos.

---

## Relación con el objeto `window`
- `alert`, `prompt` y `confirm` son métodos de:
```js
window.alert
window.prompt
window.confirm
```

- Solo existen en el **navegador web**.

---

## Diferencia entre navegador y Node.js

### En el navegador
- Existe el objeto `window`.
- Funcionan:
  - `alert`
  - `prompt`
  - `confirm`

### En Node.js
- **NO existe** `window`.
- Existe el objeto `global`.

#### Ejemplo
```js
console.log(global);
```

- Ejecutar `alerts.js` con Node:
```bash
node assets/js/alerts.js
```

- Resultado:
  - Error: `confirm is not defined`
  - Porque Node no tiene interfaz gráfica.

---

## Regla clave
> El código JavaScript depende del entorno donde se ejecuta.

- Navegador → `window`
- Node.js → `global`

---

## Buenas prácticas
- Conocer `alert`, `prompt` y `confirm`, aunque hoy se usen poco.
- No usarlos en backend (Node.js).
- Preferir librerías modernas para interacciones no bloqueantes.
- Probar el código en el entorno donde se va a ejecutar.

