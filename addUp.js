function addUp(num) {
	let numTotal = 0;
	for(let i = 0; i <= num; i++){
        numTotal += i;
        //console.log(numTotal);
	}
	
	return numTotal;
}

//console.log(addUp(4));