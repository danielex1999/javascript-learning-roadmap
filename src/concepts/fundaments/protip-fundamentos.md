# Pro tips para escribir funciones más limpias en JavaScript

## Tip 1: Retorno implícito de objetos

### Versión tradicional
```js
function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido
  };
}
```

### Mejora 1: propiedades abreviadas (ES6)
Cuando la propiedad y la variable se llaman igual:
```js
function crearPersona(nombre, apellido) {
  return { nombre, apellido };
}
```

### Mejora 2: función de flecha
```js
const crearPersona = (nombre, apellido) => {
  return { nombre, apellido };
};
```

### Mejora 3: return implícito con objeto
```js
const crearPersona = (nombre, apellido) => ({ nombre, apellido });
```

> Los paréntesis indican que se retorna un **objeto**, no el cuerpo de la función.

---

## Tip 2: `arguments` vs parámetros REST

### `arguments` (solo funciones tradicionales)
```js
function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(10, false, 'Fernando', 'Hola');
```

- `arguments` es un objeto similar a un arreglo.
- **No existe en funciones de flecha**.

---

### Parámetro REST (recomendado)
```js
const imprimeArgumentos2 = (...args) => {
  console.log(args);
};
```

- `...args` crea un **arreglo real** con los argumentos.
- Regla:
  - El parámetro REST **debe ser el último**.

#### REST + parámetros normales
```js
const imprimeArgumentos3 = (edad, ...args) => {
  console.log({ edad, args });
};
```

---

## Tip 3: Desestructuración de arreglos (retornos)

Si una función retorna un arreglo:
```js
const obtenerDatos = (edad, ...args) => args;

const [casado, vivo, nombre, saludo] = obtenerDatos(
  40,
  true,
  false,
  'Fernando',
  'Hola'
);

console.log({ casado, vivo, nombre, saludo });
```

- Evita acceder manualmente por índices.
- Código más limpio y legible.

---

## Tip 4: Desestructuración de objetos (retornos)

### Ejemplo con objeto retornado
```js
const persona2 = crearPersona('Fernando', 'Herrera');
```

### Extraer solo lo necesario
```js
const { apellido } = persona2;
console.log(apellido);
```

### Renombrar variables
```js
const { apellido: nuevoApellido } = persona2;
console.log(nuevoApellido);
```

---

## Tip 5: Desestructuración directa en argumentos

### Objeto base
```js
const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  estaVivo: true,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};
```

### Forma tradicional (menos legible)
```js
const imprimePropiedades = (personaje) => {
  console.log(personaje.nombre);
  console.log(personaje.codeName);
  console.log(personaje.estaVivo);
  console.log(personaje.edad);
  console.log(personaje.trajes);
};
```

### Forma recomendada: desestructuración
```js
const imprimePropiedades = ({
  nombre,
  codeName,
  estaVivo,
  edad = 15,
  trajes
}) => {
  console.log({ nombre, codeName, estaVivo, edad, trajes });
};

imprimePropiedades(tony);
```

### Beneficios
- Código más corto
- Más legible
- Valores por defecto sin validaciones extra

---

## Resumen de los pro tips
- ✅ Usa propiedades abreviadas al retornar objetos
- ✅ Prefiere funciones de flecha con return implícito
- ✅ Evita `arguments`, usa parámetros REST (`...args`)
- ✅ Usa desestructuración de arreglos para retornos
- ✅ Usa desestructuración de objetos en argumentos
- ✅ Define valores por defecto en la desestructuración
