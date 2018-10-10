// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    $("#shoot").click(function(){
        var inputValue = $("#input").val();
        var computerInput = ["rock","paper","scissor"];
        if(inputValue === "rock" || inputValue === "paper" || inputValue === "scissors"){
            $("#userChoice").text(inputValue);
            $("#computerChoice").text();
            $("#input").val("");
        }else{
            $("#input").val("");
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
