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

Si una llamada a una función no tiene efectos secundarios, no hay punto en llamarla a menosq ue sea parte de otra expresión o para completar una sentencia de asignación.

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