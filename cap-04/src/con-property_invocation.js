let a = { b: null };
console.log(a.b?.c.d);

let f = null, x = 0;
f?.(x++);
console.log(x); // => 0