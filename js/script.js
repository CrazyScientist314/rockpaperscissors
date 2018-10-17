// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW
/*global $*/
$(document).ready(function(){
    var userChoice = "";
    var computerChoice = "";
    var winner = "";
    var randomNumber = 0;
    $("#shoot").click(function(){
        userChoice = $("#input").val();
        randomNumber = Math.floor((Math.random() * 3));
        computerChoice = ["rock","paper","scissors"];
        var userScore = parseInt($("#userScore").html(),10);
        var computerScore = parseInt($("#computerScore").html(),10);
        $("#userChoice").text(userChoice);
        console.log(userChoice);
        if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
            $("#userChoice").text(userChoice);
            $("#computerChoice").text(computerChoice[randomNumber]);
            if((userChoice === "rock" && computerChoice[randomNumber] === "scissors") || (userChoice === "scissors" && computerChoice[randomNumber] === "paper") || (userChoice === "paper" && computerChoice[randomNumber] === "rock")){
                $("#userScore").text(userScore + 1);
            }else if((userChoice === "scissors" && computerChoice[randomNumber] === "rock") || (userChoice === "paper" && computerChoice[randomNumber] === "scissors") || (userChoice === "rock" && computerChoice[randomNumber] === "paper")){
                $("#computerScore").text(computerScore + 1);
            }else{
                $("#userScore").text(userScore);
                $("#computerScore").text(computerScore);
            }
            $("#input").val("");
        }else{
            $("#input").val("");
        }
        if(userScore === 5){
            alert("You Win");
        }else if(computerScore === 5){
            alert("You Lose");
        }else{
            
        }
    });
    
    
    
    
    
    
     /*var computerInput = ["rock","paper","scissor"];
        if(inputValue === "rock" || inputValue === "paper" || inputValue === "scissors"){
            $("#userChoice").text(inputValue);
            $("#computerChoice").text();
            $("#input").val("");
        }else{
            $("#input").val("");*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
