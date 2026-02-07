# Introducción a JavaScript – Hola Mundo

## ¿Qué es “Hola Mundo”?
- Es la aplicación más sencilla que se puede crear en cualquier lenguaje de programación.
- En JavaScript, sirve como primer contacto para entender cómo se ejecuta el código.

## JavaScript en el navegador
- Todos los navegadores web tienen su propia implementación de JavaScript.
- Google Chrome suele tener las características más recientes del estándar.
- Otros navegadores pueden ir un poco detrás, pero siguen el mismo estándar.

## Herramientas de desarrollo (DevTools)
- Se pueden abrir desde:
  - Menú → More tools / Más herramientas → Developer Tools.
  - Atajo de teclado (shortcut).
- La pestaña más importante al inicio es **Console**.
- La consola permite ejecutar código JavaScript directamente.

## Hola Mundo en la consola del navegador
```js
console.log('Hola mundo');
```
- `console` es un objeto.
- `log` es un método (función dentro de un objeto).
- Imprime texto en la consola.
- El punto y coma (`;`) es opcional, pero recomendado.
- El valor `undefined` aparece porque `console.log()` no retorna un valor.

## Escribir en el documento HTML
```js
document.write('Hola mundo');
```

- `document` representa todo el HTML de la página.
- `write` escribe directamente en el contenido del documento.
- Modifica lo que se ve en pantalla, no la consola.

## Ejecutar JavaScript con Node.js
- Verificar instalación:

```bash
node --version
```

- Entrar al modo interactivo:
```bash
node
```
- Ejecutar código:
```js
console.log('Hola mundo');
```

- Node.js permite ejecutar JavaScript fuera del navegador.

## Ejecutar JavaScript desde un archivo
1. Crear un archivo `app.js`.
2. Escribir:
```js
console.log('Hola mundo');
```text
3. Ejecutarlo desde la terminal:
```bash
node app.js
```

## Uso de Visual Studio Code
- Crear una carpeta de trabajo (ej: `01-fundamentos`).
- Abrir la carpeta en VS Code.
- Crear archivos `.js` y `.html`.
- Usar la terminal integrada para ejecutar comandos.

## JavaScript en HTML
### Script embebido (no recomendado)
```html
<script>
  console.log('Hola mundo en HTML');
</script>
```

### Importar archivo JavaScript (recomendado)
```html
<script src="app.js"></script>
```
- Mantiene separado el HTML del JavaScript.
- Mejora organización y mantenimiento.

## Ubicación correcta del `<script>`
- **Buena práctica:** colocar los scripts al final del `<body>`.
- Motivo:
  - El navegador renderiza primero el HTML.
  - Evita bloquear la carga visual del sitio.
  - Mejora el rendimiento percibido.

## Buenas prácticas clave
- Separar HTML y JavaScript.
- Usar archivos `.js` externos.
- Colocar scripts al final del `body`.
- Usar shortcuts y herramientas para trabajar más rápido.
- Acostumbrarse a la consola como herramienta principal.

## Conclusión
- JavaScript puede ejecutarse:
  - En la consola del navegador.
  - En el documento HTML.
  - Con Node.js en la terminal.
- El mismo código funciona en todos los entornos.
- Este es el primer paso para trabajar con JavaScript de forma profesional.
