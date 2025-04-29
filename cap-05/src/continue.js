let data = [1, 2, ,3, 5, 6];
let total1 = 0, total2 = 0;

for(let i = 0; i < data.length; i++) {
	if (!data[i]){
		continue;
	}
	total1 += data[i];
}

console.log(total1);

for(let i = 0; i < data.length; i++) {
	total2 += data[i];
}

console.log(total2);