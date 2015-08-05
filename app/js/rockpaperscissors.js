////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* Your Expression */
    move = move || getInput(); 
    console.log('player move is: ' + move);
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /* Your Expression */
    move = move || randomPlay();
    console.log('computer move is: ' + move);
    return move;
}

function getWinner(playerMove,computerMove) {
  var winner;
  // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
  // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
  // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  /* YOUR CODE HERE */
  
  // Options to determine if round is tie, player win, or computer win
  if (playerMove == 'rock' && computerMove == 'scissors' || playerMove == 'scissors' && computerMove == 'paper' || playerMove == 'paper' && computerMove == 'rock' ) {
    winner = 'player'; 
  }else if (playerMove !== computerMove) {
    winner = 'computer';
  } else {
    winner = 'tie';
  }
  console.log("this round's winner is: " + winner);
  return winner;
}

function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;
  var rounds = 0;
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  
  /* 
  This function should continue to play Rock Paper Scissors until either the
  player or the computer has won five times.
  After each 'round', display some text in the console indicating who played
  what, who won, and what the current scoreboard looks like.
  For example,
  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n'); 
  */
  
  /* YOUR CODE HERE */
  // continue to play until either computer or player has won 5 times
  while (computerWins !== 5 && playerWins < 5 || playerWins !== 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    rounds += 1; //used to count the rounds played before winning a game
    // check the value of the winner variable and increase plyerWins or computerWins accordingly
    if (winner === 'player') {
       playerWins += 1;
    }
    if (winner === 'computer') {
       computerWins += 1;
    }
            
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '\n');
    console.log('Score is player: ' + playerWins + ' - Computer: ' + computerWins + '\n');

    if (playerWins === computerWins) {
     console.log ('game is currently tie' + '\n'); 
    }else if (playerWins > computerWins) {
     console.log ('player is winning');
    }else if (playerWins < computerWins) {
     console.log ('computer is winning');
    }
  }
  console.log('Player Final Score: ' + playerWins + '\n');
  console.log('Computer Final Score: ' + computerWins + '\n');
  if (playerWins > computerWins) {
    console.log ('Player won over Computer in ' + rounds + ' rounds');
  }else if (playerWins < computerWins) {
     console.log ('Computer won over Player in ' + rounds + ' rounds');
  }
  return [playerWins, computerWins , rounds]; 
}
playToFive();
