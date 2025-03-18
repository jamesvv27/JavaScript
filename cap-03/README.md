# 3 - Tipos, valores y variables

## Definiciones

Los tipos de JavaScript se dividen en _primitivos_ y de _objeto_. Los tipos primitivos incluyen números, cadenas de carácteres, y Booleanos.

Los tipos de dato `null`, y `undefined` son valores primitivos, pero no abarcan números, cadenas o Booleanos. Cada valor se considera el único de su tipo. El estándar de ES6 añade un nuevo tipo conocido como Symbol, que habilita las extensiones de lenguaje sin afectar a la retrocompatibilidad.

Cualquier valor de JavaScript que no sea un número, una cadena, un booleano, un symbol, un `null`, o un `undefined` se considera un objeto. Un objeto es una colección de _propiedades_ donde cada propiedad tiene un nombre y un valor (que puede ser un valor primitivo u otro objeto).

Un objeto ordinario de JavaScript es una colección de valores nombrados. Y adicionado a esto, JavaScript ofrece algunos tipos de objeto: 
* Un objeto _Set_ representa una serie de valores. 
* Un objeto _Map_ representa un mapeo de teclas a valores. 
* El tipo de objeto _RegExp_ representa patrones textuales y habilita operaciones de coincidencia, búsqueda y de reemplazo en cadenas de carácteres. 
* Un objeto de tipo _Date_ representa fechas y horas y soporta aritmética relacionada a fechas.
* El tipo _Error_ representa errores que pueden surgir al ejecutar un código.

Una diferencia clave de JavaScript a otros lenguajes es que las funciones y clases no solamente forman parte de la sintaxis del lenguaje, sino que son valores que pueden ser manipulados por programas JavaScript. Y al igual que cualquier valor que no sea primitivo, las funciones y clases son un tipo especial de objeto.

El interpretador de JavaScript realiza automáticamente una recolección de datos basura para el ahorro de memoria, esto significa que por lo general no es necesario preocuparse por hacer uso de métodos destructores para objetos o eliminación de otros valores. Si un valor ya no es alcanzable-- osea, el programa no tiene forma de referirse a ese valor-- el interpretador sabe que ya no va a ser usado más y libera automáticamente la memoria que estaba ocupando.

JavaScript soporta un estilo de programación orientado a objetos. Esto significa que en lugar de tener funciones definidas globalmente, los mismos tipos definen métodos para trabajar con valores. Por ejemplo, en lugar de pasar un valor a una función, invocamos el método de ese valor:

```js
a.sort(); // La version orientada a objetos de la función sort(a)
```

En JavaScript, los números, cadenas de texto, valores booleanos, y valores symbol también tienen métodos. `null` y `undefined` son los únicos valores a los que no se les puede invocar ningún método.

Los tipos de objeto de JavaScript son _mutables_ y los tipos primitivos son _inmutables_. Un valor de tipo mutable puede cambiar, por ejemplo, un programa de JavaScript puede cambiar los valores las propiedades de un objeto y de los elemento de un arreglo.
<br>
Por otra parte, los números, booleanos, symbols, `null`, y `undefined` son inmutables.

JavaScript puede convertir de forma autónoma los valores de un tipo a otro. Si un programa le pide al usuario una cadena y el usuario ingresa en númeor, el programa capaz de convertir automáticamente este número a una cadena.

Las constantes y las variables permiten usar nombres para referirse a valores en un programa. Una constante se declara con `const` y una variable se declara con `let` (o con `var`). Las constantes y variables de JavaScript son _sin tipo_, pues sus declaraciones no especifican qué tipo de valor se asignará.

## Números

Un valor de tipo numérico es usado para representar enteros y números reales aproximados. JavaScript es capaz de representar números tan grandes como ±1.7976931348623157 × 10³⁰⁸ y tan pequeños como ±5 x 10⁻³²⁴.

