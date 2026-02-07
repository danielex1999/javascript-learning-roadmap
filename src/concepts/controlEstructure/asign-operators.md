# Lógica booleana en JavaScript – Asignaciones con `&&` y `||`

## Valores base
Antes de empezar, definimos algunos valores clave:

```js
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
```

Estos tres valores son **falsy** en JavaScript:
- `false`
- `null`
- `undefined`

---

## Asignaciones con AND (`&&`)
El operador `&&`:
- Evalúa de izquierda a derecha
- Retorna **el primer valor falsy**
- Si todos son truthy, retorna **el último valor**

### Ejemplo 1
```js
const a1 = true && 'Hola mundo';
console.log(a1); // 'Hola mundo'
```

- `true` → truthy
- `'Hola mundo'` → truthy
- Retorna el **último valor**

### Ejemplo 2
```js
const a1 = true && 'Hola mundo' && 150;
console.log(a1); // 150
```

Todos tienen valor → retorna el último.

### Ejemplo 3
```js
const a1 = false && 'Hola mundo';
console.log(a1); // false
```

- El primer valor ya es falsy
- **No evalúa lo demás**
- Retorna `false`

---

## Otro ejemplo con `&&`
```js
const a2 = 'Hola' && 'Mundo';
console.log(a2); // 'Mundo'
```

Ambos son truthy → retorna el último.

### Con un falsy al final
```js
const a2 = 'Hola' && 'Mundo' && false;
console.log(a2); // false
```

- Todo debe ser truthy
- El último es falsy → retorna `false`

---

## Asignaciones con OR (`||`)
El operador `||`:
- Evalúa de izquierda a derecha
- Retorna **el primer valor truthy**
- Solo retorna el último si **todos son falsy**

### Ejemplo 1
```js
const a3 = soyFalso || 'Ya no soy falso';
console.log(a3); // 'Ya no soy falso'
```

- `false` → falsy
- Evalúa el siguiente
- Retorna el primer truthy

---

### Ejemplo con varios valores
```js
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
console.log(a4); // 'Ya no soy falso de nuevo'
```

- `false` → falsy
- `undefined` → falsy
- `null` → falsy
- `'Ya no soy falso de nuevo'` → truthy → se retorna

---

### Importante: corta la evaluación
```js
const a4 = soyFalso || 'Valor válido' || true;
console.log(a4); // 'Valor válido'
```

- `true` **nunca se evalúa**
- El `||` se detiene al encontrar el primer truthy

---

## OR con funciones
```js
const a5 = regresaTrue() || 'Otro valor';
console.log(a5); // true
```

- `regresaTrue()` retorna `true`
- No evalúa lo demás
- Retorna `true`

---

## Regla mental rápida

### AND (`&&`)
- Retorna el **primer falsy**
- Si no hay falsy → retorna el **último truthy**

### OR (`||`)
- Retorna el **primer truthy**
- Si no hay truthy → retorna el **último falsy**

---

## Uso común en condiciones
```js
if (usuario && usuario.nombre) {
  console.log(usuario.nombre);
}
```

```js
if (esAdmin || esEditor) {
  console.log('Tiene permisos');
}
```

---

## Complejidad y legibilidad
✅ Correcto:
```js
if (a && b && c) { ... }
```

⚠️ Difícil de leer:
```js
if ((a && b) || (c && d) || (!e && f)) { ... }
```

👉 Si la lógica se vuelve compleja:
- refactoriza
- usa variables intermedias
- divide en funciones

---

## Conclusión
- `&&` y `||` **no solo retornan booleanos**
- Retornan valores reales
- Se usan mucho para:
  - valores por defecto
  - ejecución condicional
  - asignaciones limpias
- Entender esto te da una **ventaja enorme** al leer y escribir JavaScript moderno