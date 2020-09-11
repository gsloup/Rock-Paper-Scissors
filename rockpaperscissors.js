// Global variables
var wins = 0;
var ties = 0;
var loses = 0;
var gameCount = 1;


// Selects all three buttons and attaches an event listener to each
var buttonsArray = document.querySelectorAll("button").forEach(function(button){
    button.addEventListener("click", function(e){
        
        var playerChoice = button.value // Assigns user's choice to a variable
        //console.log(`Player selects ${playerChoice}`); // prints player's choice
        document.getElementById("user").innerText = `You chose ${playerChoice}`;//updates screen to display user's choice
        

        var computerChoice = cpuChoice(); // sets variable to computer's randomized pick
        //console.log(`CPU selects ${computerChoice}`);
        document.getElementById("computer").innerText = `The computer chose ${computerChoice}`;


        //calls function to pick winner and returns string: "tie", "player", or "computer" to variable
        var winner = pickWinner(playerChoice, computerChoice);
        
        

        // Updates score variables and displays
        if (winner === "tie"){ // TIE
            ties++;
            //console.log(`${ties} ties`);
            document.getElementById("tie").innerText = `${ties}`;
            document.getElementById("winnerStatement").innerText = "It's a tie!";
        };
        if (winner === "player"){ // PLAYER WINS
            wins++;
            //console.log(`${wins} wins`);
            document.getElementById("win").innerText = `${wins}`;
            document.getElementById("winnerStatement").innerText = "Player Wins! Computer Loses!";
        };
        if (winner === "computer"){ // PLAYER LOSES
            loses++
            //console.log(`${loses} loses`);
            document.getElementById("loss").innerText = `${loses}`;
            document.getElementById("winnerStatement").innerText = "Computer Wins! Player Loses!";
        };


        // Updates game count and game/play again display
        gameCount++;
        document.getElementById("game").innerText = `${gameCount}`;
        document.getElementById("playAgain").innerText = "Press a button to play again!";
        


    })
});


//Function that randomly picks for the CPU and returns a string: 'rock', 'paper', or 'scissors'
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

// Function that picks a winner and returns a string: "tie", "player", or "computer"
function pickWinner(user, cpu){
    // Tie
    if (user === cpu){
        return "tie"
    }
    // Player wins
    else if ((user === 'rock' && cpu === 'scissors')||(user === 'paper' && cpu === 'rock')||
    (user === 'scissors' && cpu === 'paper')){
        return "player"
    }
    // Computer wins
    else {
        return "computer"
    };

};