El formato de números de JavaScript permite representar a todos los enteros entre −9,007,199,254,740,992 (-2⁵³) y 9,007,199,254,740,992 (2⁵³).

Cuando un número aparece de forma directa en un programa JavaScript, se le llama _literal numérico_. JavaScript soporta a los literals numéricos en varios formatos. Cualquier literal numérico puede llevar el signo (-) para hacer a un número negativo.

### Literals enteros

En un programa JavaScript, un entero se escribe como una secuencia de dígitos. Por ejemplo:

```js
0
3
10000000
```

Además de literals enteros de base-10, JavaScript también reconoce valores hexadecimales (de base-16). Un literal hexadecimal comienza con `0X` seguido de una cadena de dígitos hexadecimales. Un dígito hexadecimal es alguno de los dígitos del 0 al 9 o las letras de la A a la F, que representan los valores del 10 al 15.

```js
0xff		// => 255 (15*16 + 15)
0xBADCAFE	// => 195939070
```

Desde ES6 es posible expresar enteros en valor binario (base-2), u octal (base-8) utilizando lo prefijos `0b`y `0o`.

```js
0b10101	// => 21	(1*16 + 0*8 + 1*4 + 0*2 + 1*1)
0o377	// => 255	(3*64 + 7*8 + 7*1)
```

### Literals de punto flotante

Los literals de punto flotante pueden tener un punto decimal. Estos usan la sintaxis tradicional para números reales. Un valor real se representa como la parte entera de un número, seguido de un punto decimal y la parte fraccionaria de ese número.

Los literals de punto flotante también se pueden representar usando la notación exponencial: un número real seguido de la letra e, seguido de un signo de + o -, seguido de un exponente entero.

```
[digits][.digits][(E|e)[(+|-)]digits]
```

```js
3.14
2345.67
.33333333333333
6.02e23		// 6.02 x 10²³
1.4738223E-32	// 1.4738223 x 10⁻³²
```

### Aritmética en JavaScript

Los programas de JavaScript funcionan con los operadores aritméticos que brinda el lenguaje. Entre estos se incluyen el `+` para la adición, el `-` para la sustracción, el `*` para la multiplicación, el `/` para la división, y el `%` para el residuo de una división. ES2016 añade el operador `**` para la exponenciación.

Además de estos operadores, JavaScript soporta operaciones matemáticas más complejas a través de una serie de funciones y constantes definidas en las propiedades del objeto `Math`:

```js
Math.pow(2,53) // => 2 a la 53 potencia
Math.round(.6) // => 1.0: Redondear al entero más cercano
Math.ceil(.6) // => 1.0: Redondear hasta un entero
Math.floor(.6) // => 0.0: Redondear al entero antecesor
Math.abs(-5) // => 5: Valor absoluto
Math.max(x,y,z) // Retornar el argumento más grande
Math.min(x,y,z) // Retornar el argumento más pequeño
Math.random() // Número aleatorio
Math.PI // π: Circunferencia de un círculo / diámetro
Math.E // e: Base del logaritmo natural
Math.sqrt(3) // => 3**0.5: Raíz cuadrada
Math.pow(3, 1/3) // => 3**(1/3): Raíz cúbica
Math.sin(0) // Trigonometría. (también abarca Math.cos, Math.atan)
Math.log(10) // Logaritmo natural de un número
Math.log(100)/Math.LN10 // Logaritmo de 100 de base 10
Math.log(512)/Math.LN2 // Logaritmo de 512 de base 2
Math.exp(3) // Math.E cubo
```

La aritmética en JavaScript no levanta errores en caso de un overflow, underflow, o división entre 0. Cuando el resultado de una operación numérica es más grande que el mayor número representable, el resultado es un valor infinito. (`Infinity`), esto también ocurre cuando el valor absoluto de un valor negativo es mayor que el valor absoluto del mayor númeor negativo representable (`-Infinity`). Operar cualquier valor infinito resulta en otro valor infinito (posiblemente con el signo contrario).

