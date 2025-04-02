# 4 - Expresiones y operadores

Una _expresión_ es una frase en JavaScript capaz de producir un valor, por ejemplo, el nombre de una variable es una expresión que revisa que un valor se haya asignado a esa variable. Y las expresiones complejas nacen de expresiones más simples, por ejemplo, una expresión que evalúa  arreglos seguido de un corchete, una expresión que evalúa a un entero, y un corchete de cierre.

La forma más común de crear una expresión compleja a raíz de expresiones más simples es usando un _operador_. Un operador combina los valores de sus operandos y los evalúa a un nuevo valor. 

## Expresiones primarias

Las _expresiones primarias_ son aquellas que se sostienen por sí solas, pues no incluyen más expresiones simples.
<br>
En JavaScript, estas expresiones son constantes o literals, palabras clave del lenguaje, y referencias a variables.

Los literals son valores constantes que están implementados de forma directa en el programa, y lucen de la siguiente forma:

```js
1.23
"hello"
/pattern/
```

Algunas de las palabras reservadas de JavaScript son expresiones primarias:

```js
true
false
null
this
```

`this` no es una constante-- evalúa a direntes valores en distintas partes del programa--, y se usa en programación orientada a objetos dentro del cuerpo de un método.

El tercer tipo de expresiones primarias constan de referencias a una variable, constante o propiedad del objeto global:

```js
i
sum
undefined
```

Si un identificador aparece por sí solo en un programa, JavaScript asume que es una variable o una constante o una propiedad del objeto global y revisa su valor.

## Inicializadores de objetos y de arreglos

### Arreglos

Estas son expresiones cuyo valor es un nuevo objeto o arreglo. A estas expresiones se les llama en algunas ocasiones como literals de objeto y literals de arreglos, solo que no son expresiones primarias, pues incluyen un número de subexpresiones que especifican los valores de una propiedad o elemento.

Un inicializador de arreglos es una lista de expresiones separada por comas que se encuentra dentro de corchetes. El valor de un inicializador de arreglos es un nuevo arreglo creado.

Los elementos de un arreglo se inicializan en los valores/expresiones de la lista:

```js
[]	// Arreglo vacío
[1+2,3+4] // Arreglo de 2 elementos
```

Las mismas expresiones pueden ser inicializadores de otros arreglos, por lo que es posible crear matrices con esto:

```js
let matrix  = [[1,2,3], [4,5,6], [7,8,9]];
```

Cada vez que se evalúa un inicializador de arreglos, también se evalúan las expresiones dentro de este. Esto quiere decir que el valor de una expresión puede ser diferente cada vez que se evalúe.

Es posible incluir elementos indefinidos en un arreglo al omitir un valor entre las comas:

```js
let sparseArray = [1,,,,5];
```

### Objetos

Las expresiones para inicializar objetos son como los inicializadores de arreglos, solo que en lugar de corchetes se utilizan llaves, y cada subexpresion debe tener el prefijo del nombre de una propiedad y un `:`.

```js
let p = {x: 2.3, y: -1.2};
let q = {};

q.x = 2.3; q.y = -1.2;
```

Desde ES6, las lietrals de objeto tienen una sintaxis más completa, y las literals de objeto pueden anidarse:

```js
let rectangle {
	upperLeft: { x: 2, y: 2 },
	lowerRight: { x: 4, y: 5 }
};
```

## Expresiones de definición de funciones

El valor de una de estas expresiones es una nueva función definida, o "literal de función".

Esta epresión consiste en la palabra clave `function` seguido de una lista separada por comas de 0 o más identificadores (parámetros) dentro de un paréntesis. Después de esto va el cuerpo de la función contenido dentro de llaves.

```js
let square = function(x) { return x * x; };
```

Al definir una función también se puede incluir el nombre de la función. Desde ES6, las expresiones de funciones pueden usar la sintaxis de "flechas".

## Expresiones de acceso a propiedades

Esta expresión evalúa al valor de una propiedad de un objeto. JavaScript define dos sintaxis para acceso a propiedades:

```js
expression . identifier
expression [ expression ]
```

