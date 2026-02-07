# Operador condicional ternario en JavaScript


## ¿Qué es el operador ternario?
- Es una **forma resumida de `if / else`**
- Permite asignar valores o ejecutar expresiones según una condición
- Sintaxis:

```js
condición ? valorSiTrue : valorSiFalse
```

---

## Escenario: horario de una tienda

### Reglas
- **Fines de semana** (domingo `0`, sábado `6`): abre a las **9**
- **Días de semana**: abre a las **11**

---

## Variables base
```js
const dia = 0;        // 0 = domingo
const horaActual = 10;
```

---

## Versión tradicional con `if / else`
```js
let horaApertura;

if ([0, 6].includes(dia)) {
  horaApertura = 9;
} else {
  horaApertura = 11;
}
```

Funciona ✅  
Pero se puede simplificar.

---

## Versión con operador ternario
```js
const horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
```

✅ Más corto  
✅ Más claro  
✅ Mismo resultado

---

## Mensaje con template literals
Usamos **backticks** y **interpolación**:

```js
let mensaje;

if (horaActual >= horaApertura) {
  mensaje = 'Está abierto';
} else {
  mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}
```

---

## Mensaje con operador ternario
```js
const mensaje = (horaActual >= horaApertura)
  ? 'Está abierto'
  : `Está cerrado, hoy abrimos a las ${horaApertura}`;
```

✅ Una sola línea  
✅ Fácil de leer  
✅ Muy común en JavaScript moderno

---

## Código completo con ternarios
```js
const dia = 1;        // lunes
const horaActual = 10;

const horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

const mensaje = (horaActual >= horaApertura)
  ? 'Está abierto'
  : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
```

---

## ¿Cuándo usar operador ternario?
✅ Ideal cuando:
- Hay **dos caminos claros**
- La lógica es **simple**
- Se quiere **asignar un valor**

❌ Evitar cuando:
- Hay muchas condiciones
- El ternario se anida demasiado
- Se pierde legibilidad

---

## Buenas prácticas
- ✅ Usar paréntesis para claridad
- ✅ Usar ternarios para asignaciones simples
- ❌ No abusar de ternarios anidados
- ✅ Priorizar la legibilidad

---

## Resumen
- El operador ternario es un `if / else` compacto
- Hace el código:
  - más limpio
  - más expresivo
  - más fácil de mantener
- Es ampliamente usado en JavaScript moderno