Un underflow ocurre cuando el resultado de una operación numérica es más cercano a 0 que al menor número representable. En este caso, JavaScript retornará 0. Si esto ocurre con un número negativo, JavaScript retornará un valor especial conocido como "0 negativo".

Al dividir entre 0, JavaScript simplemente retornará infinito o infinito negativo. Si dividimos 0 entre 0, nos devolverá un valor `NaN` (valor que no es número), que también sale al dividir infinito entre infinito, la raíz cuadrada de un número negativo, o al usar operadores aritméticos con operandos que no se pueden convertir a números.

JavaScript tiene predefinidas las constantes globales `Infinity` y `NaN`, que también están disponibles como propiedades del objeto `Number`

```js
Infinity
Number.POSITIVE_INFINITY
1/0
Number.MAX_VALUE * 2

-Infinity
Number.POSITIVE_INFINITY
-1/0
-Number.MAX_VALUE * 2

NaN
Number.NaN
0/0
Infinity/Infinity

Number.MIN_VALUE/2
-Number.MIN_VALUE/2
-1/Infinity
-0
```

Las siguientes son propiedades de `Number` definidas en ES6:

```js
Number.parseInt()
Number.parseFloat()
Number.isNaN(x)	// Verifica si un valor es un NaN
Number.isFinite(x) // Verifica si un valor es un número y finito
Number.isInteger(x) // Verifica si un valor es un entero
Number.isSafeInteger(x) // Verifica si el valor dado es un entero mayor a -(2^53) y menor a (2^53)
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON // => 2**-52
```

A un valor `NaN` no se le puede comparar su igualdad con otro valor, ni consigo mismo. No podemos escribir `x === NaN` para verificar si `x` es igual a `NaN`, pero podemos escribir `x != x` o usar el método `Number.isNaN(x)`, y dichas expresiones se cumplirán si el número tiene el mismo valor que la constante global `NaN`.

La función `Number.isFinite()` retorna un `true` si su argumento es un número diferente a `NaN`, `Infinity`, o a `-Infinity`.

El valor de 0 negativo es algo extraño, pues se compara como un número equivalente al 0 positivo, por lo que ambos valores son casi indistinguibles, excepto cuando se usan como divisores.

```js
let zero = 0;
let negz = -0;
zero === negz // => true
1/zero == 1/-negz // => false: El resultado de uno es Infinity y el del otro es -Infinity
```

### Punto flotante Binario y errores de redondeo

Para ser exactos, 18,437,736,874,454,810,627 números reales pueden ser representados con precisión por el formato de punto flotante de JavaScript. Si usamos números reales en JavaScript, la representación de estos será a menudo una aproximación del número en cuestión.

La representación de punto flotante IEEE-754 usada por JavaScript es una representación binaria, el problema es que a esta representación le cuesta mostrar fracciones como 1/10 (0.1) o 1/100.

```js
let x = .3 - .2;
let y = .2 - .1;
x === y // => false: Por alguna razón no son equivalentes
x === .1 // => false
y === .1 // => true
```

Debido a errores de redondeo, las aproximaciones entre ambas operaciones son distintas, aunque cercanas, y al valor correcto.

Una solución a este problema es usar enteros a escala, es decir, representar fracciones con enteros en lugar de hacerlo con valores decimales.

### BigInt

Una característica definida en ES2020 es un tipo numérico conocido como BigInt, que consiste en un tipo de valor numérico cuyos valores son enteros. Este tipo de valor numérico fue añadido para permitir la representación de enteros de 64-bits. Los valores BigInt pueden tener bastentes dígitos.

Los literals BigInt se escriben como una cadena de dígitos seguidos de una `n`. Por defecto son de base 10, aunque podemos usar los prefijos `0b`, `0o` y `0x`:

```js
1234n
0b111111n
0o7777n
0x800000000000000n
```

Podemos usar la función `BigInt()` para convertir número o cadenas ordinarias a valores BigInt:

