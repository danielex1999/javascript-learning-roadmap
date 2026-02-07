# JavaScript – Depuración y ejecución paso a paso

## Necesidad de depurar
- A veces el código se ejecuta sin errores visibles, pero el resultado no es el esperado.
- Es importante poder ver **cómo cambian las variables línea por línea** antes de llegar a un punto problemático.

## Panel *Sources* en el navegador
- En DevTools → **Sources** se puede ver:
  - `index.html`
  - Archivos JavaScript cargados (ej. `app.js`)
- Desde aquí se puede analizar y depurar el código JavaScript que se está ejecutando.

## Breakpoints
- Un **breakpoint** detiene la ejecución del programa en una línea específica.
- Se crea haciendo clic a la izquierda del número de línea.
- Cuando el programa llega a ese punto:
  - Se pausa la ejecución.
  - Se muestran las variables y su estado actual.

## Ejecución paso a paso
- Botón **Step Over** (F10):
  - Ejecuta la línea actual y pasa a la siguiente.
- Permite ver:
  - Cuándo se crean las variables.
  - Cuándo se les asigna un valor.
  - Cómo cambian en el tiempo.

## Inspección de variables
- Al pasar el mouse sobre una variable:
  - Se muestra su valor actual.
- Si una variable aún no ha sido creada:
  - Aparece como **no definida**.

## `undefined`
- Cuando una variable existe pero no tiene valor asignado:
  - Su valor es `undefined`.
- JavaScript:
  - Primero registra las variables y funciones (fase inicial).
  - Luego ejecuta el código línea por línea.

## Comentarios
- Los comentarios:
  - Son completamente ignorados por JavaScript.
  - No afectan la ejecución.
  - Sirven solo para documentación y claridad.

## Fin de la ejecución
- Cuando el intérprete llega al final del archivo:
  - El programa sigue en pausa si hay un breakpoint.
  - Se debe continuar o reanudar manualmente.
- Se pueden:
  - Quitar breakpoints individuales.
  - Desactivar todos los breakpoints temporalmente.

## Depuración desde Visual Studio Code
- Se pueden colocar breakpoints directamente en el editor.
- Iniciar depuración con:
  - Menú **Run / Debug**
  - Shortcut: **F5**
- Requiere tener **Node.js instalado**.
- VS Code ofrece:
  - Controles de ejecución
  - Variables visibles
  - Ejecución paso a paso similar al navegador

## Consola de depuración en VS Code
- Los `console.log`, `console.table`, etc. no aparecen en la terminal normal.
- Se visualizan en:
  - **Debug Console**
- Desde ahí:
  - Se puede navegar al archivo y línea exacta del log.
  - Expandir objetos y tablas.

## Ventajas de la depuración
- Permite encontrar errores difíciles de detectar.
- Ayuda a entender el flujo real del programa.
- Se puede depurar tanto:
  - En el navegador
  - Como en el editor de código

## Buenas prácticas vistas
- Usar breakpoints en lugar de solo `console.log`.
- Inspeccionar variables en distintos momentos.
- Entender `undefined` como estado inicial.
- Aprovechar la Debug Console.
- Quitar logs innecesarios antes de continuar.

