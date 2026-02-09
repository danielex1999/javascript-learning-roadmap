# Introducción a clases en JavaScript: el problema histórico

## Contexto
- JavaScript **no nació como un lenguaje orientado a objetos clásico**.
- Durante muchos años **no existían las clases**.
- Aun así, los desarrolladores necesitaban:
  - crear múltiples objetos con la misma estructura
  - compartir métodos
  - evitar duplicación de código

En **ES6 (2015)** se introducen oficialmente las **clases**, con amplio soporte actual en navegadores.

---

## Verificar compatibilidad
- Sitio recomendado: **caniuse.com**
- Buscar: `JavaScript classes` o `ES6 classes`
- Resultado:
  - Soporte amplio en navegadores modernos
  - Aceptable para proyectos actuales

👉 Hoy **sí es recomendado usar clases en JavaScript**.

---

## El problema sin clases

### Objetos duplicados
```js
const fer = {
  nombre: 'Fernando',
  edad: 30
};

const pedro = {
  nombre: 'Pedro',
  edad: 25
};

const melissa = {
  nombre: 'Melissa',
  edad: 35
};
```

### Problemas
- Código repetido
- Sin estructura obligatoria
- Fácil cometer errores (`nombre` vs `nombres`)
- Métodos deben duplicarse en cada objeto

---

## Métodos dentro de objetos (mal enfoque)
```js
const fer = {
  nombre: 'Fernando',
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
};
```

### Problemas
- Método duplicado en cada objeto
- Difícil escalar
- Poco mantenible

---

## Solución histórica: funciones constructoras

### Función constructora
```js
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  };
}
```

- Convención:
  - Nombre con **UpperCamelCase**
- Técnicamente:
  - Es una función normal
  - Se comporta distinto cuando se usa con `new`

---

## Crear instancias con `new`
```js
const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 35);

maria.imprimir();
melissa.imprimir();
```

✅ Objetos con misma estructura  
✅ Métodos compartidos conceptualmente  
✅ Menos duplicación

---

## ¿Qué hace `new`?
1. Crea un objeto vacío
2. Asigna `this` a ese objeto
3. Enlaza el `prototype`
4. Retorna el objeto automáticamente

Sin `new`:
```js
Persona('María', 18); // ❌ undefined
```

---

## Problemas del enfoque con funciones constructoras
- `new` **es obligatorio** (y fácil de olvidar)
- No hay propiedades privadas reales
- Métodos definidos dentro del constructor:
  - ocupan más memoria
- Sintaxis confusa para principiantes
- Escalar herencia es complejo

---

## Prototype (mención breve)
- Cada función tiene un `prototype`
- Los objetos creados con `new` heredan de él
- Era la base de la herencia antes de ES6

👉 Lo veremos más adelante, pero **no es el enfoque recomendado hoy**.

---

## Conclusión
- Este patrón fue necesario **antes de ES6**
- Todavía se encuentra en proyectos antiguos
- **Hoy no es la mejor opción**
- JavaScript moderno ofrece:
  - `class`
  - herencia clara
  - métodos compartidos
  - sintaxis limpia