```js
BigInt(Number.MAX_SAFE_INTEGER)
let string = "1" + "0".repeat(100);
BigInt(string)
```

La aritmética con valores BigInt funciona de forma similar que con valores ordinarios de JavaScript, solo que la división elimina cualquier residuo y redondea hacia abajo.

### Fechas y horas

JavaScript define una clase Date para manipular números que  representan fechas y horas. Las fechas en JavaScript son objetos, aunque también tienen una representación numérica como un _timestamp_ que especifica el número de milisegundos concurridos desde el 1 de Enero de 1970.

```js
let timestamp = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString
```

## Texto

El tipo de dato de JavaScript para representar el texto son las cadenas de carácteres, que consisten en una secuencia inmutable de valores de 16-bits, que por lo general representan un carácter Unicode (UTF-16). La longitud de una cadena es el número de valores que contiene. Las cadenas y arreglos de JavaScript cuentan con un índice de base 0, pues el primer valor se encuentra en la posición 0.

Desde ES6, las cadenas son iterables, y al operarlas con un bucle, se iterarán los carácteres de la cadena y no los valores de 16-bits en sí.

### Literals

Para incluir una cadena, es necesario abarcar los carácteres de la cadena dentro de un par de comillas simples `''`, comillas dobles `""`, o backticks ` `` `.

Si queremos colocar una cita de comillas dobles en una cadena, la podemos contener dentro de comillas simples. Y del mismo modo lo podemos hacer para mostrar comillas simples o backticks en una cadena.

```js
""
'testing'
"3.14"
'name="myform"'
"Teclao'"
`"Me dan 'calambres'", dijo.`
```

Las cadenas delimitadas con backticks son una característica de ES6.

Las versiones anteriores de JavaScript requerían que las literals de cadenas fueran escritas en una sola línea. Aunque desde ES5, es posible separar entre líneas una cadena con el carácter `\`. Y si necesitamos incluir una nueva línea dentro de comillas simples o dobles, podemos usar la secuencia `\n`.

```js
// Una cadena que representa 2 lineas
'dos\lineas'

// Una cadena de una sola linea
"una\
 linea\
 solita"
 
// Cadena de 2 líneas escrita en 2 líneas
`yo soy
tu padre`
```

### Secuencias de escape

El diagonal `\` al combinarse con el carácter que le sigue, representa un carácter que no puede ser representable de otro modo dentro de la cadena.

Por ejemplo, si necesitamos usar el apóstrofe dentro de una cadena escrita con comillas simples, podemos usar la secuencia `\'`:

```js
'Hágase a un lao\', amigo'
```

#### Tabla de secuencias de escape de JavaScript

<table>
	<tr>
		<td>Secuencia</td>
		<td>Carácter representado</td>
	</tr>
	<tr>
		<td>\0</td>
		<td>Carácter NUL</td>
	</tr>
	<tr>
		<td>\b</td>
		<td>Retroceso</td>
	</tr>
	<tr>
		<td>\t</td>
		<td>Tabulación horizontal</td>
	</tr>
	<tr>
		<td>\n</td>
		<td>Separación de línea</td>
	</tr>
	<tr>
		<td>\v</td>
		<td>Tabulación vertical</td>
	</tr>
	<tr>
		<td>\f</td>
		<td>Panel</td>
	</tr>
	<tr>
		<td>\"</td>
		<td>Comillas dobles</td>
	</tr>
	<tr>
		<td>\'</td>
		<td>Comilla simple o apóstrofe</td>
	</tr>
	<tr>
		<td>\\</td>
		<td>Diagonal invertida</td>
	</tr>
	<tr>
		<td>\xnn</td>
		<td>Carácter Unicode (2 dígitos)</td>
	</tr>
	<tr>
		<td>\unnnn</td>
		<td>Carácter Unicode (4 dígitos)</td>
	</tr>
	<tr>
		<td>\u{n}</td>
		<td>Carácter Unicode. (1 a 6 dígitos entre 0 y 10FFFF)</td>
	</tr>
