let p = {};
let pSymb = Symbol("Pancho");
let aSymb = Symbol("Pancho");

p[pSymb] = 78;

console.log(p[aSymb]);
console.log(pSymb === aSymb);