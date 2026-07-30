/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.



function rockePaperScissor() {
    console.log("Let's play game");

    const userChoicePrompt = prompt("Enter the Rock 🪨, Paper 🧻, or Scissors ✂️ Game");

    let userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1




    // if (randomNumber == 1) {
    //     computerChoice = "rock"

    // } else if (randomNumber == 2) {
    //     computerChoice = "paper"
    // } else {
    //     computerChoice = "scissor"
    // }


    switch (randomNumber) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissor"
            break;

    }

    console.log("userChoice", userChoice);
    console.log("computerChoice", computerChoice);


 
    switch (true) {
        case userChoice === computerChoice: console.log("OMG! game is tie")
            break;
        case userChoice === "rock" && computerChoice === "scissor":
        case userChoice === "paper" && computerChoice === "rock":
        case userChoice === "scissor" && computerChoice === "paper":
            console.log("Wow! User win the game")
            break;


        case userChoice === "rock" && computerChoice === "paper":
        case userChoice === "paper" && computerChoice === "scissor":
        case userChoice === "scissor" && computerChoice === "rock":
            console.log("Wow! Computer win the game")
            break;

        default:
            console.log("Check the Input")
            break;
    }


    // if (
    //     (userChoice === "rock" && computerChoice === "scissor") ||
    //     (userChoice === "paper" && computerChoice === "rock") ||
    //     (userChoice === "scissor" && computerChoice === "paper")


    // ) {
    //     console.log("Wow! User win the game")
    // } else if (userChoice === computerChoice) {
    //     console.log("OMG! game is tie")
    // } else if (
    //     (userChoice === "rock" && computerChoice === "paper") ||
    //     (userChoice === "paper" && computerChoice === "scissor") ||
    //     (userChoice === "scissor" && computerChoice === "rock")
    // ) {
    //     console.log("Wow! Computer win the game")
    // }
    // else {
    //     console.log("Check the Input")
    // }



    const replayPrompt = prompt("Do you want to Play Again?");
    const reGame = replayPrompt ? replayPrompt.toLowerCase() : "no"

    if (reGame == "yes") {
        rockePaperScissor()
    } else {
        console.log("Thanks for Playing, See you again");

    }


}

rockePaperScissor()
