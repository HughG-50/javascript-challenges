const exesAndOhs = (string) => {
	// convert all characters in string to lowercase as solution is case insensitive
	let inputString = string.toLowerCase();
  //convert to array
  let stringAsArray = inputString.split('');
	//create counters for x and o chars
	let xCount = 0;
	let oCount = 0;
	//Set default boolean to true
	let is_match = true;
	
  //iterate over length of the array
	for(i=0; i < stringAsArray.length; i++){
		if(stringAsArray[i] === "x"){
			xCount += 1;
		}else if(stringAsArray[i] === "o"){
			oCount += 1;
		}
	}
	if(xCount !== oCount){
		is_match = false;
	}
	return is_match;
}

console.log(exesAndOhs("oooxxx"));
console.log(exesAndOhs("oooXXX"));
console.log(exesAndOhs("OOOxxx"));
console.log(exesAndOhs("OooxXx"));
console.log(exesAndOhs("OooxXxxx"));
console.log(exesAndOhs(""));