El primer estilo es una expresión seguida de un punto y un idetificador. La expresión especifica el objeto, y el identificador especifica el nombre de la propiedad deseada.

El segundo estilo de acceso de propiedad sigue la primer expresión con otra expresión contenida en corchetes. Esta segunda expresión especifica el nombre de la propiedad deseada o el index del elemento de arreglo deseado.

```js
let o {x: 1, y: {z: 3}};
let a = [o, 4, [5, 6]];

o.x	// => propiedad x de la expresion o

o.y.z

o["x"]	// => propiedad x del objeto o
a[1]
a[2][1]
a[0].x
```

La expresión antes del `.` o del `[` se evalúa, y si el valor es `null` o `undefined` la expresión arroja un TypeError, pues son valores que no pueden tener propiedades.

Si la expresión del objeto es seguida de un punto y un identificador, el valor de la propiedad nombrada con ese identificador se busca y se convierte en el valor de la expresión.
Si la expresión del objeto es seguida de otra expresión en corchetes, esa segunda expresión se evalúa y se convierte a una cadena. El valor de esa expresión será entonces el valor de la propiedad nombrada con esa cadena.

Si en cualquiera de los dos casos, la propiedad nombrada no existe, entonces el valor de la expresión de propiedad será `undefined`.

### Acceso a propiedad condicional

ES2020 añade dos nuevos tipos de expresiones para acceso a propiedades:

```js
expression ?. identifier
expression ?.[ expression ]
```

En JavaScript, `null` y `undefined` son los únicos dos valores que no tienen propiedades, y al usar una expresión ordinaria de propiedad el programa nos arrojará un TypeError si la expresión de la izquierda es alguno de estos dos valores.

Pero ahora podemos usar la sintaxis `?.` y `?.[]` para prevenir errores de este tipo.

```js
a?.b
```

En esta expresión, si `a` es `null` o `undefined`, la expresión se evalúa a `undefined` automáticamente y no realiza ningún intento para acceder a la propiedad `b`. De lo contrario, si `a` es cualquier otro valor, entonces la expresión `a?.b` se evalúa a cualquier valor que se evaluaría la expresión `a.b`. Si `a` no tiene una propiedad `b` entonces el valor también será `undefined`.

Al usar la sintaxis `?.[]`:

```js
a?.[b][c];
```

Si el valor de `a` es `null` o `undefined`, toda la expresión se evalúa a `undefined`, y las subexpresiones `b` y `c` se quedan intactas. Y si tienen algún efecto adicional, no ocurrirán si `a` no está definida.

## Expresiones de invocación

Una _expresión de invocación_ es la sintaxis para ejecutar o llamar a una función o a un método. Comienza con la función a ser llamada, después se abre un paréntesis en el que se coloca una lista separada por comas de 0 o más argumentos.

```js
f(0);
a.sort();
```

Al evaluar a una expresión de invocación, se evalúa primero la expresión de la función, y después las expresiones de los argumentos se evalúan para producir una lista de valores de argumentos. Si el valor de la expresión de función **no** es una función, entonces se arroja un TypeError. Después, se asignan los valores de los argumentos en el orden que se escribieron, y se ejecuta el cuerpo de la función.

Si una función usa una sentencia `return`, a la expresión de invocación se le asigna el valor que retorne la función. De lo contrario, el valor de la expresión será `undefined`.

A una expresión de invocación se le conoce como _invocación de método_ cuando esta expresión es una expresión de acceso de propiedad. 

Y en invocaciones de métodos, el objeto o arreglo del acceso de propiedad **se convierte en la palabra clave `this`** mientras el cuerpo de la función se ejecuta. Lo cual permite trabajar con funciones a las que llamamos _métodos_, pues operan en el objeto del que son parte.

### Invocación condicional

Desde ES2020, es posible invocar a una función usando la sintaxis `?.()`. Lo cual previene un TypeError si la expresión a la izquierda del paréntesis es `null` o `undefined`. Con esta nueva sintaxis, si la expresión a la izquierda del `?.` se evalúa a `null` o a `undefined`, toda la expresión de invocación se evalúa a `undefined` y no se arroja ninguna excepción.

