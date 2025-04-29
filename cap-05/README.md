# 5 - Sentencias

Una sentencia en JavaScript termina con un punto y coma `;`. Una expresión se _evalúa_ para producir un valor, y por otro lado, una sentencia se _ejecuta_ para que se realice una instrucción.

Una forma de hacer que algo ocurra, es evaluar una expresión con efectos secundarios. Las expresiones que conlleven efectos secundarios como asignaciones y funciones de invocación, pueden sostenerse por sí solas como sentencias, y al usarse de esta forma se les conoce como _sentencias de expresiones_. También existen las _sentencias de declaración_ que declaran nuevas variables y definen nuevas funciones.

Las estructuras de control y sentencias con las que JavaScript cuenta son las siguientes:

* Condicionales
	- Dentro de estas se encuentra el `if` y el `switch`, en los que se realiza u omite otra sentencia dependiendo del valor de una expresión.
* Bucles
	- Sentencias como el `while` y el `for`, que ejecutan otras sentencias repetitivamente.
* Saltos
	- El `break`, `return`, y el `throw` que provocan que el intérprete salte a otra parte del programa.

## Sentencias de expresiones

Estos tipos de sentencias son expresiones con efectos secundarios.

```js
// operaciones
counter++;
delete o.x;

// llamadas a funciones
console.log(debugMessage);
displaySpinner();
```

Si una llamada a una función no tiene efectos secundarios, no hay punto en llamarla a menos que sea parte de otra expresión o para completar una sentencia de asignación.

```js
Math.cos(x); // No ocurre nada

cx = Math.cos(x);  // Lo que retorne la funcion se asigna a la variable
```

## Sentencias vacías

Un _bloque de sentencias_ combina varias sentencias en una sola. Consiste en una secuencia de sentencias encerradas dentro de llaves.

```js
{
	x = Math.PI;
	cx = Math.cos(x);
	console.log("cos(pi) = " + cx);
}

// Este bloque actúa como una sola sentencia
```

Varias sentencias en JavaScript contienen subsentencias, por ejemplo, en un bucle `while` es posible colocar cualquier número de sentencias.

También existen las _sentencias vacías_, en donde es posible no incluir nada en donde se espere una sentencia:

```js
;
```

El intérprete de JavaScript no realiza nada cuando se ejecuta una sentencia vacía. Esto suele ser útil cuando queremos crear un bucle con cuerpo vacío.

```js
for(let i = 0; i < a.length; a[i++] = 0);
```

En este bucle, no se requiere un cuerpo, y la sintaxis de JavaScript requiere que se pase una sentencia como el cuerpo del bucle, sin embargo, aquí solo se le pasa un `;`.

Podemos usar intencionalmente una sentencia vacía para comentar el código de forma que sea clara.

```js
for(let i = 0; i < a.length; a[i++] = 0) /* vacio */ ; 
```

## Condicionales

Las sentencias condicionales ejecutan u omiten otras sentencias dependiendo del valor de una expresión especificada.

### `if`

La sentencia `if` permite ejecutar instrucciones de forma condicional. Esta sentencia tiene dos formas se escribirse. La primera es:

```
if (expression)
	statement
```

_`expression`_ se evalúa, y si el valor resultante es verdadero, _`statement`_ se ejecuta. Si _`expression`_ es falso, _`statement`_ no se ejecuta.

```js
if (!username) username = "John Doe";
```

La sintaxis requiere que una sentencia suceda a la palabra clave `if` y la expresión entre paréntesis. También es posible usar un bloque de sentencias para escribir varias sentencias.

```js
if (!address) {
	address = "";
	message = "Pon un address";
}
```

La segunda forma de escribir la sentencia, es incluyendo un `else` que se ejecute cuando _`expression`_ sea falso:

```
if (expression)
	statement1
else
	statement2
```

