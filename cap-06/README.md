# 6 - Objetos

Los objetos son el tipo de dato más fundamental.

## Introducción

Un objeto es un valor compuesto. Agrega a varios valores en uno solo (Ya sea valores primitivos u otros objetos) y permite almacenar y llamar a esos valores por un nombre.

Un objeto es una colección de _propiedades_. Cada propiedad cuenta con su nombre y su valor.

Los nombres de propiedades son a menudo cadenas (Y también símbolos). Se podría decir que los objetos mapean strings a valores. A este mapeo se le puede llamar de varias formas, como "hash", "hashtable", "dictionary" o "assosciative arrays".

Además de contar con una serie de propiedades, un objeto también hereda las propiedades de otro objeto, objeto el cual entonces, se conoce como su "prototipo". Los métodos de un objeto a menudo se tratan de propiedades heredadas. Esta "herencia de prototipo" es una característica de JavaScript.

Los objetos son dinámicos: las propiedades pueden ser añadidas y suprimidas. Pero también pueden ser usados para simular objetos estáticos y estructuras.

En JavaScript, cualquier valor que no sea un string, un número, un Symbol, un `false`, `true`, `null`, o un `undefined` **es un objeto**

Bien sabemos que los objetos son _mutables_ y son manipulados por una referencia más que por su valor.

Como bien sabemos una propiedad tiene un nombre y un valor. El nombre de una propiedad puede ser cualquier cadena o símbolo (aunque no puede haber dos propiedades con el mismo nombre). El valor puede ser cualquier valor de JavaScript (un valor primitivo u otro objeto), o bien, puede ser una función getter o setter (incluso ambas).

Además de su nombre y su valor, una propiedad tiene 3 _atributos de propiedad_:

* El atributo _writable_ (De escritura) especifica si el valor de la propiedad se puede ajustar.
* El atributo _enumerable_ define si el nombre de la propiedad se retorna por un `for/in`.
* El atributo _configurable_ indica si la propiedad se puede ser borrada y si sus atributos se pueden alterar.

Muchos de los objetos built-in de JavaScript tienen propiedades que son únicamente de lectura, no enumerables, o no configurables.

A las propiedades que no son heredadas se les conoce a menudo en JavaScript como _own properties_.

## Crear objetos

### Literals de objeto

Un _literal_ de objeto es una lista de nombres y pares de valores encerrados dentro de llaves. El nombre de una propiedad será un identificador de js o un literal de string. El valor de la propiedad será cualquier expresión de JavaScript.

```js
let empty = {};

let point = { x: 0, y: o};

let p2 = { x: point.x, y: point.y+1, };
```

Está permitido dejar una última coma en la última propiedad de un objeto con el fin de que sea menos probable causar un error de sintaxis.

Un literal de objeto es una expresión que crea e inicializa un nuevo objeto cada vez que es evaluado. El valor de cada propiedad se evalúa cada vez qeu el literal se evalúa.

### Crear objetos con `new`

El operador `new` crea e inicializa un nuevo objeto. Esta palabra clave debe ser seguida por una función de invoación. Una función que se usa de esta forma se le conoce como _método constructor_ y tiene el propósito de inicializar un nuevo objeto.

```js
let o = new Object(); // Crear un objeto vacio
let a = new Array();
let d = new Date(); // Crear un objeto de fecha representando el tiempo actual
```

### Prototipos

Casi todo objeto de JavaScript tiene a otro objeto asociado a él. A este segundo objeto se le conoce como _prototipo_. El primer objeto hereda las propiedades del prototipo.

Todos los objetos creados por literals de objeto tienen el mismo prototipo, y nos podemos refereir a él con `Object.prototype`. Los objetos creados usando el `new` y un método constructor  usan el valor de la propiedad `prototype` del método constructor como su propio prototipo.

Similarmente:

* Los objetos creados con `new Array()` usan `Array.prototype` como su prototipo.
* Los objetos creados con `new Date()` usan `Date.prototype` como su prototipo.

`Object.prototype` es uno de los objetos que no tiene prototipo, pues no hereda ninguna propiedad.

### `Object.create()`

Crea un nuevo objeto, usando su primer argumento pasado como el prototipo de ese objeto:

```js
let o1 = Object.create({x: 1, y: 2});
```

Le podemos pasar `null` para crear un nuevo objeto que no tenga un prototipo, solo que al hacer esto, el nuevo objeto no heredará absolutamente nada, ni si quiera métodos básicos.

Si quieremos crear un objeto ordinario, podemos pasar `Object.prototype`:

```js
let o3 = Object.create(Object.prototype);
```

## Consultar y ajustar propiadedaes

Para obtener el valor de una propiedad, usamos el operador del punto (`.`) o de un corchete (`[]`). El lado izquierdo del operador debe ser una expresión cuyo valor sea un objeto. El lado derecho del operador debe ser un identificador que nombre a la propiedad.

Si usamos corchetes, el valor dentro de los corchetes debe de ser una epresión que evalúe a un string que contenga el nombre deseado de la propiedad.

```js
let author = book.author;

let title = book["main title"];
```

### Objetos como arrays de asociación

```js
object["property"];
```

La anterior luce como la sintaxis para acceder a un elemento de un arreglo, solo que identificado por un string en lugar de por números. A este tipo de arreglo se le conoce como _array/arreglo de asociación_.

Los objetos de JavaScript son arreglos de asociación.

En JavaScript, no es necesario que los objetos tengan un número predefinido de propiedades. Un programa puede crear cualquier número de propiedades en cualquier objeto. Sin embargo, al usar el operador `.` para acceder a la propiedad de un objeto, el nombre se debe expresar como un identificador; los identificadores no son un tipo de dato, y no pueden ser manipulados por el programa.

Al acceder a una propiedad de un objeto con la notación de arreglo (`[]`), el nombre de la propiedad se expresa como un string. Los strings son tipos de dato de JavaScript, y pueden ser manipulados y creados mientras un programa esté corriendo.

```js
let addr = "";

for(let i = 0; i < 4; i++) {
	addr += customer[`address${i}`] + "\n";
}
```

En el código anterior, de ese modo, podemos acceder a las propiedades `address0`, `address1`, `address2`, y `address3`.

Este ejemplo nos muestra la flexibilidad de utilizar la notación de arreglos para acceder a las propiedades de un objeto con expresiones string. Pueden haber ocasiones en las que esta notación sea la única opción.

### Herencia

Los objetos de JavaScript tienen una serie de propiedades "inherentes", y también heredan una serie de propiedades de su objeto prototipo.

Cada que creamos una instancia de una clase con `new`, estamos creando un objeto que hereda propiedade sde un objeto prototipo.

Si consultamos la propiedad `x` en el objeto `o`. Si `o` no tiene una propiedad de ese nombre, el objeto prototipo de `o` se consulta para la propiedad `x`.

Si el objeto prototipo no tiene una propiedad de ese nombre, pero tiene un prototipo dentro, la consulta se realiza en el prototipo **del prototipo**. Esto se hace hasta que la propiedad `x` se encuentre o hasta que se halle un objeto con un prototipo `null`.  El atributo `prototype` de un objeto crea una cadena de la cual se heredan las propiedades.

```js
let o = {};

o.x  = 1;

let p = Object.create(o);

p.y = 2;
let q = Object.create(p);

q.z = 3;

let f = q.toString();

q.x + q.y
```