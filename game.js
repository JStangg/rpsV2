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

let playerSelection = "Paper"
let compSelection = getComputerChoice()
console.log(playRound(playerSelection, compSelection))

console.log("CPU's Choice: " + compSelection)
console.log("Your Choice: " + playerSelection)