Esta sentencia ejecuta _`statement1`_ si _`expression`_ es verdadero, y ejecuta _`statement2`_ si por el contrario, _`expression`_ es falso.

```js
if (n === 1)
	console.log("tienes un nuevo mensaje");
else
	console.log(`tienes ${n} nuevos mensajes`);
```

Si vamos a anidar varias sentencias `if`, lo más recomendable es usar llaves de apertura y de cierre para delimitar las sentencias en cada `if`.

Por lo que esto:

```js
if (i === j)
	if (j === k)
		console.log("i equals k");
else
	console.log("i doesn't equal j"); // Dificil de leer e interpretar
```

Se debe escribir así:

```js
if (i === j) {
	if (j === k) {
		console.log("i equals k");
	}
} else { // What a difference the location of a curly brace makes!
	console.log("i doesn't equal j");
}
```

### `else if`

Una forma de ejecutar una de varias piezas de código es con la sentencia `else if`, que no es realmente una sentencia, sino más bien una práctica usada regularmente para repetir sentencias `if/else`:

```js
if (n === 1) {
	// algo
} else if (n === 2) {

} else if (n === 3) {

} else {
	// cuando todo lo anterior falla
}
```

A todas las sentencias `if` del código anterior les estamos pasando el valor booleano de verificar la equivalencia de una variable (`n`) con tres números consecutivos. Esto no es lo más recomendable, pues estamos evaluando de forma repetitiva una misma expresión en varias sentencias. Para esto, es mucho mejor utilizar la sentencia `switch`:

### `switch`

Esta palabra clave es sucedida por una expresión en un paréntesis y un bloque de código en llaves:

```
switch(expression) {
	statements
}
```

La sentencia computa el valor de _`expression`_ y entre las etiquetas `case` busca una que coincida con el mismo valor de _`expression`_. Si encuentra alguna coincidencia, empieza a ejecutar el bloque de código desde el `case` coincidido.

Si no se encuentra un `case` con un valor igual, se busca y ejecuta la sentencia con la etiqueta `default`. Si no existe un `default`, la sentencia `switch` omite todo el bloque de código.

```js
switch(n) {
case 1:

	break;
case 2:

	break;
case 3:

	break;
default:
	
	break;
}
```

La sentencia `break` al final de cada `case` hace que el intérprete salte al final del `switch` y continuar con las instrucciones siguientes.

Un `case` en un `switch` simplemente especifican el punto de partida del código a ejecutar, y no especifican un punto de fin. A la ausencia de sentencias `break`, la sentencia `switch` continua por todos los `case` hasta el final de los bloques de código o hasta que se encuentre un `break`.

## Bucles

Las _sentencias de bucle_ son bloques de código que se repiten iterativamente. En JavaScript tenemos 5 sentencias de bucle, las cuales son:

* `while`
* `do/while`
* `for`
* `for/of | for/await`
* `for/in`

### `while`

El `while` es el bucle más básico de js, y su sintaxis es la siguiente:

```
while (expression)
	statement
```

Para ejecutar un _`statement`_ de un bucle `while`, el intérprete primero verifica la la expresión pasada. Si el valor resultante de evaluar _`expression`_ es `false` o tiene un estado de 'falso', el intérprete se salta todo el bloque de código y continúa con el resto del programa.

Si por el otro lado, el resultado de la expresión es verdadero, el intérprete ejecuta el _`statement`_, regresa al inicio del `while`, vuelve a evaluar _`expression`_ y se vuelve a ejecutar o se detiene dependiendo de su resultado.

Una forma de ver esto, es que la palabra clave `while` nos dice que su bloque de código se ejecutará iterativamente ***mientras*** su _expresión_ pasada sea verdadera. Por lo que sí, podemos crear un bucle que se repetirá para toda la eternidad si escribimos la sentencia de la siguiente forma:

```js
while(true)
```

Pero esto no es lo más deseable. En casi todos los bucles una o más variables que se pasan como parte de la _expresión_ del `while` tienen que cambiar con cada iteración del bucle.

