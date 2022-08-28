
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function 1
    function playGame() {
        const btnRock= document.querySelector('.btnRock');
        const btnScissors = document.querySelector('.btnScissors');
        const btnPaper = document.querySelector('.btnPaper');
        const playerOptions = [btnRock, btnScissors, btnPaper];
        const computerOptions = ['rock', 'scissors', 'paper'];
		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText,computerChoice);

                if(moves == 10) {
                     gameOver();
                     moves = 0;
                     playerScore = 0;
                     computerScore = 0;
                    }
		    })
        })
	}
    playGame();
    //Function 2
    const winner = (player, computer) =>{
        const playerCount = document.querySelector('#playerCount');
        const computerCount = document.querySelector('#computerCount');
        player = player.toLowerCase();
 		computer = computer.toLowerCase();

        if(player === computer) {
            computerScore;
            playerScore;
        } else if(player == 'rock') {
                if(computer == 'paper'){
                    computerScore++;
                    computerCount.innerText = `Computer : ${computerScore}`;
                }else{
                    playerScore++;
                    playerCount.innerText = `Player : ${playerScore}`;
                }
            }
            else if(player == 'scissors') {
                if(computer == 'rock') {
                    computerScore++;
                    computerCount.innerText = `Computer : ${computerScore}`;
                }else{
                    playerScore++;
                    playerCount.innerText = `Player : ${playerScore}`;
                }
            }
            else if(player == 'paper') {
                if(computer == 'scissors') {
                    computerScore++;
                    computerCount.innerText = `Computer : ${computerScore}`;
                }else{
                    playerScore++;
                    playerCount.innerText = `Player : ${playerScore}`;
                }
            }
        }
    //Function 3
    const gameOver = () => {
        if(playerScore > computerScore) {
            alert("PLAYER WON THIS GAME !");

        }else if(playerScore < computerScore){
            alert("COMPUTER WON THIS GAME !");
        }else{
            alert("TIE !");
        }
    }


    }
game();
