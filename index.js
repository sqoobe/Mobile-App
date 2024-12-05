const inputFieldEl = document.querySelector("#input-field")
const addButtonEl = document.querySelector("#add-button")

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value

    console.log(inputValue)
})