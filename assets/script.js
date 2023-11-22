    let win = 0;
    let loose = 0;
    let draw = 0;
function returnRock(){
    
    let computerChoice = ["rock" , "paper" , "scissors"]
    let random = Math.floor(Math.random() * computerChoice.length ) + 1;
    let computerMove;
    if(random === 1){
        computerMove =  "rock";
    }
    else if(random === 2){
        computerMove =  "paper";
    }
    else if(random === 3){
        computerMove =  "scissors";
    }
        if(computerMove === "rock"){
            document.getElementById("decision").innerHTML = "You and computer both choose rock."
            document.getElementById("value").innerHTML = "So,it is a tie."
            draw = draw+1;
            document.getElementById("draw").innerHTML = (`${draw}`)
        }
        else if(computerMove === "paper"){
            document.getElementById("decision").innerHTML = "You choose rock and computer choose paper."
            document.getElementById("value").innerHTML = "So,you lost."
            loose = loose+1;
            document.getElementById("loose").innerHTML = (`${loose}`)
           
        }
        else{
            document.getElementById("decision").innerHTML = "You choose rock and computer choose scissors."
            document.getElementById("value").innerHTML = "So,you won."
            win = win+1;
            document.getElementById("win").innerHTML = (`${win}`)
            
        }
    }
    function returnPaper(){
    let computerChoice = ["rock" , "paper" , "scissors"]
    let random = Math.floor(Math.random() * computerChoice.length ) + 1;
    let computerMove;
    if(random === 1){
        computerMove =  "rock";
    }
    else if(random === 2){
        computerMove =  "paper";
    }
    else if(random === 3){
        computerMove =  "scissors";
    }
        if(computerMove === "rock"){
            document.getElementById("decision").innerHTML = "You choose paper and computer choose rock."
            document.getElementById("value").innerHTML = "So,you won."
            win = win+1;
            document.getElementById("win").innerHTML = (`${win}`)
        }
        else if(computerMove === "paper"){
            document.getElementById("decision").innerHTML = "You and computer both choose paper."
            document.getElementById("value").innerHTML = "So,it is a tie."
            draw = draw+1;
            document.getElementById("draw").innerHTML = (`${draw}`)
        }
        else{
            document.getElementById("decision").innerHTML = "You choose paper and computer choose scissors."
            document.getElementById("value").innerHTML = "So,you lost."
            loose = loose+1;
            document.getElementById("loose").innerHTML = (`${loose}`)
        }
    }
    function returnScissors(){
    let computerChoice = ["rock" , "paper" , "scissors"]
    let random = Math.floor(Math.random() * computerChoice.length ) + 1;
    let computerMove;
    if(random === 1){
        computerMove =  "rock";
    }
    else if(random === 2){
        computerMove =  "paper";
    }
    else if(random === 3){
        computerMove =  "scissors";
    }
        if(computerMove === "rock"){
            document.getElementById("decision").innerHTML = "You choose scissors and computer choose rock."
            document.getElementById("value").innerHTML = "So,you lost."
            loose = loose+1;
            document.getElementById("loose").innerHTML = (`${loose}`)
        }
        else if(computerMove === "paper"){
            document.getElementById("decision").innerHTML = "You choose scissors and computer choose paper."
            document.getElementById("value").innerHTML = "So,you won."
            win = win+1;
            document.getElementById("win").innerHTML = (`${win}`)
        }
        else{
            document.getElementById("decision").innerHTML = "You and computer both both choose scissors."
            document.getElementById("value").innerHTML = "So,it is a tie."
            draw = draw+1;
            document.getElementById("draw").innerHTML = (`${draw}`)
        }
    }

    function wholeReset(){
        win = 0;
        loose = 0;
        draw = 0;
        document.getElementById("draw").innerHTML = (`${draw}`)
        document.getElementById("win").innerHTML = (`${win}`)
        document.getElementById("loose").innerHTML = (`${loose}`)
        document.getElementById("decision").innerHTML = ""
            document.getElementById("value").innerHTML = "New game."

    }