</table>

### Trabajando con cadenas

Es posible concatenar cadenas con el operador `+`:

```js
let msg = "Hola, " + "pedro";
```

Lo bueno de las cadenas en JavaScript es que pueden ser comparadas fácilmente con los operadores de igualdad y diferencia (`===` y `!==`). También se les puede aplicar los operadores comparativos `<`, `<=`, `>`, y `>=`.

Para determinar la longitud de una cadena, podemos usar la propiedad `length`:

```js
s.length
```

Adicionado a esta propiedad, JavaScript nos brinda un API para trabajar con cadenas:

```js
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split at delimiter string
// Searching a string
s.indexOf("l") // => 2: position of first letter l
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.indexOf("zz") // => -1: s does not include the substring "zz"
s.lastIndexOf("l") // => 10: position of last letter l
	// Boolean searching functions in ES6 and later
s.startsWith("Hell") // => true: the string starts with these
s.endsWith("!") // => false: s does not end with that
s.includes("or") // => true: s includes substring "or"
// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"
// Inspecting individual (16-bit) characters of a string
s.charAt(0) // => "H": the first character
s.charAt(s.length-1) // => "d": the last character
s.charCodeAt(0) // => 72: 16-bit number at the specified position
s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits
// String padding functions in ES2017
"x".padStart(3) // => " x": add spaces on the left to a length of 3
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use +
operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n
copies. ES6
```

Las cadenas de carácteres en JavaScript son inmutables, por lo que métodos como `replace()` retornan una nueva cadena.

Las cadenas también pueden ser tratadas como arreglos de lectura, y es posible acceder a carácteres individuales de una cadena utilizando la sintaxis de los corchetes:

```js
let s = "hola viejo";
s[0]	// => "h"
s[s.length-1]	// => "o"
```

### Literals

Desde ES6, es posible delimitar literals de cadenas con los backticks:

```js
let s = `hola pedro`;
```

Estas literals pueden incluir otras expresiones de JavaScript, que se convierten en valores para una cadena de carácteres:

```js
let name = "Juan";
let greeting = `Hola ${ name }.`;
```

Todo lo que esté dentro de un `${}` se interpreta como una expresión de JavaScript.
Puede contener secuencias de escape, cualquier número de líneas nuevas, etc.

#### Tags

Si el nombre o "tag" de una función viene antes de un backtick de aperturaa, el texto y los valores dentro del literal se pasan a la función, y el valor del tag es lo que retorne la función.

Por ejemplo, ES6 introduce la función `String.raw()`, y la podemos emplear de la siguiente manera:

```js
`\n`.length

String.raw`\n`.length // => Nos devuelve los carácteres brutos de la cadena: una diagonal invertida y la letra n
```

### Coincidencia de patrones

## Valores Booleanos

Un valor booleano puede consistir en un verdadero o un falso. Las palabras clave `true` y `false` representan los valores posibles para una variable de este tipo.

Estos valores se usan en estructuras de control. Por ejemplo, una sentencia `if/else` en JavaScript realiza una serie de instrucciones dado un valor booleano que se obtiene al hacer una comparación.

Cualquier valor de JavaScript se puede convertir en un valor booleano, los siguientes valores se tratan como un `false`:

```js
undefined
null
0
-0
NaN
"" // Cadena vacía
```

También podemos usar la sentencia if para verificar si una variable guarda un objeto o un `null`:

```js
if( o !== null)
```

El operador de desigualdad compara a la variable `o` con `null`, pero esto también lo podemos omitir y escribir lo siguiente en su lugar:

```js
if (o)
```

Y si hacemos esto, se verificará si `o` no es `false` o un valor relacionado con la falsedad como `null` o `undefined`.

Los valores booleanos también cuentan con un método `toString()` para convertirlos a cadenas de texto "true" o "false".

