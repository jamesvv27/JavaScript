let a = true, c = true;
let b = false;

let x = a && b; // => false
let y = a && c; // => true

let z = !(x && y); // x && y => !false => true
let k = z === (!x || !y); // !x || !y => true; (z === true) ? true
let j = k === (!x && !y); // !x && !y => false; (k === false) ? false

console.log(x);
console.log(y + "\n");

console.log(z);
console.log(k);
console.log(j);