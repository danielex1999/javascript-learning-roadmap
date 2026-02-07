# Orden de importaciones y carga de JavaScript

## El orden de los scripts importa
- El lugar donde se importa un archivo JavaScript **sí afecta**:
  - el rendimiento
  - el comportamiento
  - la experiencia del usuario

## Scripts en `<head>`
- Es válido colocar scripts en el `<head>`, pero **no es lo recomendado por defecto**.
- Problema principal:
  - El navegador **detiene la construcción del HTML**
  - Descarga y ejecuta el JavaScript antes de renderizar la página

### Ejemplo de problema
```js
alert('Hola desde app.js');
```
- `alert` es **bloqueante**:
  - Detiene la ejecución del JavaScript
  - Evita que el HTML se renderice
- Resultado:
  - Pantalla en blanco
  - Página parece congelada hasta que el usuario interactúa

## Scripts al final del `<body>` (recomendado)
- El navegador:
  1. Construye todo el HTML
  2. Renderiza el contenido visible
  3. Ejecuta el JavaScript
- Beneficio:
  - Mejor percepción de rendimiento
  - El usuario ve contenido más rápido

```html
<body>
  <!-- contenido HTML -->

  <script src="app.js"></script>
</body>
```

## Flujo interno del navegador
1. Lee el HTML línea por línea
2. Cuando encuentra un `<script>`:
   - Descarga el archivo
   - Analiza definiciones (variables, funciones)
   - Ejecuta el código línea por línea
3. Si una instrucción es bloqueante:
   - Todo se detiene hasta que termine

## Organización de archivos
- No es buena práctica dejar muchos archivos JS en la raíz.
- Estructura recomendada:
```
assets/
  css/
  js/
    app.js
    alerts.js
index.html
```

## Rutas correctas a los scripts
- Al mover archivos, se debe actualizar la ruta:
```html
<script src="assets/js/app.js"></script>
```
- Si la ruta es incorrecta:
  - El navegador mostrará error **File not found**

## Caché del navegador
- Para evitar problemas al recargar:
  - DevTools → Network
  - Activar **Disable cache**

## Múltiples archivos JavaScript
- Los scripts se ejecutan **en el orden en que se importan**.

```html
<script src="assets/js/app.js"></script>
<script src="assets/js/alerts.js"></script>
```

## Uso de `var` y el objeto global `window`
```js
var miNombre = 'Fernando';
```

- `var`:
  - Crea variables en el objeto global `window`
- Se puede acceder desde la consola:
```js
window.miNombre
```

## Problema del alcance global
- Variables globales:
  - Pueden ser usadas desde otros archivos
  - Generan dependencias ocultas
  - No es buena práctica moderna

## Dependencia entre archivos
- Esto funciona ✅:
  - Variable creada en `app.js`
  - Usada en `alerts.js`
  - **Solo si `app.js` se importa primero**

- Esto falla ❌:
  - Usar la variable antes de que sea declarada
  - Cambiar el orden de importación

## Regla clave
> JavaScript se ejecuta en el orden exacto en que los scripts son cargados.

## Buenas prácticas 
- Colocar scripts al final del `<body>`
- Cuidar el orden de importaciones
- Evitar variables globales con `var`
- Organizar el proyecto por carpetas
- Mantener rutas claras y correctas
- No depender implícitamente de otros archivos
