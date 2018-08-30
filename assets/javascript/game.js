$(document).ready(function(){
    let Random=Math.floor(Math.random()*101+19)
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
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
        userScore = 0;
        $("#score").text(userScore);
        }
    // Resets game

    function wow() {
        alert("You Won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function yuck() {
        alert("You Lost!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
    // Adds wins and losses

    $("#one").on("click", function(){
        userScore = userScore + num1;
        console.log("New user score =" + userScore);
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