Los objetos de arreglos tienen un método `sort()` a los que se les puede pasar un argumento de función que defina el orden deseado para los elementos del arreglo.

Antes de ES2020 usábamos una sentencia `if` para verificar que el argumento de función fuera definido antes de invocarla en el cuerpo del `if`:

```js
function square(x log) {
	if (log) {
		log(x);
	}
	return x * x;
}
```

Ahora podemos simplemente invocar a la función usando `?.()`.

```js
function square(x, log) {
	log?.(x);
	return x * x;
}
```

Aunque, `?.()` solamente verifica si la expresión del lado izquierdo es `null` o `undefined`. No verifica que el valor sea una función.

## Expresiones de creación de objetos

Una _expresión de creación de objetos_ crea un nuevo objeto e invoca un método constructor para inicializar las propiedades de ese objeto. Las expresiones de creación de objetos son como las expresiones de invocación, solo que llevan el prefijo de palabra clave `new`:

```js
new Object()
new Point(2,3)
```

Si no se le pasan argumentos al método constructor, se pueden omitir los paréntesis:

```js
new Object
new Date
```

## Operadores

Los operadores se utilizan en JavaScript para expresiones aritmétiacs, de comparación, lógicas, de asignación, entre otras.

Hay operadores que se representan con carácteres de puntuación, como el `+`, mientras que hay otros que se representan con palabras clave como `delete` e `instanceof`.

***nota:*** el orden de los operadores listados en la siguiente tabla determinan su precedencia.

<table>
	<tr>
		<td>Operador</td>
		<td>Operación</td>
		<td>Alineación</td>
		<td>Operandos</td>
		<td>Tipo</td>
	</tr>
	<tr>
		<td>++</td>
		<td>pre- o post-Incrementar</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a Número</td>
	</tr>
	<tr>
		<td>--</td>
		<td>pre- o post-Decrementar</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a Número</td>
	</tr>
	<tr>
		<td>-</td>
		<td>Negar número</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a Número</td>
	</tr>
	<tr>
		<td>+</td>
		<td>Convertir a número</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a Número</td>
	</tr>
	<tr>
		<td>~</td>
		<td>Invertir bits</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a int</td>
	</tr>
	<tr>
		<td>!</td>
		<td>Invertir booleano</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>delete</td>
		<td>Quitar una propiedad</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>typeof</td>
		<td>Determinar tipo de operando</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a string</td>
	</tr>
	<tr>
		<td>void</td>
		<td>Retornar valor indefinido</td>
		<td>Derecha</td>
		<td>1</td>
		<td>a undef</td>
	</tr>
	<tr>
		<td>*, /, %</td>
		<td>Multiplicar, dividir, residuo</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a Número</td>
	</tr>
	<tr>
		<td>+, -</td>
		<td>Añadir, sustraer</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a Número</td>
	</tr>
	<tr>
		<td>+</td>
		<td>Concatenar cadenas</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a string</td>
	</tr>
	<tr>
		<td><<</td>
		<td>Desplazar a la izquierda</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a int</td>
	</tr>
	<tr>
		<td>>></td>
		<td>Desplazar a la derecha con extensión</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a int</td>
	</tr>
	<tr>
		<td>>>></td>
		<td>Desplazar a la derecha sin extensión</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a int</td>
	</tr>
	<tr>
		<td><, <=, >, >=</td>
		<td>Comparar en orden numérico</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td><, <=, >, >=</td>
		<td>Comparar en orden alfabético</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>instanceof</td>
		<td>Comprobar clase de objeto</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>in</td>
		<td>Comprobar si la propiedad existe</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>==</td>
		<td>Comprobar igualdad</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>!=</td>
		<td>Comprobar desigualdad</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>===</td>
		<td>Comprobar igualdad estricta</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>!==</td>
		<td>Comprobar desigualdad estricta</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a bool</td>
	</tr>
	<tr>
		<td>&</td>
		<td>Computar AND en bits </td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a int</td>
	</tr>
	<tr>
		<td>^</td>
		<td>Computar XOR en bits</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a int</td>
	</tr>
	<tr>
		<td>|</td>
		<td>Computar OR en bits</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>a int</td>
	</tr>
	<tr>
		<td>&&</td>
		<td>Computar AND lógico</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>Cualquiera</td>
	</tr>
	<tr>
		<td>||</td>
		<td>Computar OR lógico</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>Cualquiera</td>
	</tr>
	<tr>
		<td>??</td>
		<td>Escoger primer operando definido</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>Cualquiera</td>
	</tr>
	<tr>
		<td>?:</td>
		<td>Escoger segundo o tercer operando</td>
		<td>Derecha</td>
		<td>3</td>
		<td>Cualquiera</td>
	</tr>
	<tr>
		<td>=</td>
		<td>Asignar a una variable o propiedad</td>
		<td>Derecha</td>
		<td>2</td>
		<td>Cualquiera</td>
	</tr>
	<tr>
		<td>**=, *=, /=,  %=, +=, -=, &=, ^=, |=</td>
		<td>Operar y asignar</td>
		<td>Derecha</td>
		<td>2</td>
		<td>Cualquiera</td>
	</tr>
	<tr>
		<td><<=, >>=, >>>=</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>,</td>
		<td>Descartar primer operando y retornar el segundo</td>
		<td>Izquierda</td>
		<td>2</td>
		<td>Cualquiera</td>
	</tr>
