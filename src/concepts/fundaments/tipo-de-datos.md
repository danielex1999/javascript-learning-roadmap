# Tipos de datos en JavaScript – Introducción a los primitivos

## JavaScript y el tipado débil
- JavaScript es un lenguaje **débilmente tipado**.
- No es necesario indicar explícitamente el tipo de dato de una variable.
- El motor de JavaScript **infiere el tipo** según el valor asignado.
- Ventajas:
  - Rapidez al programar
- Desventajas:
  - Posibles errores difíciles de detectar si no se tiene cuidado

## ¿Qué es el tipo de dato de una variable?
- Describe **qué tipo de valor** contiene una variable.
- La variable es el contenedor.
- El tipo de dato pertenece al **valor**, no al nombre de la variable.

### Ejemplo conceptual
- Variable: `canasta`
- Valor: `'manzana'`
- Tipo de dato del valor: **string**

## ¿Qué son los datos primitivos?
- Son valores que:
  - **No son objetos**
  - Son **inmutables**
- Importante:
  - Una variable puede cambiar de valor
  - Pero el valor primitivo en sí **no se modifica**, se reemplaza

## Tipos de datos primitivos en JavaScript

### 1. Boolean
- Valores posibles:
  - `true`
  - `false`
- Siempre en minúsculas
- Representan verdadero o falso

### 2. Null
- Representa **ausencia total de valor**
- No debe confundirse con `undefined`

### 3. Undefined
- Indica que:
  - La variable existe
  - Pero **no tiene valor asignado**
- También aparece:
  - Como retorno por defecto de funciones

### 4. Number
- JavaScript solo tiene **un tipo numérico**
- No distingue entre:
  - enteros
  - flotantes
- Ejemplos válidos:
  - `1`
  - `1.5`
  - `1000000`
- Tiene limitaciones de precisión en números muy grandes o decimales largos

### 5. String
- Cadenas de caracteres
- Se pueden definir con:
  - Comillas simples `'texto'`
  - Comillas dobles `"texto"`
  - Backticks `` `texto` ``
- Usados para:
  - palabras
  - frases
  - nombres
  - textos en general

### 6. Symbol
- Tipo de dato **único**
- Cada `Symbol` es diferente, aunque se cree con los mismos argumentos
- Dos symbols nunca son iguales entre sí
- Uso común:
  - Identificadores únicos
  - Propiedades especiales en objetos (se verá más adelante)

## Resumen rápido
- JavaScript tiene **6 tipos primitivos**:
  - `boolean`
  - `null`
  - `undefined`
  - `number`
  - `string`
  - `symbol`
- Los primitivos:
  - No son objetos
  - Son inmutables
- El tipo pertenece al **valor**, no a la variable