```js
let count = 0;
while(count < 10) {
	console.log(count);
	count++;
}
```

### `do/while`

Este es similar al bucle `while`, solo que la evaluación de la expresión se realiza al final de la sentencia en lugar de al inicio. Al hacer esto, el bloque de código se ejecuta al menos una vez:

```
do
	statement
while (expression);
```

Si el bucle `while` primero piensa y luego hace una acción, el `do/while` primero realiza una acción y luego piensa.

Algunas diferencias que tiene esta sentencia con su contraparte `while` en su sintaxis, es la forma en que se abre el bloque de código:

```js
do{
	console.log(a[i]);
} while(++i < len);	// <-- notese el cierre con ; en el while()

while(++i < len){
	console.log(a[i]);
}
```

### `for`

Esta sentencia surge como una simplificación a bucles que siguen un patrón común, en el que se hace un conteo iterativo (como un incremento o un decremento) a una variable que se inicializa antes de que el bucle comience y que se evalúa después de cada iteración.

La sentencia `for` alberga estas tres manipulaciones en una sola expresión:

```
for(initialize ; test ; increment)
	statement
```

_`initialize`_, _`test`_ e _`increment`_ son las tres expresiones encargadas de inicializar, evaluar, e incrementar la variable del bucle. Para verlas en acción veamos un ejemplo:

```js
for(let count = 0; count < 10; count++) {
	console.log(count);
}
```

La variable del bucle puede ser numérica, pero también peude no serlo. El siguiente código recorre una estructura de datos y retorna el último objeto en la lista:

```js
function tail(o) {
	for(; o.next; o = o.next) /* no hace nada */ ; // Se recorre mientras o.next sea 'verdadero'
		return o;
}
```

Este código no tiene expresión de _inicialización_. Esta, y cualquiera de las otras dos expresiones pueden ser omitidas en un bucle `for`, pero se siguen requiriendo los dos puntos y comas `; ;`. Si omitimos la expresión de _evaluación_, el bucle se repite por los siglos de los siglos, por lo que sí, podemos escribir `for(;;)` para obtener el mismo resultado que con escribri `while(true)`.

### `for/of`

Desde ES6, contamos con esta sentencia que funciona con objetos `iterables`.

Por ejemplo, podemos usar el `for/of` para hacer un bucle a través de los elementos de un arreglo de números y computar la suma de estos:

```js
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data) {
	sum += element;
}
```

Dentro de los paréntesis del `for`, colocamos una declaración de variables, seguido de la palabra clave `of` y una expresión que se evalúe a un objeto iterable.

En este `for/of` mostrado, el bloque de código corre una vez por cada elemento del arreglo. Los elementos de un arreglo se iteran en un orden desde el primero hasta el último.

#### `for/of` con objetos

Los objetos no son iterables. Usar el `for/of` en un objeto nos arroja un TypeError:

```js
let o = { x: 1, y: 2, z: 3 };
for(let element of o){ // TypeError: 'o' no es iterable
	console.log(element);
}
```

Si deseamos iterar a través de las propiedades de un objeto, podemos usar el bucle `for/in`, o el `for/of` con el método `Object.keys()`:

```js
let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys()) {
	keys += k;
}
```

Esto funciona gracias a que el método `Object.keys` retorna un arreglo de nombres de propiedad de un objeto, y los arreglos son iterables con el `for/of`. Los cambios realizados al objeto `o` en el cuerpo del bucle no tendrán efecto en la iteración.

#### `for/of` con cadenas

Las cadenas de carácteres son iterables desde ES6:

```js
let frequency = {};
for(let letter of "mississippi") {
	if(frequency[letter]) {
		frequency[letter]++;
	} else {
		frequency[letter] = 1;
	}
}
frequency // => {m: 1, i: 4, s: 4}
```

### `for/in`