</table>

### Número de operandos

Los operadores pueden ser categorizados basándose en el número de operandos que esperan.

### Operando y tipo del resultado

Algunos operandos funcionan en valores de cualquier tipo, pero la mayoría esperan un tipo específico de operandos, y la mayoría retornan un valor de un tipo específico.

### Efectos secundarios del operador

Existen algunas expresiones cuyas evaluaciones pueden afectar el resultado de evaluaciones futuras. Por ejemplo, los operadores de asignación, o los de incremento y decremento, así como el operador `delete`.

### Precedencia de los operadores

La precedencia de los operadores determina el orden en que se realizan.

```js
w = x + y*z;
```

El operador de multiplicación `*` tiene mayor precedencia que el operador de adición `+`, por lo que se realiza la multiplicación antes que la adición.

Esta precedencia se puede sobrescribir con el uso explícito de paréntesis. Si queremos que la adición se realice primero, escribiríamos esto:

```js
w = (x + y)*z;
```

### Asociatividad del operador

La asociatividad de un operador define el orden en el que las operaciones de la misma prececdencia se realizan.

```js
// Expresiones equivalentes
w = x - y - z;

w = ((x - y) - z);
```

### Orden de evaluación

La precedencia y asociatividad especifican el orden en el que se las operaciones de una expresión se realizan, pero no especifican el orden en el que se evalúan las subexpresiones.

```js
w = x + y * z
```

En este ejemplo, la subexpresión `w` se evalúa primero, seguido de `x`, `y` y `z`. Después se multiplican los valores de `y` y `z`, se añaden al valor de `x`, y se asignan a la variable o propiedad especificada por `w`.

Añadir paréntesis a las expresiones puede cambiar el orden relativo de la multiplicación, adición y asignación, pero no del orden de las evaluaciones.

## Expresiones aritméticas

La mayoría de los operadores aritméticos pueden tener operandos BigInt o números ordinarios, pero no se pueden mezclar los dos tipos.

Los operadores aritméticos (ordenados de mayor a menor precedencia) son:

* `**`: Exponenciación
*  `*`: Multiplicación
*  `/`: División
*  `%`: Mod
*  `+`: Adición
*  `-`: Sustracción

Todos los operadores básicos (a excepción del de adición) evalúan sus operandos, convierten los valores a números de ser necesario, y entonces computan un resultado.

En caso de que un operando no pueda ser convertido a un número, se convierte entonces a `NaN`. Y si alguno de los dos operandos es `NaN`, el resultado de la operación será `NaN`.

El operador de división `/` divide su primer operando entre el segundo. En Javascript, todos los números cuentan con punto flotante, por lo que realizar una operación como `5/2` se evalúa a `2.5` y no a `2`. Dividir un número entre 0 dará como resultado infinito negativo/positivo. Y dividir `0/0` evaluará a `NaN`.

