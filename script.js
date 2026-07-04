


sum = firstCard + secondCard




function startGame() {
    if(sum <= 20){
        message = "Do you want to draw another card?😊"
    }else if(sum === 21){
        message = "You've got Blackjack!🥳"
    }else{
        message = "Game over!😭"
    }
}