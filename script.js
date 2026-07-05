let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sumEl")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if(sum <= 20){
        message = "Do you want to draw another card?"
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "Game over!"
        isAlive = false
    }
    console.log(message)
    messageEl.textContent = message
}

function newCards(){
    console.log("Drawing new cards from the deck!")
    let newCard = 3
    newCard = firstCard + secondCard + newCard
    sumEl.textContent = "Sum: " + newCard
}