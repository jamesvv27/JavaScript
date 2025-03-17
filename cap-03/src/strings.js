let edad = 70;
let abue = `mi abuelo siempre me decia:
\t"hola, tengo ${edad} años"`;
let quote = `" ...` + abue.substring(abue.length-14, abue.length);

console.log(quote);