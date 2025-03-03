# 1 - Introducción a JavaScript

JavaScript es el lenguaje de programación más usado en la historia. Es el lenguaje de programación de los sitios web, y su gran popularidad dio paso a que _Node.js_ implementara JavaScript fuera de navegadores web y que también se convirtiera en un lenguaje ampliamente usado entre desarrolladores de software.

JavaScript es un lenguaje de alto nivel orientado a objetos. Las variables de JavaScript no tienen tipo, y aunque su sintaxis es ligeramente similar y basada en Java, no debe confundirse con este último, pues son dos lenguajes completamente distintos.

> ## Nombres de JavaScript, sus versiones y sus modos
>	_ECMA_ (_European Computer Manufacturer's Association_), al haber atendido la petición del actual Mozilla para estandarizar el lenguaje de JavaScript, le dio el nombre de _"ECMAScript" ("ES")_ para referirse al estándar del lenguaje. <br>
Tomaremos de referencia a ES5 como la versión de compatibilidad, y no prestaremos atención a versiones anteriores de ES, que desde ES6, la especificación ha tenido lanzamientos anuales, que ahora se identifican con el año (ES2016, ES2017, ES2018...). <br><br>
JavaScript tiene un modo _strict_ para las correcciones que los diseñadores intentaron implementar en las versiones anteriores a ES5 con el objetivo de mantener la retrocompatibilidad. Se le llama _strict_, pues realmente no es posible eliminar características antiguas. ES6 y versiones posteriores invocan implícitamente el modo _strict_.

Las características core de JavaScript ofrecen un API bastante mínimo, y no ofrecen, por ejemplo, funcionalidades de entrada y salida, que son implementadas gracias al "host environment" en el que se encuentre JavaScript.

El host environment original de JavaScript es un navegador web. El navegador le permite al código de JavaScript obtener entradas del ratón y teclado del usuario mediante peticiones HTTP, además de mostrar una salida de datos con HTML y CSS.

Desde 2010, Node ha dado acceso a JavaScript para los sistemas operativos, con funciones para leer y escribir archivos, recibir y enviar datos, atender peticiones HTTP, entre otras características.

## Explorando JavaScript

### Hola mundo

Al hacer nuestro propio código en un editor de texto, podemos correr el código en una sesión Node.

```
$ node hola.js
```

Para mostrar salida de texto en una ventena de terminal podemos utilizar la función `console.log`:

```js
console.log("Hola pedro");
```

Si queremos ver este mensaje impreso en la consola de un navegador, podemos hacer un archivo de marcado (`hola.html`) y añadirle un script:

```html
<script src="hola.js"></script>
```

Al cargar este archivo en el navegador podemos abrir la ventana de herramientas de desarrollador para visualizar el resultado en la consola.

## Ejemplo: Histogramas

El siguiente es un programa JavaScript  que lee texto de entrada, crea un histograma de la frecuencia de los carácteres, y lo imprime.

Las características que este ejemplo usa se explicarán en los capítulos siguientes:

```js
class DefaultMap extends Map {
	constructor(defaultValue) {
		super(); 
		this.defaultValue = defaultValue; 
	}
	
	get(key) {
		if (this.has(key)) { 
			return super.get(key); 
		}
		else {
			return this.defaultValue; 
		}
	}
}
	
class Histogram {
	constructor() {
		this.letterCounts = new DefaultMap(0); 
		this.totalLetters = 0;
	}
	
	add(text) {
		
		text = text.replace(/\s/g, "").toUpperCase();
		
		for(let character of text) {
			let count = this.letterCounts.get(character);
			this.letterCounts.set(character, count+1);
			this.totalLetters++;
		}
	}
		
	toString() {
		
		let entries = [...this.letterCounts];
		
		entries.sort((a,b) => {
			if (a[1] === b[1]) { 
				return a[0] < b[0] ? -1 : 1;
			} else { 
				return b[1] - a[1];
			}
		});
		
		
		for(let entry of entries) {
			entry[1] = entry[1] / this.totalLetters*100;
		}
		
		entries = entries.filter(entry => entry[1] >= 1);
		
		let lines = entries.map(
			([l,n]) => `${l}: ${"#".repeat(Math.round(n))}
		${n.toFixed(2)}%`
		);
		
		return lines.join("\n");
	}
}
	
	
async function histogramFromStdin() {
	process.stdin.setEncoding("utf-8");
	let histogram = new Histogram();
	for await (let chunk of process.stdin) {
		histogram.add(chunk);
	}
	return histogram;
}


histogramFromStdin().then(histogram => {
console.log(histogram.toString()); });
```
