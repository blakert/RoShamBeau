function computerPlay(){
    //generate random number between 0 and 3
    var randomNum = Math.floor(Math.random() * 3) + 1;
      return randomNum;
    }


function playGame(playerSelection,computerSelection){
  var moves = new Array("Rock", "Paper","Scissors");
  if(playerSelection.toUpperCase() === "ROCK"){
      playerSelection = 1;
  }
  else if(playerSelection.toUpperCase() === "PAPER"){
      playerSelection = 2;
  }
  else if(playerSelection.toUpperCase() === "SCISSORS"){
      playerSelection = 3;
  }
          
  if((computerSelection-playerSelection + 5) % 3 === 0){
      return 1;
  }
  else if((computerSelection-playerSelection +5) % 3 === 1){
      return 2;
  }else {
      return 0;
  }
}
  function playRound(numberOfRounds){
      var Rounds = numberOfRounds;
      var playerWins = 0;
      var playerLosses = 0;
      var ties = 0;

      for(var i = 0; i < Rounds;i++){
          var playerChoice = prompt("CHOOSE: Rock, Paper or Scissors");
          
         if(playGame(playerChoice,computerPlay()) == 1){
             playerLosses++;
         } else if (playGame(playerChoice,computerPlay()) == 2){
             playerWins++;
         }else{
             ties++;
         }
          
      }
      return "Computer: " + playerLosses + " \nPlayer: "  + playerWins + "\nTies: " + ties;
      
  }