Este funciona como el bucle `for/of`, solo que la palabra clave `of` se cambia a `in`. A diferencia del `for/of` que espera un objeto iterable, un `for/in` funciona con cualquier objeto después del `in`.

La sentencia `for/in` cicla a través de los nombres propiedades de un objeto especificado. Su sintaxis es la siguiente:

```
for (variable in object)
	statement
```

_`variable`_ se refiere a una variable, pero puede ser una declaración o cualquier cosa que pueda ser interpretada como el lado izquierdo de una expresión de asignación.

## Saltos

Las sentencias de saltos le permiten al intérprete de JavaScript saltar a una nueva ubicación del código fuente. La sentencia `break` hace que el intérprete salte al final de un bucle u otra sentencia.

`continue` hace que el intérprete omita el resto del cuerpo de un bucle y salte de vuelta al inicio del bucle para hacer una nueva iteración.

JavaScript permite que las sentencias sean nombradas o _etiquetadas_.

La sentencia `return` hace que el intérprete salte de una llamada de función hacia el código que la invocó, además, brinda el valor de la invocación.

La sentencia `throw` es un retorno provisional de una función generadora. Esta sentencia _arroja_ una excepción y está diseñada para funcionar con la sentencia `try/catch/finally`, que establece un bloque de código a modo de  solución alternativa. Cuando se arroja una excepción, el intérprete salta al bloque handler más cercano.

### Sentencias etiquetadas

A cualquier sentencia se le puede añadir un _label_ si se le precede con un identificador y dos puntos y siempre y cuando usemos cualquier identificador que no se trate de una palabra reservada:

```
identifier: statement
```

Al etiquetar una sentencia, le damos un nombre que podemos usar para referirnos a ella en cualquier otro lado de nusetro programa. Es posible etiquetar cualquier sentencia.

Si a un bucle le damos una etiqueta, podemos usar las sentencias `break` y `continue` dentro del cuerpo del bucle para salir del bucle o volver al inicio de este para realizar la siguiente iteración. Estas dos sentencias son las únicas en JavaScript que utilizan etiquetas.

```js
mainloop: while(token !== null) {
	continue mainloop;
}
```

### `break`

Cuando se usa por sí solo, hace que el bucle, o la sentencia switch en que se encuentre se detenga inmediatamente:

```js
break;
```

Si un bucle tiene condiciones de fin complejas, puede ser más fácil implementar algunas de estas condiciones con sentencias `break`.

```js
for(let i = 0; i < a.length; i++){
	if (a[i] === target) break;
}
```

JavaScript también permite que la sentencia `break` sea seguida por una etiqueta de una sentencia:

```
break labelname;
```

Cuando el `break` se usa con una etiqueta, detiene la sentencia de cierre que tiene la etiqueta especificada. En caso de que no haya una sentencia de cierre con la etiqueta especificada, se tratará de un error de sintaxis.

Es necesario usar la sentencia `break` con etiqueta si queremos salir de una sentencia que no se trate del bucle más cercano o un `switch`:

```js
let matrix = getData();

let sum = 0, success = false;

computeSum: if(matrix) {
	for(let x = 0; x < matrix.length; x++){
		let row = matrix[x];
		if (!row) break computeSum;
		for(let y = 0; y < row.length; y++) {
		let cell = row[y];
		if (isNaN(cell)) break computeSum;
		sum += cell;
		}	
	}
	success = true;
}
```

### `continue`

La sentencia `continue` es similar a la sentencia `break`, solo que en lugar de salir de un bucle, `continue` detiene el bucle y se pasa a la siguiente iteración de este mismo.

```js
continue;
```

Esta sentencia también puede ser usada con una etiqueta:

```
continue labelname:
```

Esta sentencia solo puede ser usada dentro del cuerpo de un bucle. Usarla en cualquier otro lugar causa un error de sintaxis.

Al usar el `continue`, dependerá del tipo de bucle el efecto que surtirá:

