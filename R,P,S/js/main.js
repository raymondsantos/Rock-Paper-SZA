const choices = ["rock" , "paper" , "scissors"]; //global variable 
const winners = [];

function game() {//play the game - play five rounds - consolelog
    for (let i = 0; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('button').textContent = 'Play new game';
    logWins();
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round); 
}

function playerChoice () {  //get input from player
   let input = prompt(`Type Rock, Paper, or Scissors`);
   while (input == null) {
       input = prompt("Type Rock, Paper, or Scissors");  //user cant press cancel or input something else
   }
   while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");  //user cant press cancel or input something else
}
   input = input.toLowerCase(); //makes sure string is lowercase regardless
   let check = validateInput(input) //call function to see if valid input
   while (check == false){
       input = prompt(`Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesn't matter`);
       input = input.toLowerCase()
       check = validateInput(input);
   }
   return input;
}

function computerChoice() {
   return choices[Math.floor(Math.random()*choices.length)]; //get random input from global variable
}
//math random gives 0-1 * choices.length instead of index so random decimal times three then math floor rounds it down

function validateInput(choice){  // checks input to see if proper value
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if ((choiceP === "rock" && choiceC == "scissors") || 
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
    ){
        return "Player";
    } else {
        return "Computer"; 
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:")
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner,round){
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chase:', computerChoice);
    console.log(winner, 'Won the Round');
    console.log("----------------------------------");
}
