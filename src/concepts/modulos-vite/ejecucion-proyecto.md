# Vite – instalación, servidor de desarrollo y recarga en caliente

## Problema actual
Aunque el proyecto ya fue creado, si abrimos `index.html` directamente en el navegador:
- aparecen errores
- fallan los `import`
- no carga correctamente la app

Esto pasa porque **Vite no se usa abriendo el HTML manualmente**.  
Se debe ejecutar mediante su **servidor de desarrollo**.

---

## Instalar dependencias
Abrir una terminal dentro del proyecto y ejecutar:

```bash
npm install
```

O su versión corta:

```bash
npm i
```

### ¿Qué hace esto?
- Descarga desde internet las dependencias del proyecto
- Lee el archivo `package.json`
- Instala:
  - dependencias de desarrollo
  - dependencias necesarias para correr las herramientas del proyecto

---

## Archivos y carpetas que aparecen
Después de instalar, verás:

### `node_modules/`
- Aquí viven todas las dependencias instaladas
- Puede pesar bastante
- Es normal
- No se edita manualmente

### `package-lock.json`
- Registra exactamente qué versiones se instalaron
- Ayuda a reproducir la instalación en otras máquinas
- Tampoco se suele editar manualmente

---

## Diferencia entre dependencias
### Dependencias de desarrollo
Se usan para:
- construir la aplicación
- levantar el servidor
- herramientas de trabajo

Ejemplo:
- `vite`

### Dependencias de producción
Se usan en la app final cuando ya está corriendo en producción.

---

## Ejecutar el servidor de desarrollo
Una vez instaladas las dependencias:

```bash
npm run dev
```

### ¿Qué hace?
- Busca en `package.json` el script `dev`
- Ejecuta Vite
- Levanta un servidor local

Verás algo parecido a esto:

```bash
Local: http://localhost:5173/
```

---

## Abrir la aplicación
Abrir en el navegador la URL que muestra la terminal, por ejemplo:

```txt
http://localhost:5173/
```

Ahora sí la aplicación cargará correctamente.

---

## Qué está pasando en el proyecto
### `index.html`
Importa el archivo principal con:

```html
<script type="module" src="/main.js"></script>
```

### `main.js`
- importa los estilos
- inserta HTML dentro del `div#app`

Ejemplo:

```js
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>Hola mundo</h1>
`;
```

---

## Recarga en caliente (HMR)
Una de las mejores ventajas de Vite:

### Si cambias `main.js`
Por ejemplo:

```js
<h1>Hola Vite</h1>
```

y guardas el archivo:
- el navegador se actualiza casi de inmediato
- no hace falta recargar manualmente

### Si cambias `style.css`
Por ejemplo:

```css
background-color: red;
```

y guardas:
- el cambio se refleja al instante

---

## ¿Qué es HMR?
**Hot Module Replacement**

Significa que Vite:
- actualiza módulos en caliente
- reemplaza solo la parte modificada
- evita recargar toda la página
- acelera muchísimo el desarrollo

---

## ¿Qué es un módulo?
Un módulo es:
- un archivo independiente
- que encapsula una funcionalidad
- y puede importarse en otro archivo

Ejemplos:
- un archivo JS
- un archivo CSS
- una utilidad
- una clase
- una configuración

---

## ¿Por qué `node_modules` pesa tanto?
Porque ahí están:
- Vite
- sus dependencias
- herramientas de compilación
- utilidades internas

Eso es normal en desarrollo.

### Importante
Ese peso **no es el peso final de la aplicación que subirás a internet**.

Lo que realmente se sube es el build de producción, que es mucho más liviano.