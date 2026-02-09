# Herencia (extends) en clases de JavaScript

## ¿Por qué necesitamos herencia?
La herencia nos permite:
- **reutilizar código**
- **evitar duplicación**
- **extender comportamiento existente**

Si varias clases comparten:
- `nombre`
- `codigo`
- `frase`
- métodos como `quienSoy()`

no tiene sentido reescribir todo una y otra vez.

---

## Clase base: `Persona`
Esta será la clase que vamos a extender.

```js
class Persona {

  constructor(
    nombre = 'Sin nombre',
    codigo = 'Sin código',
    frase  = 'Sin frase'
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
}
```

---

## Crear una subclase con `extends`
Ahora creamos una clase `Heroe` que **extiende** de `Persona`.

```js
class Heroe extends Persona {
  clan = 'Sin clan';
}
```

- `extends Persona` significa:
  - hereda **propiedades**
  - hereda **métodos**
- No necesitamos reescribir nada de `Persona`.

---

## Crear una instancia de la subclase
```js
const spiderman = new Heroe();
console.log(spiderman);
```

Resultado:
- Es instancia de `Heroe`
- Tiene todas las propiedades de `Persona`
- Tiene la propiedad adicional `clan`

---

## Usar métodos heredados
```js
spiderman.quienSoy();
```

✅ Funciona aunque `Heroe` no tenga ese método definido  
👉 Lo hereda directamente de `Persona`

---

## Constructor en una clase hija
Si **NO** defines constructor en la subclase:
- JavaScript llama automáticamente al constructor del padre

Pero si **sí defines** un constructor, **debes llamar a `super()`**.

❌ Incorrecto:
```js
class Heroe extends Persona {
  constructor() {
  }
}
```

✅ Correcto:
```js
class Heroe extends Persona {
  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
  }
}
```

---

## Regla fundamental
👉 **`super()` debe llamarse antes de usar `this`**

❌ Incorrecto:
```js
constructor(nombre, codigo, frase) {
  this.clan = 'Avengers'; // ❌ error
  super(nombre, codigo, frase);
}
```

✅ Correcto:
```js
constructor(nombre, codigo, frase) {
  super(nombre, codigo, frase);
  this.clan = 'Avengers';
}
```

---

## Clase hija completa
```js
class Heroe extends Persona {

  constructor(nombre, codigo, frase, clan = 'Sin clan') {
    super(nombre, codigo, frase);
    this.clan = clan;
  }
}
```

### Uso
```js
const spiderman = new Heroe(
  'Peter Parker',
  'Spiderman',
  'Soy tu amigable vecino Spiderman',
  'Avengers'
);

spiderman.quienSoy();
console.log(spiderman.clan);
```

---

## Sobrescribir métodos (override)
Podemos redefinir un método heredado.

```js
class Heroe extends Persona {

  constructor(nombre, codigo, frase, clan) {
    super(nombre, codigo, frase);
    this.clan = clan;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} del clan ${this.clan}`);
  }
}
```

Resultado:
```js
Soy Peter Parker del clan Avengers
```

---

## Llamar al método del padre desde la subclase
Si queremos **mantener** el comportamiento original:

```js
class Heroe extends Persona {

  quienSoy() {
    super.quienSoy();
    console.log(`Pertenezco al clan ${this.clan}`);
  }
}
```

**Resultado:**

Soy Peter Parker y mi identidad es Spiderman Pertenezco al clan Avengers



---

## Qué hereda una subclase
✅ Propiedades  
✅ Métodos  
✅ Getters / setters  
✅ Métodos estáticos (con `NombreClase.metodo()`)

❌ No hereda constructores automáticamente si defines uno nuevo

---

## Buenas prácticas
- ✅ Usar herencia solo cuando **existe relación “es un”**
  - `Heroe` **es una** `Persona`
- ✅ Llamar siempre a `super()` primero
- ✅ Sobrescribir métodos solo cuando sea necesario
- ❌ No duplicar lógica que ya existe en la clase padre

---

## Resumen
- `extends` permite reutilizar código
- `super()` llama al constructor o método del padre
- Las subclases heredan propiedades y métodos
- Se pueden sobrescribir métodos y aún llamar al original