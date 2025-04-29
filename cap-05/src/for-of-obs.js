let obs = { x: 1, y: 2, z: 3};
let keys = "";

for (let k in obs){
	keys += k;
}

console.log(keys);