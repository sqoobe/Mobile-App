
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-5c941-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.querySelector("#input-field")
const addButtonEl = document.querySelector("#add-button")
const shoppingListEl = document.querySelector("#shopping-list")

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value

    push(shoppingListInDB, inputValue)

    clearInputFieldEl()
})

onValue (shoppingListInDB, function(snapshot){
    let itemsArray = Object.values(snapshot.val())

    clearShoppingListEl()

    for (let i = 0; i < itemsArray.length; i++){
        appendItemToShoppingListEl(itemsArray[i])
    }

})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}
function clearInputFieldEl(){
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue){
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}