Luego tenemos a los operadores booleanos. Entre estos se encuentra el operador `&&` (AND), en el que se pasan 2 o más variables que deben ser verdaderas para que la evaluación sea verdadera. La evaluación del operador `||` (OR) es verdadera si al menos uno de los valores es verdadero. Y por último tenemos al operador `!` (NOT), que marca una evaluación como verdadera cuando su operando es falso y como falsa cuando su operando es verdadero.

### `null` y `undefined`

A `null` se le conoce como la ausencia de un valor, y usar el operador `typeof` en un `null` retorna la cadena "object", indicando que `null` puede tomarse como un "no objeto".

JavaScript también cuenta con `undefined`, que aparece cuando una variable no ha sido inicializada, o cuando el elemento de un arreglo no existe.

El operador de igualdad `==` considera a `null` y a `undefined` como valores equivalentes, pero podemos usar el operador de igualdad estricto `===` para distinguirlos.

`null` y `undefined` se consideran valores de falsedad; se comportan como un `false` cuando se requiere un valor booleano.

## Símbolos

Los símbolos aparecieron en ES6 para fungir como nombres de propiedades, pero sin ser cadenas de carácteres.

```js
let strname = "string name";
let symname = Symbol("propname"); // => symbol
```

Este no tiene una sintaxis literal, para obtener un valor de Símbolo, usamos la función `Symbol()`. Esta función jamás retorna el mismo valor dos veces, por lo que al usar la función para obtener el valor de un símbolo, podemos usar ese valor como el nombre de una propiedad nueva de un objeto.

A esta función le podemos pasar una cadena opcional, en caso de hacer esto, la cadena se incluirá en la salida del método `toString()` del símbolo. Y sí, llamar a esta función dos veces con la misma cadena producirá dos valores de símbolos distintos.

```js
let s Symbol("sym_x");
s.toString()
```

JavaScript define un registro global de símbolos. La función `Symbol.for()` toma una cadena como argumento y retorna un valor de símbolo asociado a la cadena que se le pase.
Si no existe ningún símbolo relacionado con la cadena, se crea uno nuevo y se retorna, pero de lo contrario, se retorna el símbolo existente.

```js
let s = Symbol.for("shared");
let t = Symbol.for("shared");

s === t // => true
```

## Objeto global

Existe un valor de objeto, conocido como _objeto global_ que es un objeto con propiedades definidas de forma global en un programa de JavaScript.
Cuando el interpretador de JavaScript corre, se crea un nuevo objeto global, y le da una serie inicial de propiedades que definen:

* Constantes globales como `undefined`, `Infinity`, y `NaN`
* Funciones globales como `isNaN()`, `parseInt()`, y `eval()`
* Funciones constructoras como `Date()`, `RegExp()`, `String()`, `Object()`, y `Array()`
* Objetos globales como Math y JSON.

En Node, el objeto global tiene una propiedad llamada `global`, que es el objeto global; siempre podemos referirnos al objeto global como `global` en programas Node.

En navegadores web, el objeto Window es el objeto global para todo el código JavaScript que se encuentre en la ventana del navegaodr. Este objeto tiene una propiedad `window` que apunta a sí misma, que puede usarse para referirse al objeto global.

A partir de ES2020, se ha definido a `globalThis` como la forma estándar de referirse al objeto global en navegadores web y en Node.

## Valores primitivos inmutables y Referencias de objeto mutables

Existe una gran diferencia entre valores primitivos y objetos. Los valores primitivos son inmutables, pues no es posible cambiar sus valores, y esto ocurre de igual forma con cadenas, pues como habíamos visto anteriormente, los métodos que actualizan una cadena retornan una nueva cadena, más no la cambian.

La diferencia que tienen los objetos de los valores primitivos, es que son mutables:

```js
let o = {
	x: 1
};

o.x = 2; // Valor cambiado

let a = [1,2];
a[0] = 2; // Valor de un arreglo cambiado
```

