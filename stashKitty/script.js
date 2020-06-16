// Get our nodes/elements from document
const cat = document.querySelector("#cat-pic")
const stash = document.querySelector("#stash-pic")

// Whenever an event happens we get an event object back - pageX and pageY are two pieces of info from event object that are really useful
function addStash(event) {
    const xOffset = stash.getBoundingClientRect().width / 2
    const yOffset = stash.getBoundingClientRect().height / 2

    stash.style.top = `${event.pageY - yOffset}px`
    stash.style.left = `${event.pageX - xOffset}px`
}
  
cat.addEventListener("click", addStash)