* En un `while`, la _expresión_ especificada se comprueba nuevamente, de ser verdadera, el cuerpo del bucle se ejecutará desde el inicio.
* En un `do/while`, la ejecución salta al fin del bucle, en donde se comprueba la condición y se ejecuta el cuerpo desde el inicio dada la comprobación.
* En un `for`, la expresión de _incremento_ se evalúa, así como la expresión _test_ para determinar si se debe realizar otra iteración.
* En un `for/of` o un `for/in`, el bucle inicia nuevamente con el siguiente valor a iterar.

```js
for(let i = 0; i < data.length; i++){
	if (!data[i]) continue; // Saltar la asignacion de abajo
	total += data[i];
}
```

Al igual que con un `break`, el `continue` puede ser usado si el bucle que queremos iniciar no se trata del más cercano.

### `return`

Una sentencia `retorn` dentro de una función especifica el valor que tendrá una invocación a esa función.

```js
return expression;
```

Solo es posible colocar esta sentencia dentro del cuerpo de una función. Es un error de sintaxis colocarla en cualquier otro lugar.

```js
function square(x) { return x*x; }
```

Una función sin sentencia `return` hará que la expresión de invocación hacia esa función se evalúe a `undefined`.

También podemos usar la sentencia `return` sin una expresión para que la función retorne un valor `undefined`:

```js
function displayObject(o) {
	if (!o) return;
}
```

### `yield`

Similar a la sentencia `return` solo que se usa en las funciones generadoras de ES6 para producir el siguiente valor en la sequencia de valores sin retornarlo:

```js
function* range(from, to) {
	for(let i = from; i <= to; i++) {
		yield i;
	}
}
```

### `throw`

Una _excepción_ indica una condición o error excepcional ocurrido. _arrojar_/hacer _throw_ a una excepción señalará el error ocurrido en cuestión. Hacer _catch_ a una excepción consiste en solucionarla.

En JavaScript, las excepciones se arrojan cuando un error runtime ocurre y cuando el programa arroja una explícitamente utilizando la sentencia `throw`.

### `try/catch/finally`

Esta sentencia es el modo en el que se manejan las excepciones en JavaScript.

El bloque dentro de código del `try` define las expresiones a ser tratadas para la solución de errores. Este bloque es seguido por otro bloque `catch` adicional, en el que se colocan sentencias que se invocan cuando ocurre una excepción dentro del bloque `try`.

Después de la sentencia `catch` se coloca un bloque `finally`, que contiene código a ejecutarse sin importar lo que suceda en el `try`. 

El `catch` y el `finally` son opcionales, pero un `try` debe de ser acompañado por alguno de los dos anteriores.

```js
try {

}
catch(e) {
	/* Se puede usar la variable e 
	que se refiere al objeto del Error
	u otro valor arrojado */
}
finally{

}
```

El `catch` es sucedido por un identificador dentro de un paréntesis. Es como el parámetro de una función, y cuando se atrapa una excepción, el valor asociado a la excepción se asigna a ese parámetro.

```js
try {
	let n = Number(propmt("Introduce un numero natural",""));
	
	let f = factorial(n); // Opera el numero asumiendo que la entrada es valida
	
	alert(n + "! = " + f);
}
catch(ex) {	// Ejecutar esto si la entrada del usuario no es valida
	alert(ex); // Mostrar al usuario el error
}
```

## Sentencias misceláneas

### `with`

Esta sentencia corre un bloque de código como si las propiedade de un objeto especificado fueran variables en el alcance de este código:

```
with (object)
	statement
```

Crea un alcance temporal con las propiedades de _`object`_ como variables, y después ejecuta _`statement`_ dentro de ese alcance.

Esta sentencia debería evitar ser usada, pues es difícil de optimizar.

`with` suele ser usado de modo que sea más fácil trabajar con objetos profundamente anidados.

