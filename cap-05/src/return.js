let b_data = [1, 2, ,3, 5, 6];
let g_data = [1, 2, 3, 4, 5, 6];

function sum(data) {
    let ik = 0;
	
    for(let numb of data) {
        if(!numb){
            return;
        } else{
            ik += numb;
        }
    }
    return ik;
}

console.log(sum(b_data));

console.log(sum(g_data));