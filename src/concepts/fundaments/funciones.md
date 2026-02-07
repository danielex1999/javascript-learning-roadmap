# Funciones en JavaScript


## ¿Qué es una función?
- Una función es un **bloque de código reutilizable**.
- Sirve para **centralizar lógica** que puede ejecutarse varias veces.
- Se ejecuta **solo cuando es llamada**.

---

## Función tradicional
```js
function saludar() {
  console.log('Hola mundo');
}
```

### Ejecutar la función
```js
saludar();
```

- Los paréntesis `()` indican que es una función.
- El código dentro de `{}` es el **cuerpo de la función**.

### Buenas prácticas
- Definir funciones **al inicio del archivo**.
- Ejecutarlas más abajo para mejor lectura.

---

## Función vs método
- **Función**: independiente.
- **Método**: función que pertenece a un objeto.
```js
console.log(); // método
```

---

## Función asignada a una constante (función anónima)
```js
const saludarDos = function () {
  console.log('Hola mundo');
};
```

- No tiene nombre propio.
- Se identifica por la variable que la contiene.
- Más segura que la declaración tradicional.

---

## Argumentos en funciones
Las funciones pueden recibir valores externos.

```js
function saludar(nombre) {
  console.log('Hola ' + nombre);
}
```

### Llamar con argumento
```js
saludar('Fernando');
```

- `nombre` es un **parámetro**.
- `'Fernando'` es un **argumento**.

### Sin argumento
```js
saludar(); // Hola undefined
```

- Si no se envía, el valor es `undefined`.

---

## Múltiples argumentos y `arguments`
En funciones tradicionales existe el objeto implícito `arguments`.

```js
function saludar() {
  console.log(arguments);
}
```

```js
saludar('Fernando', 40, true, 'Costa Rica');
```

- `arguments` contiene **todos los valores enviados**.
- Solo existe en funciones tradicionales.
- No existe en funciones de flecha.

---

## Funciones de flecha (Arrow Functions)
Introducidas en **ES6 (2015)**.

```js
const saludarFlecha = () => {
  console.log('Hola mundo');
};
```

### Ejecutar
```js
saludarFlecha();
```

---

## Función de flecha con argumentos
```js
const saludarFlechaDos = (nombre) => {
  console.log('Hola ' + nombre);
};
```

```js
saludarFlechaDos('Melissa');
```

### Paréntesis opcionales (un solo argumento)
```js
const saludarFlechaTres = nombre => {
  console.log('Hola ' + nombre);
};
```

- Funciona igual.
- **Buena práctica**: usar paréntesis para mayor claridad.

---

## Ventajas de las funciones de flecha
- Sintaxis más corta.
- Más eficientes en muchos casos.
- Evitan problemas con `this` (se verá más adelante).
- Son las más usadas en JavaScript moderno.

---

## Formas vistas de definir funciones
1. Función tradicional
```js
function fn() {}
```

2. Función anónima asignada
```js
const fn = function () {};
```

3. Función de flecha
```js
const fn = () => {};
```

4. Función de flecha con argumentos
```js
const fn = (arg) => {};
```

