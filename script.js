let firstCard = 6
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sumEl")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
    sum += newCard
    cards.push(newCard)
    renderGame()
}