```js
document.forms[0].address.value

// Si se necesita repetir esto varias veces, podemos hacer lo siguiente

with(document.forms[0]) {
	name.value = "";
	address.value = "";
	email.value = "";
}
// Ya no es necesario usar el prefijo document.forms[0]. para acceder a cada propiedad
```

Usar `const`, `let` o `var` dentro del cuerpo de un `with` simplemente creará una variable ordinaria y no definirá una nueva propiedad dentro del objeto especificado.

### `debugger`

Si un programa para hacer debug se encuentra corriendo, podemos usar esta sentencia.

Esta sentencia hace que la ejecución del código se detenga, y podemos usar el debugger para imprimir valores, examinar el call stack, etc.

```js
function f(o) {
	if (o === undefined) debugger; // Linea temporal para debug
}
```

En este ejemplo, cuando la función `f()` se llama sin un argumento, la ejecución se detendrá, y podemos usar el debugger para inspeccionar el call stack para averiguar de donde se está haciendo la llamada culpable.

### `use strict`

Este solo puede aparecer al inicio de un script o al inicio del cuerop de una función.

El propósito de este es indicar que el código que le siga sea en _modo estricto_.

Al código ejecutado en _modo estricto_ se le denomina código estricto. El modo estricto es un apartado restringido del lenguaje que arregla algunas deficiencias del lenguaje y amplía la seguridad al tener una mayor revisión de errores.

Entre las diferencias del modo estricto con el modo no estricto se encuentran:

* No se permite el uso de la sentencia `with`.
* Todas las variables deben ser declaradas. Se arroja un ReferenceError si se asigna un valor a un identificador que no esté declarado.
* El `this` de una función invocada tendrá un valor de `undefined`
* Cuando una función se llama con `call()` o `apply()` el valor `this` es el mismo valor que se pasa como el primer argumento de `call()`o `apply()`.
* Las asignaciones a propiedades contra escritura arrojan un TypeError.
* El código que se pase a un `eval()` no podrá declarar variables o definir funciones.
* El objeto de argumentos en una función  retiene una copia estática de los valores pasados a la función.
* Se arroja un SyntaxError si el operador `delete` es seguido por un identiificador incorrecto (como una variable o una función).
* Intentar borrar una propiedad no configurable arroja un TypeError.
* Es un error de sintaxis definir dos o más propiedades con el mismo nombre.
* Es un error de sintaxis que dos o más parámetros de una función tengan el mismo nombre.
* Los enteros octales no se permiten.
* `eval` y `arguments` se tratan como palabras clave y no se permite cambiar su valor.
* Examinar el call stack está restringido. `arguments.caller` y `arguments.callee` arrojan un TypeError.

## Declaraciones

### `class`

Desde ES6, la declaración `class` crea una nueva clase y le da un nombre con el que se le puede referir .

```js
class Circle {
	constructor(radius) { this.r = radius; }
	area() { return Math.PI * this.r * this.r; }
	circumference() { return  2 * Math.PI * this.r; }
}
```

### `import` y `export`

Estas declaraciones se colocan juntas pra hacer que valores definidos en un módulo de código de JavaScript esté disponible en otro módulo.

> Módulo = archivo de código de JavaScript con su propio namespace

La única forma de la que un valor definido en un módulo puede ser usado en otro módulo es que el módulo que lo defina lo exporte con `export` y el módulo que lo importe lo haga con `import`:

```js
// geometry/constants.js
const PI = Math.PI;
const TAU = 2 * PI;
export { PI, TAU };
```

```js
import Circle from './geometry/circle.js';
import { PI, TAU } from './geometry/constants.js';
import { magnitude as hypotenuse } from './vectors/utils.js';
```

Cuando un módulo exporta un solo valor, se suele hacer con `export default`:

```js
export const TAU = 2 * Math.PI;
export function magnitude(x,y) { return Math.sqrt(x*x + y*y); }
export default class Circle {}
```