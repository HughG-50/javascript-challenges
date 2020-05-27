const capitaliseTheFront = (string) => {
	let wordArr = string.split(' ');

	for(i=0; i < wordArr.length; i++){
		let wordCharArray = wordArr[i].split('');

		wordCharArray[0] = wordCharArray[0].toUpperCase();
		for(j=1; j < wordCharArray.length; j++){
			wordCharArray[j] = wordCharArray[j].toLowerCase();
		}

		wordArr[i] = wordCharArray.join("");
	}

	let capitalisedString = wordArr.join(" ");
	return capitalisedString;
}

console.log(capitaliseTheFront("sinGLE"));
console.log(capitaliseTheFront("TWO words"));
console.log(capitaliseTheFront("Quite a Long SENTENCE!"));