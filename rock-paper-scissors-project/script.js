        let player = 0;
        let computer = 0;
        const playerScore = document.querySelector("#player-score");
        const computerScore = document.querySelector("#computer-score");
        const scoreBoard = document.querySelector(".score-board");
        const result = document.querySelector(".result > p");
        const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");


        function getComputerChoice() {
            const choices = ["rock", "paper", "scissors"];
            const randomNumber = Math.floor(Math.random()*3);//Math floor will round to the nearest number, math random give us number between 0 and 1, and multiplying by 3 will give us number between 0 and 3;
            return choices[randomNumber];
        }

        function draw(userChoice,computerChoice) {
            result.innerHTML = "Draw!"
            result.style.color = "grey";
            document.getElementById(userChoice).classList.add("choice-draw");
            setTimeout(function(){document.getElementById(userChoice).classList.remove("choice-draw")}, 400);

            // Same as function above^: setTimeout()) => document.getElementById(userChoice).classList.remove("choice-draw"), 300);
        }

        function win(userChoice,computerChoice) {
            player++;
            playerScore.innerHTML = "<b>Player: </b>" + player;
            result.innerHTML = `${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}! You Win!`;
            result.style.color = "green";
            document.getElementById(userChoice).classList.add("choice-win");
            setTimeout(function(){document.getElementById(userChoice).classList.remove("choice-win")}, 400);
        }

        function lose(userChoice,computerChoice) {
            computer++;
            computerScore.innerHTML = "<b>Computer: </b>" + computer;
            result.innerHTML = `${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}! You Lose!`;
            result.style.color = "red";
            document.getElementById(userChoice).classList.add("choice-lose");
            setTimeout(function(){document.getElementById(userChoice).classList.remove("choice-lose")}, 400);
        }

   

        
        function game(userChoice){
            const computerChoice = getComputerChoice();
            switch (userChoice + computerChoice) {
                case "rockrock":
                case "paperpaper":
                case "scissorsscissors":
                    draw(userChoice, computerChoice);
                    break;
                case "rockscissors":
                case "paperrock":
                case "scissorspaper":
                    win(userChoice, computerChoice);
                    break;
                case "scissorsrock":
                case "rockpaper":
                case "paperscissors":
                    lose(userChoice, computerChoice);
                    break;
            }
        }
        



        function main() {
            rock.addEventListener("click", () => game("rock"));
            //Same as: rock.addEventListener("click", function(){game("rock");})
            paper.addEventListener("click", () => game("paper"));
            scissors.addEventListener("click", () => game("scissors"));
            
        }
        main();
        
        function refreshPage() {
            window.location.reload(true);
        }
        scoreBoard.addEventListener("click", refreshPage);

//INITIAL VERSION OF THE GAME:

//        let playerSelection;
//        let computerSelection = computerPlay();
//
//        userInput();
//
//        //first function:
//        function userInput () {            
//            let playerSelection = document.querySelector//(button);
//                 if ((playerSelection.toLowerCase()//=="rock")
//                 || (playerSelection.toLowerCase()//=="paper")
//                 || (playerSelection.toLowerCase()//=="scissors")) {
//            console.log(gameRound(playerSelection, //computerSelection))
//            } else {
//                        alert ("Wrong input!");
//                        userInput();
//            }
//        }
//
//     
//        }
//        // to test: console.log(computerPlay());
//
//        //third function:
//        function gameRound(playerSelection, //computerSelection) {
//            playerSelection;
//            computerSelection = computerPlay().toLowerCase//();
//            
//                if (playerSelection === //computerSelection) {
//                return ("Draw!");
//                    }
//                    if ((playerSelection == "rock" && //computerSelection == "paper")
//                    ||  (playerSelection == "paper" && //computerSelection == "scissors") 
//                    ||  (playerSelection == "scissors" && //computerSelection == "rock")) {
//                    return ("Computer won!");
//                     }
//                        else {
//                         return ("You won!");
//                        }
//        }