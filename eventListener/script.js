const myWarning = document.querySelector("#warning");
const myButton = document.querySelector("#makeItRed");

myButton.addEventListener(
    "click",
    () => {
        console.log("The user clicked")
        myWarning.style.background = "red"
    }
)