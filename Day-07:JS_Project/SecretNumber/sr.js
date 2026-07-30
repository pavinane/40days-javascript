console.log("hellow")


function GuessingNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1

    let attempts = 0;
    function guess() {

        let secretNumberPrompt = Number(prompt("Enter Secret Number"));

        if (attempts >= 3) {
            console.log("😢 Game Over!");
            console.log(`The correct number was ${randomNumber}`);
            return;
        }



        if (Number.isNaN(secretNumberPrompt)) {
            console.log("Please enter a number");
            return guess()
        }
        if (secretNumberPrompt > 10 || secretNumberPrompt < 1) {
            console.log("Please entered the number is 1 to 10");
            return guess();
        } else {


            attempts++;

            console.log("attempts", attempts, "randomNumber", randomNumber)

            if (secretNumberPrompt > randomNumber) {
                console.log("Too High ! try again")

                return guess()
            } else if (secretNumberPrompt < randomNumber) {
                console.log("Too Low ! try again")

                return guess()
            }
            else if (secretNumberPrompt == randomNumber) {
                console.log("Congrats ! You guess the number")

            }


        }

    }



    guess()

    const replayPrompt = prompt("Do you want to Play Again?");
    const reGame = replayPrompt ? replayPrompt.toLowerCase() : "no"

    if (reGame == "yes") {
        GuessingNumber()
    } else {
        console.log("Thanks for Playing, See you again");

    }



}

GuessingNumber()