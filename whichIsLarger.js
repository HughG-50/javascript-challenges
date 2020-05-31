//This exercise is designed to introduce higher order functions
//f and g are functions that are passed in 

function whichIsLarger(f, g) {
	numberF = f();
	numberG = g();
	
	outputString = "";
	if(numberF > numberG){ //could also put if(f() > g()){
		outputString = "f";
	} else if(numberG > numberF) {
		outputString = "g"
	} else {
		outputString = "neither"
	}
	
	return outputString
}