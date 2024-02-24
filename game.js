function getComputerChoice() {
    // Chooses a word from array at random
    let choices = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * choices.length)
    let cpu = choices[random]
    return cpu
}

function playRound(playerSelection, compSelection) {
    if (playerSelection == compSelection) {
        return draw 
        } else if((playerSelection === "Rock") &&
        compSelection === "Paper") {
            return lose
        } else if((playerSelection === "Rock") &&
        compSelection === "Scissors") {
            return win
        } else if((playerSelection === "Paper") &&
        compSelection === "Scissors") {
            return lose
        } else if((playerSelection === "Paper") &&
        compSelection === "Rock") {
            return win
        } else if((playerSelection === "Scissors") &&
        compSelection === "Rock") {
            return lose
        } else if((playerSelection === "Scissors") &&
        compSelection === "Paper") {
            return win
        }
}

// Results messages
let draw = "Draw!"
let lose = "You lose!"
let win = "You win!"

function playGame() {
    let playerScore = 0
    let compScore = 0

    while(playerScore < 5 && compScore < 5) {
        let playerSelection = prompt("Enter Rock, Paper or Scissors", '')
        let compSelection = getComputerChoice()

        console.log("CPU's Choice: " + compSelection)
        console.log("Your Choice: " + playerSelection)
        console.log(playRound(playerSelection, compSelection))

        if (playRound(playerSelection, compSelection) == win) {
            playerScore += 1;
        } else if (playRound(playerSelection, compSelection) == lose) {
            compScore += 1
        }
        console.log(playerScore)
        console.log(compScore)
    }
}
