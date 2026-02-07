# Estructura de control `switch` en JavaScript


## ¿Qué es `switch`?
- Es una **estructura de control** para evaluar **valores exactos**.
- Es ideal cuando:
  - se compara una misma variable
  - contra varios valores específicos
- Alternativa más limpia a muchos `if / else if`.

---

## Sintaxis básica
```js
switch (expresion) {
  case valor1:
    // código
    break;

  case valor2:
    // código
    break;

  default:
    // código por defecto
}
```

- `switch` evalúa la expresión con **`===` (triple igual)**.
- `break` detiene la ejecución del `switch`.
- `default` es opcional.

---

## Ejemplo: días de la semana
```js
const dia = 0;

switch (dia) {
  case 0:
    console.log('Domingo');
    break;

  case 1:
    console.log('Lunes');
    break;

  case 2:
    console.log('Martes');
    break;

  default:
    console.log('No es lunes, martes ni domingo');
}
```

---

## ¿Por qué es necesario `break`?
Sin `break`, el código **sigue ejecutándose** hacia abajo.

### Ejemplo sin `break`
```js
const dia = 0;

switch (dia) {
  case 0:
    console.log('Domingo');

  case 1:
    console.log('Lunes');

  case 2:
    console.log('Martes');
}
```

**Salida:**
Domingo Lunes Martes



✅ Esto se llama **fall-through**  
❌ No suele ser lo que queremos

---

## Uso correcto con `break`
```js
const dia = 1;

switch (dia) {
  case 0:
    console.log('Domingo');
    break;

  case 1:
    console.log('Lunes');
    break;

  case 2:
    console.log('Martes');
    break;

  default:
    console.log('Otro día');
}
```

**Salida:**
Lunes


---

## Caso `default`
Se ejecuta cuando **ningún `case` coincide**.

```js
const dia = 5;

switch (dia) {
  case 0:
    console.log('Domingo');
    break;

  case 1:
    console.log('Lunes');
    break;

  default:
    console.log('No es lunes ni domingo');
}
```

---

## Importante: tipo de dato
`switch` compara usando **`===`**.

```js
const dia = '2';

switch (dia) {
  case 2:
    console.log('Martes');
    break;

  default:
    console.log('No es martes');
}
```

**Salida:**
No es martes



✅ Solución:
```js
case '2':
  console.log('Martes');
```

---

## ¿Cuándo usar `switch`?
✅ Útil cuando:
- se comparan valores exactos
- hay muchos casos claros
- se quiere evitar `if / else if` largos

❌ No recomendado cuando:
- hay rangos (`>`, `<`)
- hay condiciones complejas
- la lógica es muy dinámica

---

## Resumen
- `switch` evalúa una expresión contra múltiples valores
- Usa comparación estricta (`===`)
- `break` es obligatorio en la mayoría de los casos
- `default` cubre casos no contemplados
