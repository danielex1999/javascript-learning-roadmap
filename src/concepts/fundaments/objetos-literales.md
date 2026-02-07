# Objetos literales en JavaScript

## Tipos de datos en JavaScript
- JavaScript tiene dos grandes categorías de datos:
  - **Primitivos**
  - **Objetos**
- Regla simple:
  - Si **no es primitivo**, entonces es un **objeto**.

## ¿Qué es un objeto literal?
- Es un objeto definido directamente con `{}`.
- Contiene **pares clave–valor**.
- Es similar a los **diccionarios en Python**.
- Cada propiedad tiene:
  - una **clave** (nombre)
  - un **valor** (cualquier tipo de dato)

---


## Crear un objeto literal
```js
const personaje = {
  nombre: 'Tony Stark'
};
```

- `{}` indica que es un objeto.
- `nombre` es la clave.
- `'Tony Stark'` es el valor.

---

## Acceder a propiedades (notación de punto)
```js
console.log(personaje.nombre);
```

---

## Agregar más propiedades
```js
const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  estaVivo: false,
  edad: 40,
  coordenadas: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};
```

### Observaciones
- Se usa **coma**, no punto y coma, entre propiedades.
- Se pueden **anidar objetos**.
- Se pueden **incluir arreglos**.
- El orden de impresión en consola suele ser **alfabético**, no el orden de definición.

---

## Imprimir el objeto completo
```js
console.log(personaje);
```

---

## Acceder a propiedades anidadas
```js
console.log(personaje.coordenadas);
console.log(personaje.coordenadas.lat);
```

---

## Acceder a arreglos dentro del objeto
```js
console.log(personaje.trajes);
```

### Cantidad de elementos (length)
```js
console.log(personaje.trajes.length);
```

---

## Obtener el último elemento de un arreglo
```js
const ultimoTraje = personaje.trajes[personaje.trajes.length - 1];
console.log(ultimoTraje);
```

---

## Notación de corchetes
Otra forma de acceder a propiedades:
```js
console.log(personaje['nombre']);
```

- Útil cuando:
  - la propiedad tiene espacios
  - la propiedad se obtiene dinámicamente

---

## Acceso dinámico con variables
```js
const propiedad = 'estaVivo';
console.log(personaje[propiedad]);
```

- JavaScript evalúa el valor de la variable y busca esa propiedad en el objeto.

---

## Propiedades con espacios o caracteres especiales
❌ No recomendado:
```js
ultima pelicula: 'Infinity War' // error
```

✅ Forma correcta:
```js
'ultima pelicula': 'Infinity War'
```

### Acceso obligatorio con corchetes
```js
console.log(personaje['ultima pelicula']);
```

- **No se puede usar la notación de punto** en estos casos.

---

## Buenas prácticas
- Usar **lowerCamelCase** para nombres de propiedades.
- Evitar espacios y caracteres especiales en claves.
- Preferir:
```js
ultimaPelicula
```
en lugar de:
```js
'ultima pelicula'
```

---

## Conceptos clave
- Los objetos literales:
  - agrupan información relacionada
  - permiten estructuras complejas
  - son fundamentales en JavaScript
- Las propiedades pueden ser:
  - primitivos
  - arreglos
  - otros objetos
- Existen dos formas de acceso:
  - notación de punto
  - notación de corchetes
