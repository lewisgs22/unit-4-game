$(document).ready(function(){
    let Random = Math.floor(Math.random()*101+19)
    // Selects a random number between 19 - 120 to display at the start of the game

    $("#randomNumber").text(Random);
    // Appends random number to the randomNumber p tag

    let num1 = Math.floor(Math.random()*11+1) 
    let num2 = Math.floor(Math.random()*11+1)
    let num3 = Math.floor(Math.random()*11+1)
    let num4 = Math.floor(Math.random()*11+1)
    // These are the random numbers between 1-12 for the jewels

    let userScore = 0;
    let wins = 0;
    let losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    // Updates wins and losses counters

    function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $("#randomNumber").text(Random);
        num1 = Math.floor(Math.random()*11+1);
        console.log(num1)
        num2 = Math.floor(Math.random()*11+1);
        console.log(num2)
        num3 = Math.floor(Math.random()*11+1);
        console.log(num3)
        num4 = Math.floor(Math.random()*11+1);
        console.log(num4)
        userScore = 0;
        $("#score").text(userScore);
        }
    // Resets game

    function wow() {
        $("#message").text("You Won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function yuck() {
        $("#message").text("You Lost!...Try again");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
    // Adds wins and losses

    $("#one").on("click", function(){
        userScore = userScore + num1;
        console.log("New user score =" + userScore);
        console.log(num1)
        $("#score").text(userScore);

        if (userScore === Random) {
            wow();
        }
        else if (userScore > Random) {
            yuck();
        } 
    })

    $("#two").on("click", function(){
        userScore = userScore + num2;
        console.log("New user score =" + userScore);
        $("#score").text(userScore);

        if (userScore === Random) {
            wow();
        }
        else if (userScore > Random) {
            yuck();
        } 
    })

    $("#three").on("click", function(){
        userScore = userScore + num3;
        console.log("New user score =" + userScore);
        $("#score").text(userScore);

        if (userScore === Random) {
            wow();
        }
        else if (userScore > Random) {
            yuck();
        } 
    })

    $("#four").on("click", function(){
        userScore = userScore + num4;
        console.log("New user score =" + userScore);
        $("#score").text(userScore);

        if (userScore === Random) {
            wow();
        }
        else if (userScore > Random) {
            yuck();
        } 
    })
    // Clicks for Jewels
});