## Conversiones de tipo

JavaScript permite convertir valores si espera uno distinto.

La siguiente tabla indica cómo se convierten los valores de un tipo a otro en JavaScript.

<table>
	<tr>
		<td>Valor</td>
		<td>a String</td>
		<td>a Número</td>
		<td>a Booleano</td>
	</tr>
	<tr>
		<td>undefined</td>
		<td>"undefined"</td>
		<td>NaN</td>
		<td>false</td>
	</tr>
	<tr>
		<td>null</td>
		<td>"null"</td>
		<td>0</td>
		<td>false</td>
	</tr>
	<tr>
		<td>true</td>
		<td>"true"</td>
		<td>1</td>
		<td></td>
	</tr>
	<tr>
		<td>false</td>
		<td>"false"</td>
		<td>0</td>
		<td></td>
	</tr>
	<tr>
		<td>""</td>
		<td></td>
		<td>0</td>
		<td></td>
	</tr>
	<tr>
		<td>"1.2"</td>
		<td></td>
		<td>1.2</td>
		<td>true</td>
	</tr>
	<tr>
		<td>"one"</td>
		<td></td>
		<td>NaN</td>
		<td>true</td>
	</tr>
	<tr>
		<td>0</td>
		<td>"0"</td>
		<td></td>
		<td>false</td>
	</tr>
	<tr>
		<td>-0</td>
		<td>"0"</td>
		<td></td>
		<td>false</td>
	</tr>
	<tr>
		<td>1</td>
		<td>"1"</td>
		<td></td>
		<td>true</td>
	</tr>
	<tr>
		<td>Infinity</td>
		<td>"Infinity"</td>
		<td></td>
		<td>true</td>
	</tr>
	<tr>
		<td>-Infinity</td>
		<td>"-Infinity"</td>
		<td></td>
		<td>true</td>
	</tr>
	<tr>
		<td>NaN</td>
		<td>"NaN"</td>
		<td></td>
		<td>false</td>
	</tr>
	<tr>
		<td>{}</td>
		<td></td>
		<td></td>
		<td>true</td>
	</tr>
	<tr>
		<td>[]</td>
		<td>""</td>
		<td>0</td>
		<td>true</td>
	</tr>
	<tr>
		<td>[9]</td>
		<td>"9"</td>
		<td>9</td>
		<td>true</td>
	</tr>
	<tr>
		<td>['a']</td>
		<td>join()</td>
		<td>NaN</td>
		<td>true</td>
	</tr>
	<tr>
		<td>function()</td>
		<td></td>
		<td>NaN</td>
		<td>true</td>
	</tr>
</table>

### Conversiones y equidad

JavaScript tiene dos operadores que pueden verificar igualdad. El operador de igualdad estricto `===` no considera a sus operandos iguales si no son del mismo tipo. Si por otro lado, usamos el operador `==`,  este tendrá una definición de igualdad más flexible.

Una sentencia `if` puede convertir un valor como `undefined` a `false`, pero el operador `==` nunca convertirá sus operandos a booleanos.
	
### Conversiones explícitas

Para realizar una conversión de tipo explícito, podemos usar las funciones `Boolean()`, `Number()`, y `String()`:

```js
Number("3")
String(false)
Boolean([])
```

Cualquier valor diferente a `null` y a `undefined` tiene un método `toString()`.

#### Operadores

Si un operando de un `+` es una cadena, convertirá el otro valor, y el resultado también será una cadena. Un operador `+` unario convertirá su operando a un número. Y el operador `!` convierte su operando a un booleano y lo niega.

```js
x + "" // => String(x)
+x // => Number(x)
x-0 // => Number(x)
!!x // => Boolean(x)
```

Si queremos convertir a números más específicos de modo que nos den control sobre los puntos decimales, o la notación exponencial, podemos usar los métodos `toFixed()`, o `toExponential()`. Por otro lado, el método `toPrecision()` convierte un número a una cadena con el número de dígitos que especifiquemos, y usa la notación exponenial si el número de dígitos no alcanza a mostrar toda la parte entera del número.