El operador `%` retorna el residuo de una división de enteros entre el primer operando y el segundo. Con esto en cuenta, `5%2` se evalúa a `1`. Este operador también puede ser utilizado con valores de punto flotante.

### Operador `+`

Cuando ambos operandos son números, el operador `+` los suma, y cuando ambos operandos son cadenas, el operador las concatena. De no ser ese el caso, se realiza una conversión, y depende del resultado de la conversión el tipo de operación que se realizará.

* Si alguno de los operandos es un objeot, se convertirá a primitivo. Los objetos de fecha se convierten con el método `toString()` y todos los demás objetos se convierten con `valueOf()` si este método retorna un valor primitivo. Si el método `valueOf()` no retorna un valor primitivo, entonces se usa `toString()`.
* Después de hacer una conversión de objeto a primitivo, si cualquiera de los dos operandos es una cadena, el otro operando también se convierte a cadena y se concatenan.
* De lo contrario, ambos operandos se convierten a números o a `NaN` y se realiza una suma.

### Operadores Unarios

Los operadores unarios modifican el valor de un solo operando para producir un nuevo valor. Todos los operadores unarios tienen precedencia alta y tienen asociatividad hacia la derecha.

* Unario más (`+`)
	- este convierte su operando a un número y retorna el valor convertido.
* Unario menos (`-`)
	- convierte su operando a número, y de ser necesario, cambia el signo del resultado.
* Incremento (`++`)
	- este operador incrementa en 1 a su operando.
	El valor que retorne el operador depende de su posición relativa al operando. Si se usa antes del operando, se incrementa el operando y se evalúa al valor incrementado de ese operando.
	Si se usa después del operando, incrementa su operando, pero se evalúa al valor sin incrementar de ese operando.
* Decremento (`--`)
	- Este operador convierte el valor del operando a número, le sustrae 1, y asigna el valor decrementado al operando. Al igual que con el operador `++`, el valor que retorne `--` dependerá de su posición relativa al operando.

Estos operadores realizan manipulaciones de bajo nivel a cada bits en la representación binaria de números.

## Expresiones relacionales

Los operadores relacionales comparan una relación entre dos valores y reotrnan un `true`o un `false` dependiendo de si esa relación existe. Estas expresiones siempre evalúan a un valor booleano, y ese valor se usa a menuda para sentencias condicionales como `if`, `while`, y `for`.

### Operadores de igualdad y desigualdad

Los operadores `==` y `===` verifican si dos valores son iguales, mediante diferentes definiciones de equidad. Ambos operadores aceptan operandos de cualquier tipo. Amboos retornan `true` si sus operandos son iguales y `false` si son diferentes.

#### Igualdad estricta

El operador de igualdad estricta `===` evalúa sus operandos, y los compara de la siguiente forma (sin realizar conversiones de ningún tipo):

* Si ambos valores tienen distintos tipos, no son iguales.
* Si ambos valores son `null`o ambos valores son `undefined`, son igales.
* Si ambos valores son el valor booleano `true`, o ambos son el valor booleano `false`, son iguales.
* Si uno o ambos valores es `NaN`, no son iguales.
* Si ambos valores son números y tienen el mismo valor, son iguales. Si un valor es 0 y el otro es -0, también son iguales.
* Si ambos valores son cadenas y contienen exactamente los mismos valores de 16 bits en las mismas posiciones, son iguales. Si las cadenas difieren en longitud o contenido, no son iguales. Dos cadenas pueden lucir igual pero pueden tener una codificación distinta.
* Si ambos valores refieren al mismo objeto, arreglo, o función, son iguales. Si refieren a distintos objetos, no son iguales, inlcuso si ambos objetos tienen propiedades idénticas.

#### Igualdad con conversión de tipos

El operador de igualdad `==` es menos estricto que el anterior. Si los valores de los dos operandos no son del mismo tipo, intentará realizar algunas conversiones y hará la comparación nuevamente.

