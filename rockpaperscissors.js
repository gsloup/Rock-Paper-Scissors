// Selects all three buttons and attaches an event listener to each
var buttonsArray = document.querySelectorAll("button").forEach(function(button){
    button.addEventListener("click", function(e){
        
        // Assigns player's choice to a variable and displays it to their screen
        var playerChoice = button.value
        console.log(`Player selects ${playerChoice}`); // prints player's choice
        document.getElementById("user").innerText = `You chose ${playerChoice}!`;//updates screen to display user's choice
        
        var computerChoice = cpuChoice();
        console.log(`CPU selects ${computerChoice}`);
        document.getElementById("computer").innerText = `The computer chose ${playerChoice}!`;

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

console.log(cpuChoice()); // Logs CPU's guess to console



