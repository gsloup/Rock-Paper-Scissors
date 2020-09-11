// Global variables
var wins = 0;
var ties = 0;
var loses = 0;
var gameCount = 1;


// Selects all three buttons and attaches an event listener to each
var buttonsArray = document.querySelectorAll("button").forEach(function(button){
    button.addEventListener("click", function(e){
        
        // Assigns player's choice to a variable and displays it to their screen
        var playerChoice = button.value
        console.log(`Player selects ${playerChoice}`); // prints player's choice
        document.getElementById("user").innerText = `You chose ${playerChoice}!`;//updates screen to display user's choice
        
        var computerChoice = cpuChoice(); // sets variable to computers pick by calling a function
        console.log(`CPU selects ${computerChoice}`);
        document.getElementById("computer").innerText = `The computer chose ${computerChoice}!`;

        //calls function to pick winner and returns string: "tie", "player", or "computer"
        var winner = pickWinner(playerChoice, computerChoice);
        
        

        // Updates scores and displays
        if (winner === "tie"){
            ties++;
            console.log(`${ties} ties`);
            document.getElementById("tie").innerText = `${ties}`;
            document.getElementById("winnerStatement").innerText = "It's a tie!";

        };
        if (winner === "player"){
            wins++;
            console.log(`${wins} wins`);
            document.getElementById("win").innerText = `${wins}`;
            document.getElementById("winnerStatement").innerText = "Player Wins! Computer Loses!";
        };
        if (winner === "computer"){
            loses++
            console.log(`${loses} loses`);
            document.getElementById("loss").innerText = `${loses}`;
            document.getElementById("winnerStatement").innerText = "Computer Wins! Player Loses!";
        };
        // Updates game count and game display
        gameCount++;
        document.getElementById("game").innerText = `${gameCount}`
        


    })
});


//Function that randomly returns Rock, Paper, or Scissors
function cpuChoice() {
    var randomNum = Math.floor(Math.random()*3); // returns rand num 0,1,or 2
    if (randomNum === 0){
        return("rock");
    }
    else if (randomNum === 1){
        return("paper");
    }
    else {
        return("scissors");
    };
}

// function that picks a winner and returns a string of who won("tie", "player", or "computer")
function pickWinner(user, cpu){
    // tie
    if (user === cpu){
        return "tie"
    }
    // user wins
    else if ((user === 'rock' && cpu === 'scissors')||(user === 'paper' && cpu === 'rock')||
    (user === 'scissors' && cpu === 'paper')){
        return "player"
    }
    // computer wins
    else {
        return "computer"
    };

};

console.log(pickWinner("rock", "scissors"))// should return "player"
console.log(pickWinner("paper", "paper"))// should return "tie"
console.log(pickWinner("scissors", "rock"))// should return "computer"