* Si los dos valores tienen el mismo tipo, se les pone a prueba para verificar su igualdad estricta. Si son estrictamente iguales, son iguales. Si no son estrictamente iguales, no son iguales.
* Si los dos valores no tienen el mismo tipo, el operador `==` podría considerarlos iguales de todos modos bajo las siguientes reglas:
	- Si un valor es `null` y el otro `undefined`, son iguales.
	- Si un valor es un número y el otro es una cadena, se convertirá la cadena a número y se intentará realizar la comparación de nueva cuenta con el valor convertido.
	- Si alguno de los valores es `true`, se convierte a `1` y se intenta hacer la comparación de nuevo. Si alguno de los valores es `false`, se convierte a 0 y se hace la comparación otra vez.
	- Si un valor es un objeto y el otro es un número o una cadena, se convierte el objeto a primitivo y se realiza la comparación de nuevo.
	- Cualquier otra combinación de valores resulta en que no sean iguales.

### Operadores de comparación

Estos operadores comprueban el orden relativo de sus dos operandos:

* Menor que (`<`)
	- Evalúa a `true` si su primer operando es menor que su segundo operando. De lo contrario, evalúa a `false`.
* Mayor que (`>`)
	- Este operador evalúa a `true` si su primer operando es mayor que su segundo operando. De lo contrario, evalúa a `false`.
* Menor o igual que (`<=`)
	- Evalúa a `true` si su primer operando es menor o igual a su segundo operando.
* Mayor o igual que (`>=`)
	- Evalúa a `true` si su primer operando es mayor o igual a su segundo operando.

Los operandos de estos operadores peuden ser de cualquier tipo, pero las comparaciones en sí solo se pueden realizar en números y cadenas. Los operandos que sean diferentes a números o a cadenas se convierten.

### Operador `in`

Este operador espera del lado izquierdo un operando que sea una cadena, un símbolo o un valor que pueda ser convertido a string. Del lado derecho espera un operando que sea un objeto. Se evalúa a `true` si el valor del lado izquierdo es el nombre de una propiedad del objeto colocado a la derecha del operador.

```js
let point = {x: 1, y: 1};
"x" in point // => true
```

### Operador `instanceof`

Este operador espera del lado izquierdo un operando que sea un objeto y del lado derecho un operando que identifique a una clase de objetos. El operador evalúa a `true` si el objeto del lado izquierdo es una instancia de la clase colocada al lado derecho del operador, y se evalúa a `false` en caso contrario.

```js
let d = new Date();

d instaneof Date // => true
```

## Expresiones lógicas

Los operadores lógicos `&&`, `||`, y `!` realizan álgebra Booleana y se usan en conjunción con operadores relacionales para combinar dos expresiones relacionales en una expresión compleja.

### AND lógico (`&&`)

Al nivel más básico, este operador realiza la operación Booleana AND en dos valores y retorna un `true` si ambos operandos son `true`. Si alguno o ambos operandos son `false`, retorna `false`.

Aunque el `&&` se usa mayormente para conjugar dos expresiones

```js
x === 0 && y === 0
```

El `&&` no requiere que sus operandos sean valores booleanos, pues todos los valores de JavaScript tienen un estado verdadero o falso.

El segundo y tercer nivel en el que el operador `&&` puede ser usado son con valores distintos a booleanos en base a sus estados de "verdadero" o "falso".

### OR Lógico (`||`)

El operador `||` realiza la operación booleana OR en sus dos operandos. Si uno o ambos operandos es verdadero, se retorna un valor verdadero. Si ambos operandos son falsos, retorna un valor falso.

El operador `||` empieza a evaluar el primer operando, y si ese operando es verdadero, la evaluación se detiene justo ahí e inmediatamente retorna un valor verdadero sin evaluar la expresión de la derecha. Si por el otro lado, el valor del primer operando es falso, entonces se evalúa el segundo operando y retorna el valor de esa expresión.

### NOT lógico (`!`)

Este es un operador unario, y se coloca antes de su único operando.

Tiene como propósito invertir el valor booleano de su operando.

Este operador convierte su operando en valor booleano. `!` siempre retornará un `true` o un `false` que siempre puede será obtenido de un valor cualquiera. De este modo, podemos convertir cualquier valor a su equivalente booleano al aplicarle el operador NOT dos veces: `!!x`.