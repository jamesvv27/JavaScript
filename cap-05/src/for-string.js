let freq = {};
let state = "Estado de mexico";


for(let character of state) {
	if(freq[character]) {
		freq[character]++;
	} else {
		freq[character] = 1;
	}
}

console.log(freq);