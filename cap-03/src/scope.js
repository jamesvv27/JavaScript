const kilo = 100

function scope() {
	console.log(pound); // let: Variable sin declarar; var: Variable undefined;
	
	var pound = 220;
	
	if(kilo === 100) {
		let kilo = 40;
		pound -= kilo;
	}
	
	console.log(pound);
}

scope();