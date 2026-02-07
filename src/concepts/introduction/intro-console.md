# JavaScript – Ejecución, consola y depuración básica

## JavaScript como lenguaje interpretado
- JavaScript se ejecuta **línea por línea**, de forma secuencial.
- El intérprete ejecuta una instrucción tras otra hasta llegar al final del archivo.
- El flujo puede alterarse con:
  - ciclos
  - callbacks
  - asincronía
  - procesos continuos  
  (estos temas se verán más adelante).

## Uso de la consola
- `console.log()` imprime información sin afectar el flujo del programa.
- Es una herramienta clave para:
  - depurar
  - inspeccionar valores
  - entender el estado del programa en un momento dado

### Tipos de mensajes en consola
```js
console.log('Mensaje normal');
console.warn('Mensaje de advertencia');
console.error('Mensaje de error');
```

- `log`: mensaje informativo.
- `warn`: advertencia (warning).
- `error`: mensaje con apariencia de error (no necesariamente rompe el programa).

## Problema al imprimir múltiples valores
```js
console.log(a);
console.log(b);
console.log(c);
```

- No es claro qué valor corresponde a qué variable.
- Requiere revisar líneas y nombres manualmente.

## Imprimir nombre y valor de variables
```js
console.log('a', a);
console.log('b', b);
console.log('c', c);
```

- `console.log` acepta **múltiples argumentos**.
- Permite identificar claramente cada variable.

## Uso de objetos en `console.log`
```js
console.log({ a, b, c });
```

- Muestra todas las variables con su nombre y valor.
- Más limpio y rápido.
- Las llaves `{}` indican un objeto.

## Colores en la consola
- **Gris**: strings (cadenas de o).
- **Morado / azul**: números y booleanos.
- Ayudan a identificar tipos de datos visualmente.

## Estilizar mensajes en consola (opcional)
```js
console.log(
  '%cMis variables',
  'color: blue; font-weight: bold;'
);
```

- Usa CSS para dar formato al mensaje.
- Útil para resaltar información importante.

## Strings y tipos de datos
- Todo lo que va entre comillas es un **string**.
```js
let c = 'Hola';
let d = 'Spiderman';
```

## `console.table`
- Ideal para imprimir múltiples variables organizadas.
```js
console.table([a, b, c, d, x]);
```

- Muestra los valores en forma de tabla.
- Permite ordenar columnas.
- Muy útil para depuración cuando hay muchas variables.

## Uso de constantes
```js
const saludo = c + ' ' + d;
```

- `const` se usa cuando el valor **no va a cambiar**.
- Más ligera y segura que `let`.
- En JavaScript:
  - Se usan MAYÚSCULAS solo para constantes globales o de entorno.
  - Constantes locales pueden ir en camelCase.

## Concatenación de strings
- El operador `+` concatena strings.
```js
'Hola' + ' Spiderman' // 'Hola Spiderman'
```
- Los espacios dentro de strings **sí cuentan**.

## Ver valores desde la consola
- Aunque no se imprima nada, las variables existen.
- Se pueden consultar directamente:
```js
saludo
```

## Buenas prácticas vistas
- Usar la consola para depurar.
- Identificar variables claramente en logs.
- Preferir `console.log({ variable })`.
- Usar `console.table` para múltiples valores.
- Usar `const` cuando el valor no cambia.
- No imprimir innecesariamente en producción.