# Pro tips con el operador condicional ternario


## Tip 1: Ternario en funciones de flecha (return implícito)

### Función para obtener el número mayor
```js
const mayor = (a, b) => (a > b) ? a : b;

console.log(mayor(10, 15)); // 15
console.log(mayor(20, 10)); // 20
```

✅ Función en una sola línea  
✅ Clara y expresiva  
✅ Ideal para retornos simples

> Los paréntesis son opcionales, pero **recomendados** para legibilidad.

---

## Tip 2: Ternario con valores booleanos

### Ejemplo: membresía
```js
const tieneMembresia = (esMiembro) => esMiembro ? '$2' : '$10';

console.log(tieneMembresia(true));  // $2
console.log(tieneMembresia(false)); // $10
```

- Cuando la condición ya es booleana, el ternario queda muy limpio.
- No se necesita comparación adicional.

---

## Tip 3: Ternario dentro de arreglos

```js
const esAmigo = true;

const amigosArr = [
  'Peter',
  'Tony',
  'Doctor Strange',
  esAmigo ? 'Thor' : 'Loki'
];

console.log(amigosArr);
```

- El ternario puede vivir **dentro de un arreglo**.
- Retorna dinámicamente un elemento.

---

## Tip 4: Ejecutar cualquier expresión

El ternario puede retornar:
- valores
- funciones ejecutadas
- resultados de otras funciones

```js
const esAmigo = false;

const amigosArr = [
  'Peter',
  'Tony',
  esAmigo ? 'Thor' : (() => 'Nick Fury')()
];

console.log(amigosArr);
```

✅ Cualquier expresión válida que **retorne algo** funciona.

---

## Tip 5: Ternarios anidados (varias condiciones)

### Sistema de calificaciones
```js
const nota = 82.5;

const grado =
  (nota >= 95) ? 'A+' :
  (nota >= 90) ? 'A'  :
  (nota >= 85) ? 'B+' :
  (nota >= 80) ? 'B'  :
  (nota >= 75) ? 'C+' :
  (nota >= 70) ? 'C'  :
  'F';

console.log({ nota, grado });
```

### Resultados
- `100` → `A+`
- `82.5` → `B`
- `65` → `F`

---

## ¿Cuándo usar ternarios anidados?
✅ Útil cuando:
- Las condiciones son claras
- El orden importa
- Se quiere evitar muchos `if / else`

⚠️ Cuidado:
- Si se vuelve difícil de leer → **refactorizar**
- No abusar de ternarios largos en una sola línea

---

## Buenas prácticas
- ✅ Usar ternarios para retornos y asignaciones
- ✅ Mantenerlos legibles
- ❌ Evitar ternarios excesivamente complejos
- ✅ Extraer lógica a funciones si crece demasiado

---

## Resumen
- El operador ternario no es solo para `if / else` simples
- Se puede usar:
  - en funciones
  - en arreglos
  - en asignaciones
  - con múltiples condiciones
- Bien usado, hace el código:
  - más corto
  - más expresivo
  - más elegante
