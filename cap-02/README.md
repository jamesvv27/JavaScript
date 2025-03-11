# 2 - Estructura Léxica

## Texto de un programa JavaScript

JavaScript es un lenguaje sensible a mayúsculas y minúsculas, por lo que las palabras clave, variables, nombres de funciones, y los demás identificadores, siempre deben ser esscritos con mayúsculas y minúsculas consistentes. Por ejemplo: `online`, `Online`, `OnLine`, y `ONLINE` son nombres de cuatro variables distintas.

JavaScript ignora los saltos de línea y espacios que se encuentren entre tokens. Aunque, también es capaz de reconocer el carácter de espacio `\u0020`, las tabulaciones de indentación , carácteres Unicode, entre otros.

## Comentarios

JavaScript permite colocar dos tipos de comentarios. Cualquier texto entre  un `//` y el fin de una línea es considerado un comentario, y el intérprete lo ignora como código. Además de esto, cualquier tipo de texto entre un `/*` y un `*/` también se les trata como comentarios, los cuales si pueden abarcar varias líneas.

```js
// Hola
/* Soy homero chino */ // Soy como homero pero

/*
 *el asterisco al inicio de esta línea
 no afecta de ningún modo a la sintaxis
 y puede ser omitido.
Soy homero
Homero chino
*/
```

## Lierals

Un _literal_ es un valor de datos que aparece directamente en un programa. Por ejemplo:

```js
12 // El doce
1.2 // El uno punto dos
"Hola" // Una cadena
'i' // Un caracter
true // Valor bool
false // Valor bool
null // Nada nadita
```

## Identificadores y palabras reservadas

Un _identificador_ es usado para nombrar constantes, variables, propiedades, funciones, clases, y para brindar etiquetas a ciertos bucles. Un identificador de JavaScript debe de comenzar con una letra, un guión bajo (_), o un signo de dinero ($). Los carácteres precedentes pueden ser de igual manera los mencionados anteriormente **y** dígitos.

```js
// Identificadores válidos

u
noooo_mi_compa
r2d2
_giussepe
$str
```

### Palabras reservadas

Las siguientes son palabras clave que no se deben usar para nombras de constantes, varibles, funciones, clases (en este caso plabras como `if`, `while`, `for`). 
Existen unas que se usan en contextos específicos (`from`, `of`, `get`, `set`), y otras que no se pueden reservar totalmente con el fin de mantener la retrocompatibilidad (como `let`, que se puede usar como nombre de variable si se declara con `var` y no está dentro de una clase ni con un `const`).

```js
// Palabras reservadas

as	const		for		null	try
void	export		from		of	typeof
async	continue	function	return	var
while	extends		get		set
await	debugger	if		static
with	false		import		super
break	default		in		switch
yeild	finally		instanceof	target
case	delete		let		this
catch	do		new		throw
class	else		null		true
```

```js
// Otras palabras clave reservadas

enum		implements	interface
package		private		protected
public
```

Además de estas, se recomienda no utilizar `arguments` y `eval` como identificadores.

## Unicode

Los programas de JavaScript se escriben utilizando la serie de carácteres Unicode. Podemos usar este tipo de carácteres en cadenas, comentarios, constantes, y variables.

```js
const raúl = -5;
const Ænima = 15;
```

Por conveniencia y facilidad de edición, es más común utilizar solamente carácteres ASCII.

### Secuencias de Escape

JavaScript incluye secuencias de escape que nos permiten escribir carácteres Unicode utilizando carácteres ASCII. Estas secuencias de escape comienzan con los carácteres `\u` y son precedidos por cuatro dígitos hexadecimales o por uno a seis dígitos hexadecimales dentro de llaves.

Estas secuencias de escape pueden aparecer en cadenas, expresiones, e identificadores, pero no en palabras clave.

```js
let café = 1;

caf\u00e9

caf\u{E9}
```

El método de escribir secuencias de escape con llaves fue introducido en ES6.

### Normalización

Debido a que hay varias formas de escribir un carácter Unicode (por ejemplo, la cadena "é" puede ser codificada como un `\u00E9` o como un `e\u0301`), pueden haber ocasiones en las que en un editor de texto estos carácteres luzcan idénticos, pero tengan una codificación binaria diferente. Y esto puede llevar a confusiones bastante complejas.

```js
const café = 1; // El nombre de esta constante es "caf\u{e9}"
const café = 2; // El nombre de esta constante es "cafe\u{301}"

// Las anteriores son dos constantes diferentes que son indistinguibles en un editor de texto
```

El estándar del Unicode define la codificación preferida a todos los carácteres y establece un procedimiento de normalización. JavaScript asume que el código fuente que está interpretando ya ha sido normalizado, y no le hace nada.

Si usamos carácteres Unicode es necesario asegurarnos de que una normalizción Unicode (que haya sido realizada por el editor u otra herramienta) haya pasado por nuestro código fuente para evitar tener identificadores idénticos visualmente pero de distinto valor.

## Punto y coma

JavaScript usa el punto y coma (`;`) para separar una sentencia de la otra. Esto es imporante para hacer un código más claro. Aunque en JavaScript, es posible omitir un punto y coma entre dos sentencias si estas están escritas en líneas diferentes.

En el siguiente código podemos omitir el primer punto y coma:

```js
a = 3;
b = 4;
```

Si por el contrario, escribimos el código de la siguiente forma, el primer punto y coma **no** debe ser omitido:

```js
a = 3; b = 4;
```

Hay que tener en claro que JavaScript no trata cada línea nueva como un punto y coma. Solo lo hace si el código no se puede compilar sin añadir un punto y coma implícito.

```js
let a
a
=
3
console.log(a)
```

JavaScript interpreta este código de esta forma:

```js
let a; a = 3; console.log(a);
```

Si una sentencia comienza con un `(`, `[`, `/`, `+` o un `-`, hay una probabilidad de que pueda ser interpretada como una continuación de la sentencia anterior. Y es por esto que algunos programadores añaden un punto y coma defensivo al inicio de una sentencia que inicie con uno de estos carácteres para que funcione de forma correcta:

```js
let x = 0
;[x, x+1 ,x+1].forEach(console.log)
```

Hay excepciones a la regla de que JavaScript interpreta separaciones de línea como puntos y comas cuando la segunda línea no puede ser interpretada como una continuación de la primera.

La primera excepción radica en las sentencias `return`, `throw`, `yield`, `break`, y `continue`. Esto debido a que pueden ser escritos por sí solos o precedidos por un identificador o una expresión.

```js
return
true;
```

Si escribimos lo anterior, JavaScript lo interpretará como:

```js
return; true;
```

La segunda excepción involucra a los operadores `++` y `--`. Estos operadores pueden aparecer antes o después de una expresión, y si queremos que sean el sufijo de una expresión, debemos escribirlos en la misma línea.

La tercera excepción se encuentra en las funciones que se definen con la sintaxis `=>`, la cual debe aparecer en la misma línea que la lista de parámetros.