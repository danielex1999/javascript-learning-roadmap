# Métodos en clases de JavaScript

## ¿Qué es un método?
- Un método es **una función definida dentro de una clase**.
- Se ejecuta en el contexto de una **instancia**.
- Tiene acceso a las propiedades mediante `this`.
- Puede:
  - recibir argumentos
  - retornar valores
  - llamar a otros métodos de la misma clase

---

## Estructura base
Partimos de la clase `Persona`:

```js
class Persona {

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
  }

}
```

---

## Crear un método
Los métodos se definen **sin la palabra `function`**.

```js
class Persona {

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

}
```

- No es obligatorio ponerlos después del constructor, pero es lo recomendado.
- Si no hay `return`, el método retorna `undefined`.

---

## Llamar un método
```js
const spiderman = new Persona(
  'Peter Parker',
  'Spiderman',
  'Soy tu amigable vecino Spiderman'
);

spiderman.quienSoy();
```

**Resultado:**

Soy Peter Parker y mi identidad es Spiderman


---

## Otro método
```js
class Persona {

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }

}
```

### Uso
```js
spiderman.miFrase();
```

**Resultado:**

Spiderman dice: Soy tu amigable vecino Spiderman


---

## Llamar métodos dentro de la misma clase
Para llamar otro método **de la misma instancia**, se usa `this`.

✅ Correcto:
```js
miFrase() {
  this.quienSoy();
  console.log(`${this.codigo} dice: ${this.frase}`);
}
```

❌ Incorrecto:
```js
miFrase() {
  quienSoy(); // ReferenceError
}
```

- Sin `this`, JavaScript busca una función en el scope local o global.

---

## Métodos con paréntesis
```js
spiderman.quienSoy;   // ❌ referencia
spiderman.quienSoy(); // ✅ ejecución
```

- Los paréntesis indican que el método **se ejecuta**.

---

## Lo que NO se debe hacer
```js
miFrase() {
  function quienSoy() {
    console.log('Hola mundo');
  }
}
```

- Esto crea una función local
- No es un método de la clase
- No usa las propiedades de la instancia

---

## Resumen
- Los métodos:
  - son funciones dentro de clases
  - usan `this` para acceder a propiedades
  - pueden llamar otros métodos con `this.metodo()`
- La sintaxis es más limpia y clara que antes de ES6
- Son fundamentales para encapsular comportamiento