Las funciones globales `parseFloat()`, y `parseInt()` nos permiten hacer parse dependiendo de si queremos que un número tenga únicamente los enteros o si también queremos que los decimales se representen.


## Declaración de variables

Desde ES6 es posible declarar variables con las palabras clave `let` y `const`, anterior a ES6 las variables se declaraban con `var`.

### Declaraciones con `let` y `const`

Desde ES6, las variables se declaran con `let`, y es posible declarar varias en una sola sentencia:

```js
let a = 0;
let d;
let i = 0, j = 0, k = 0;
```

Si no se especifica un valor al usar la sentencia `let`, la variable se declara con un valor `undefined`.

Una variable constante se declara con `const`, y a estas no se les puede cambiar su valor:

```js
const pi = 3.1416;
```

### Alcance de las variables y constantes

El alcance de una variable `let` y `const` se encuentra dentro del bloque de código en el que se declararon. Si una variable se declara fuera de cualquier bloque de código, esta será una variable _global_, o una constante con alcance global. En navegadores web, el alcance de una variable global será el documento HTML en el que se defina; Si un `<script>` declara una variable global, esa variable estará definida en todos los elementos de ese documento.

### Declaraciones repetidas

Es un error de sintaxis usar el mismo nombre al declarar con `let` o `const` en un mismo alcance.

```js
const x = 1;
if (x ==== 1) {
	let x = 2;
	console.log(x); // 2
}
console.log(x); // 1
let x = 3; // error de sintaxis
```

### Declaraciones y tipos

En JavaScript, no es necesario declarar un tipo de variable; una variable puede almacenar un valor de cualquier tipo, y es posible asignar un número a una variable y asignarle después una cadena a esa misma variable.

```js
let i = 10;
i = "ten";
```

### Declaración de variables con `var`

En versiones anteriores a ES6, las variables son declaradas únicamente con la palabra clave `var`, sin posibilidad de declarar constantes.

```js
var x;
```

Una variable declarada con `var` no tiene un alcance de bloques, solamente tienen un alcance dentro de la función en la que se declaren.

Si declaramos una variable con `var` fuera de una función, se declara como una variable global, pero esta se tratará similar a una propiedad del objeto global.

```js
// Fuera de cualquier función:
var x = 2;
globalThis.x = 2;
```

También es legal declarar una variable o redeclarar una variable varias veces con `var`, y al declarar un `var` dentro de una función--no importa en qué linea de la función se declare--, siempre se moverá y se tratará como si se hubiera escrito al principio de la función.

### Desestructuración

ES6 implementa una sintaxis de desestructuración, en la que el valor del lado derecho del igual es un arreglo o un objeto, y el lado izquierdo especifica uno o más nombres de variables usando una sintaxis que imita la sintaxis de objetos y arreglos. Cuando una desestructuración ocurre, uno o más valores se extraen de la derecha y se almacenan en las variables nombradas en la izquierda.

```js
let [x,y] = [1,2];
[x,y] = [x+1,y+1];
[x,y] = [y,x];
[x,y]
```

El número de variables del lado izquierdo no tiene que coincidir con la cantidad de elementos de la derecha. Si hay más variables en el lado izquierdo, a las faltantes se les da el valor `undefined`, y se ignoran los valores extra de la derecha.
La lista de valores de la izquierda puede incluir comas extra para saltarse algunos valores de la derecha:

```js
let [x,y] = [1]; // x == 1; y == undefined
[x,y] = [1,2,3]; // x == 1; y == 2
[,x,,y] = [1,2,3,4]; // x == 2; y == 4
```

Y si queremos almacenar todos los valores sin usar en una sola variable al desestructurar un arreglo, usamos los puntos suspensivos (`...`):

```js
let [x, ...y] = [1,2,3,4]; // y = [2,3,4]
```