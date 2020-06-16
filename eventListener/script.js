const myWarning = document.querySelector("#warning");
const myButton = document.querySelector("#makeItRed");

myButton.addEventListener(
    "click",
    //Anonymous function
    () => {
        console.log("The user clicked")
        myWarning.style.background = "red"
    }
)

// Alternate way to do callback
// function handleClick() {
//     console.log("The user clicked")
// }

// myButton.addEventListener("click", handleClick)
