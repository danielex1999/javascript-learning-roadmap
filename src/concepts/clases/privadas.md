# Propiedades privadas en clases de JavaScript (`#`)

## Contexto y estado actual
- La **encapsulación con propiedades privadas** es un concepto clásico de OOP.
- En JavaScript **ya existe** mediante **campos privados con `#`** (ES2022).
- **Soporte**: no es 100% universal en entornos antiguos; hoy está bien soportado en navegadores modernos.
- **Regla**: usa esta característica **solo si tu target de navegadores/entorno la soporta**.

👉 Ver compatibilidad actualizada en **caniuse.com** (buscar: *Private class fields*).

---

## El problema
Propiedades calculadas **no deberían modificarse desde fuera**.

```js
class Rectangulo {
  area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.area = base * altura;
  }
}

const r = new Rectangulo(10, 15);
r.area = 100; // ❌ permitido (pero incorrecto)
```

---

## Solución: campos privados con `#`
Usa `#` para **impedir el acceso externo**.

```js
class Rectangulo {
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }
}
```

### Acceso externo (bloqueado)
```js
const r = new Rectangulo(10, 15);
console.log(r.#area); // ❌ SyntaxError
r.#area = 100;        // ❌ SyntaxError
```

✅ El campo **solo existe dentro de la clase**.

---

## Exponer lectura controlada con `get`
```js
class Rectangulo {
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }

  get area() {
    return this.#area;
  }
}
```

```js
const r = new Rectangulo(10, 15);
console.log(r.area); // ✅ 150
```

---

## Mantener consistencia (recalcular internamente)
Puedes recalcular el área cuando cambien datos **sin exponer el campo**.

```js
class Rectangulo {
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#recalcular();
  }

  set base(valor) {
    this._base = valor;
    this.#recalcular();
  }

  get base() {
    return this._base;
  }

  set altura(valor) {
    this._altura = valor;
    this.#recalcular();
  }

  get altura() {
    return this._altura;
  }

  get area() {
    return this.#area;
  }

  #recalcular() {
    this.#area = (this._base ?? 0) * (this._altura ?? 0);
  }
}
```

> Nota: los **métodos privados `#recalcular()`** también existen (ES2022). Si tu entorno no los soporta, evita `#` en métodos.

---

## Errores comunes
- ❌ Usar el mismo nombre público y privado sin `#` → rompe encapsulación.
- ❌ Acceder a `#campo` fuera de la clase → **SyntaxError**.
- ❌ Asumir soporte universal en navegadores antiguos.

---

## Buenas prácticas
- ✅ Usar `#` para **invariantes** y **datos calculados**.
- ✅ Exponer acceso mediante `get`/`set`.
- ✅ Verificar compatibilidad del entorno (navegadores/Node).
- ❌ No mezclar `#campo` con acceso directo externo.
- ❌ No depender de `#` si debes soportar navegadores muy antiguos (usar convención `_campo` + disciplina).

---

## Compatibilidad
- Revisa **caniuse.com** → *Private class fields*.
- Soporte sólido en **Chrome, Edge, Firefox, Safari** modernos.
- En proyectos legacy, transpila (Babel) o evita esta feature.

---

## Resumen
- `#campo` crea **propiedades privadas reales**.
- Evita modificaciones externas y errores lógicos.
- Usa `get`/`set` para exponer lo necesario.
- Verifica soporte antes de usar en producción.
