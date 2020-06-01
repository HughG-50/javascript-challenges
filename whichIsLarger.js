//This exercise is designed to introduce higher order functions
//f and g are functions that are passed in 

function whichIsLarger(f, g) {
	numberF = f();
	numberG = g();
	
	outputString = "";
	if(numberF > numberG){ //could also put if(f() > g()){  - but this isn't very DRY - e.g. don't know if function takes a lot of resources
		outputString = "f";
	} else if(numberG > numberF) {
		outputString = "g"
	} else {
		outputString = "neither"
	}
	
	return outputString
}