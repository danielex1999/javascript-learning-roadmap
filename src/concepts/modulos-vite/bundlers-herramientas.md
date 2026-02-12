# Estado actual de JavaScript y por qué usamos Bundlers (Vite)

## 1️⃣ El problema real

Hasta ahora hemos trabajado así:

```html
<script src="app.js"></script>
```

Eso funciona…  
Pero **no es así como se trabaja profesionalmente hoy en día**.

En aplicaciones reales:

- Hay cientos o miles de archivos
- Se usan módulos
- Se importan librerías
- Se transpila código moderno
- Se minimiza y optimiza
- Se generan builds de producción

Ahí es donde entran los **bundlers**.

---

# 2️⃣ El problema del estándar ECMAScript

JavaScript evoluciona cada año:

- ES2015 (ES6)
- ES2016
- ES2017
- ...
- ES2024, ES2025, etc.

El problema:

👉 Los navegadores **no implementan inmediatamente** cada nueva característica.

Ejemplo:

```js
function* generador() {
  yield 0;
  yield 1;
}
```

- Puede funcionar en tu navegador moderno
- Puede fallar en el navegador viejo de un cliente

No todos actualizan su navegador.

---

# 3️⃣ Solución: Transpilación

Herramientas como **Babel** permiten:

- Escribir código moderno
- Convertirlo a versiones más antiguas de JavaScript
- Mantener compatibilidad

Esto se llama:

> **Transpilación**

---

# 4️⃣ ¿Qué es un Bundler?

Un bundler:

✅ Toma muchos archivos  
✅ Los combina  
✅ Optimiza el código  
✅ Minifica  
✅ Transpila  
✅ Copia assets  
✅ Genera build de producción  

Produce un resultado final listo para desplegar.

---

# 5️⃣ Webpack (el estándar por años)

Durante muchos años:

- Webpack fue el bundler dominante
- Billones de descargas
- Angular lo usa
- Ecosistema enorme

Problema:

⚠️ Webpack se volvió lento en proyectos grandes.

Cuando tienes:
- 1000+
- 2000+
- 3000+ módulos

Los tiempos de reconstrucción son lentos.

Ejemplo aproximado:

| Acción | Webpack |
|--------|----------|
| Build inicial | 10–30 segundos |
| Cambio pequeño | 2–5 segundos |

Eso reduce productividad.

---

# 6️⃣ Vite: el cambio de paradigma

Vite vino a demostrar algo importante:

> No necesitamos reconstruir todo cada vez.

### ¿Qué hace diferente?

- Usa ES Modules nativos del navegador
- Reemplaza módulos "en caliente"
- Mantiene el estado
- Recarga casi instantáneamente

Ejemplo comparativo:

| Acción | Webpack | Vite |
|--------|----------|------|
| Cambio pequeño | ~2s | ~50ms |
| HMR | recarga completa | reemplazo en caliente |

La diferencia es enorme en experiencia de desarrollo.

---

# 7️⃣ Turbopack (el futuro)

- Escrito en Rust
- Sucesor natural de Webpack
- Ultra rápido
- Aún en etapas tempranas (beta/alpha)

Comparaciones reales:

| Proyecto grande (3000 módulos) |
|--------------------------------|
| Webpack: lento |
| Vite: rápido |
| Turbopack: extremadamente rápido |

Pero:

⚠️ Aún no es recomendado para producción masiva.

---

# 8️⃣ Entonces… ¿qué usamos?

👉 Vamos a usar **Vite**.

Porque:

✅ Es estable  
✅ Es rápido  
✅ Es moderno  
✅ Es fácil de configurar  
✅ No requiere configuración compleja  
✅ Ideal para desarrollo profesional  

---

# 9️⃣ ¿Por qué ya no trabajamos con solo HTML + JS?

Porque en el mundo real necesitamos:

- Separación de responsabilidades
- Módulos
- Optimización automática
- Compatibilidad multiplataforma
- Builds listos para producción

---

# 🔟 Resumen

- ECMAScript evoluciona cada año
- Los navegadores no siempre están al día
- Necesitamos transpilar
- Necesitamos empaquetar
- Webpack dominó por años
- Vite mejoró drásticamente la experiencia
- Turbopack viene fuerte
- Nosotros comenzaremos con **Vite**
