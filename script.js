let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sumEl")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum === 1){
        return 11
    }else if(randomNum > 10){
        return 10
    }else{
        return randomNum
    }
}
function startGame(){
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
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
    message = "Drawing new cards from the deck!"
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}