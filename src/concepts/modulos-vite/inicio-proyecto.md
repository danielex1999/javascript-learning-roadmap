# Inicio del proyecto con Vite

## Cambio importante del curso
- A partir de este punto, el curso **deja de usar Webpack**.
- Las secciones de Webpack quedan **archivadas** solo como referencia.
- De aquí en adelante se trabajará con **Vite**.

---

## Requisitos previos
Antes de crear el proyecto, hay que verificar que **Node.js** esté instalado.

```bash
node --version
```

### Recomendación
- Ideal: versión reciente
- Mínimo aceptable: superior a la 12
- Mejor si usas:
  - Node 14+
  - Node 18 o 19 mejor aún

---

## Crear un proyecto con Vite
Desde la carpeta principal de trabajo, ejecutar:

```bash
npm create vite@latest
```

Luego:
1. Confirmar instalación si lo pide
2. Escribir el nombre del proyecto  
   Ejemplo:

```bash
vite-app
```

3. Elegir plantilla:
   - `Vanilla`
4. Elegir variante:
   - `Vanilla`

> `Vanilla` significa JavaScript puro, sin frameworks.

---

## Abrir el proyecto en Visual Studio Code
Se recomienda abrir la carpeta creada en VS Code.

### Opción rápida
Instalar el comando `code` desde VS Code:

- Abrir la paleta de comandos
- Buscar:
  - `Shell Command: Install 'code' command in PATH`

Luego se puede abrir el proyecto así:

```bash
code .
```

---

## Estructura inicial del proyecto
Archivos importantes generados por Vite:

- `index.html`
- `main.js`
- `style.css`
- `package.json`
- `.gitignore`
- `public/` o assets relacionados

### Qué hace cada uno
- `index.html`: página principal
- `main.js`: punto de entrada del proyecto
- `style.css`: estilos
- `package.json`: configuración del proyecto y scripts
- `.gitignore`: archivos que Git no debe rastrear

---

## `main.js`
Vite genera un archivo parecido a este:

```js
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>Hola mundo</h1>
`;
```

### Importante
- Aquí aparece `import`, que empezará a ser parte del flujo normal.
- `import` permite traer otros archivos JS o CSS al proyecto.

---

## `index.html`
Aquí se importa el `main.js`:

```html
<script type="module" src="/main.js"></script>
```

### Importante
- Se usa `type="module"`
- Esto permite trabajar con módulos ES modernos

---

## ¿Por qué no funciona con doble clic?
Si abres `index.html` directamente en el navegador:
- Aparecen errores de `CORS`
- Fallan los `import`
- El proyecto no se comporta correctamente

### Razón
Vite necesita correr mediante un **servidor de desarrollo**, no abriendo el archivo directamente.

---

## Instalar dependencias
Antes de correr el proyecto:

```bash
npm install
```

Esto descarga las dependencias del `package.json`.

---

## Scripts del proyecto
En `package.json` vienen scripts como:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Significado
- `dev`: servidor de desarrollo
- `build`: compila para producción
- `preview`: permite previsualizar el build final