# Patrón Singleton en JavaScript

## ¿Qué es un Singleton?
Un **singleton** es una clase que **solo permite una única instancia** en toda la aplicación.

- No importa cuántas veces uses `new`
- Siempre se retorna **la misma instancia**
- Ideal para:
  - servicios globales
  - configuración
  - cache
  - conexión a base de datos
  - estado compartido

---

## Idea clave
- Guardamos la instancia en una **propiedad estática**
- El constructor:
  - crea la instancia **solo la primera vez**
  - en llamadas posteriores, **retorna la existente**

---

## Implementación básica

```js
class Singleton {

  static instancia; // almacena la única instancia
  nombre = '';

  constructor(nombre = '') {

    // Si ya existe una instancia, retornar esa misma
    if (Singleton.instancia) {
      return Singleton.instancia;
    }

    // Inicialización solo la primera vez
    this.nombre = nombre;
    Singleton.instancia = this;
  }
}
```

---

## Pruebas

```js
const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(instancia1.nombre);
console.log(instancia2.nombre);
console.log(instancia3.nombre);
```

**Resultado**

Ironman Ironman Ironman



✅ Todas las variables apuntan **al mismo objeto en memoria**

---

## ¿Por qué funciona?
- `static instancia` pertenece a la **clase**
- Al crear una nueva instancia:
  - si ya existe → se hace `return Singleton.instancia`
  - el constructor termina inmediatamente
- En JavaScript, **un constructor puede retornar explícitamente un objeto**

---

## Detalle importante: `return` en el constructor
```js
constructor() {
  return this; // implícito si no se escribe
}
```

- Cuando retornas **otro objeto**, JavaScript usa ese objeto
- Esto hace posible el patrón Singleton

---

## Uso típico (caso real)
```js
class ConfigService {

  static instancia;
  config = {};

  constructor() {
    if (ConfigService.instancia) {
      return ConfigService.instancia;
    }

    this.config = { apiUrl: 'https://api.miapp.com' };
    ConfigService.instancia = this;
  }
}
```

---

## Buenas prácticas
- ✅ Usar singleton solo cuando realmente necesitas **estado global**
- ✅ Inicializar la instancia de forma controlada
- ✅ Mantener la lógica del singleton **dentro de la clase**
- ❌ No abusar (dificulta testing si se usa mal)
- ❌ No mezclar con lógica pesada en el constructor

---

## Alternativa moderna (nota)
En JavaScript moderno, muchas veces:
- un **módulo ES (`import/export`)**
- ya actúa como singleton por naturaleza

👉 Aun así, es importante **conocer el patrón clásico**

---

## Resumen
- Singleton = una sola instancia global
- Se implementa con:
  - propiedad estática
  - control en el constructor
- Ahorra memoria
- Comparte estado entre distintos puntos de la app