# Clases en JavaScript (ES6) – Introducción práctica

## ¿Por qué usar clases?
- Eliminan la ambigüedad del uso de `new`
- Sintaxis clara y legible
- Facilitan:
  - herencia
  - reutilización
  - mantenimiento
- Son el estándar moderno desde **ES6 (2015)**

---

## Definición básica de una clase
```js
class Persona {
}
```

Buenas prácticas:
- Usar **UpperCamelCase** para nombres de clases
- Nombres descriptivos

---

## Constructor
El constructor:
- se ejecuta **al crear una instancia**
- inicializa el objeto

```js
class Persona {
  constructor() {
    console.log('Hola!');
  }
}
```

### Crear una instancia
```js
const spiderman = new Persona();
```

**Resultado:**
Hola!


---

## El constructor siempre retorna la instancia
- No retorna `undefined`
- Aunque escribas `return`, JS devuelve el objeto

```js
console.log(spiderman);
```

Resultado:
```js
Persona {}
```

---

## Propiedades de clase
Se pueden definir directamente en la clase:

```js
class Persona {
  nombre = '';
  codigo = '';
  frase = '';

  constructor() {
    console.log('Constructor ejecutado');
  }
}
```

- Si no se inicializan → `undefined`
- No se usan comas (`,`)
- No es una declaración de variables tradicional

---

## Modo estricto implícito
Las clases usan **`use strict` automáticamente**.

❌ Incorrecto:
```js
codigo = 'ABC';
```

✅ Correcto:
```js
this.codigo = 'ABC';
```

---

## Inicializar propiedades desde el constructor
```js
class Persona {
  nombre = '';
  codigo = '';
  frase = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}
```

---

## Valores por defecto en el constructor
```js
class Persona {
  constructor(
    nombre = 'Sin nombre',
    codigo = 'Sin código',
    frase  = 'Sin frase'
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}
```



## Crear instancias con datos
```js
const spiderman = new Persona(
  'Peter Parker',
  'Spiderman',
  'Soy tu amigable vecino Spiderman'
);

const ironman = new Persona(
  'Tony Stark',
  'Iron Man',
  'Yo soy Iron Man'
);

console.log(spiderman);
console.log(ironman);
```

Resultado:
```js
Persona { nombre: 'Peter Parker', codigo: 'Spiderman', frase: '...' }
Persona { nombre: 'Tony Stark', codigo: 'Iron Man', frase: '...' }
```

---

## Ventajas frente a funciones constructoras
✅ Sintaxis clara  
✅ Uso explícito de `constructor`  
✅ Menos errores por olvido de `new`  
✅ Preparadas para herencia  
✅ Más fácil de leer y mantener  


