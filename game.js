function getComputerChoice() {
    // Chooses a word from array at random
    let choices = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * choices.length)
    console.log(choices[random])
}