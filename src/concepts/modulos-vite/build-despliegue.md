# Build de producción con Vite y despliegue

## Corrección importante
En `index.html`, el script debe quedar con la ruta correcta:

```html
<script type="module" src="./main.js"></script>
```

Ese `./` es importante para que encuentre el módulo correctamente.

---

## ¿Por qué esto ya es una app de Node?
Porque ahora el proyecto tiene:

- `package.json`
- `node_modules/`

Eso significa que ya no estamos trabajando solo con archivos sueltos de JavaScript, sino con un proyecto gestionado por Node y npm.

---

## Generar el build de producción
Detén el servidor si sigue corriendo con:

```bash
Ctrl + C
```

Luego ejecuta:

```bash
npm run build
```

---

## ¿Qué hace `npm run build`?
Genera la versión lista para producción:

- optimizada
- minificada
- empaquetada
- preparada para subir a internet

El resultado se crea dentro de la carpeta:

```txt
dist/
```

---

## Qué contiene `dist/`
Normalmente encontrarás algo como esto:

- `index.html`
- `assets/index-xxxxxx.js`
- `assets/index-xxxxxx.css`

### Importante
Eso sí es lo que se despliega a producción.  
No se sube:

- `node_modules`
- `package.json`
- código fuente completo

Solo se sube el contenido de `dist`.

---

## ¿Por qué ahora pesa tan poco?
Aunque `node_modules` pese mucho en desarrollo, el build final es pequeño porque Vite:

- solo empaqueta lo necesario
- elimina lo que no se usa
- minimiza archivos
- optimiza CSS y JS

Por eso una app puede pasar de muchos MB en desarrollo a solo unos KB en producción.

---

## ¿Qué son esos nombres raros como `index-abc123.js`?
Eso es un **hash**.

Ejemplo:

```txt
index-2f4a8c.js
```

### ¿Para qué sirve?
Evita problemas de caché en el navegador.

Si cambias tu código y vuelves a hacer build:
- si el archivo cambió, cambia el hash
- el navegador sabe que debe descargarlo otra vez

Si no cambió:
- puede reutilizar el archivo en caché

Eso mejora rendimiento y asegura que el usuario vea la versión correcta.

---

## Desplegar en Netlify
Una forma fácil de publicar la app es usando **Netlify**.

### Pasos
1. Ir a [https://netlify.com](https://netlify.com)
2. Crear cuenta o iniciar sesión
3. Ir a **Sites**
4. Arrastrar la carpeta `dist/` al área de despliegue

Netlify subirá la aplicación y generará una URL pública.

---

## Cambiar el nombre del sitio
En Netlify:

- ir a configuración del sitio
- buscar opción tipo:
  - `Site settings`
  - `Change site name`
  - `Domain settings`

Ahí puedes poner un nombre más amigable, si está disponible.

---

## Qué se carga realmente en producción
Cuando la app ya está desplegada, el navegador normalmente descarga:

- `index.html`
- un archivo JS
- un archivo CSS
- quizás favicon o assets extra

Eso es todo.

No se sube todo el proyecto, solo el resultado final.