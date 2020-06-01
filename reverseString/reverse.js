function reverse(string) {
    // Method 1
    let strArr = string.split("");
    let reverseStrArr = [];

    // Method 2 - could use .reverse() built in function instead of the for loop
    // reverseStrArr = strArr.reverse();
    for(let i = 0; i < strArr.length; i++){
        reverseStrArr.unshift(strArr[i]);
    }
    
    return reverseStrArr.join("");
}

//Method 3 - Decrement through string
// function reverse(string) {
//     let newString = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//     }
//     return newString;
// }
// console.log(reverse('hello'));

module.exports = reverse;
