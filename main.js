playAgain = true
let round = 0;
let wins = 0;
let draws = 0;
let loses = 0;
let playerName = prompt ("Enter your name")

while (playerName.length > 10){alert ("Maximum 10 characters");
playerName = prompt ("Enter your name")}

while (playAgain == true){
let playerMove = prompt ("Enter your move.")
let computerChoice = [
        "rock",
        "paper",
        "scissors"
      ];
    
let randomItem = computerChoice[Math.floor(Math.random()*computerChoice.length)];


let computerMove = randomItem;

function getWinner (playerMove, computerMove){
if (playerMove === "rock" && computerMove === "scissors"){
        return +1
    }
if (playerMove === "rock" && computerMove === "rock"){
        return 0
    }
if (playerMove === "rock" && computerMove === "paper"){
        return -1
    }
if (playerMove === "paper" && computerMove === "scissors"){
        return -1
    }
if (playerMove === "paper" && computerMove === "rock"){
        return +1
    }
if (playerMove === "paper" && computerMove === "paper"){
        return 0
    }
if (playerMove === "scissors" && computerMove === "scissors"){
        return 0
    }
if (playerMove === "scissors" && computerMove === "rock"){
         return -1
        }
if (playerMove === "scissors" && computerMove === "paper"){
        return +1
    }
}
    let result = getWinner( playerMove, computerMove);
 


    if (result === 1) {alert(playerName  + " Wins! The Computer chose " + computerMove); wins++}
    if (result === 0) {alert("Draw! The Computer also chose " + computerMove); draws++}
    if (result === -1) {alert("Computer Wins! The Computer chose " + computerMove); loses++}
    if (playAgain == true){round++;
        alert(`${playerName} you have played  ${round} round(s)
        Wins: ${wins} 
        Draws: ${draws} 
        Loses: ${loses}`);}
    playAgain = confirm("Press OK to play again");
    if (playAgain == false){alert ("Bye, Bye!")}
    
}
