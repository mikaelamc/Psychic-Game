


var options = ["f", "l", "o", "w", "e", "r"];
var wins = 0;
var losses = 0;
var guessesleft = 10;


document.onkeyup = function() {
   var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userGuess);

   var computerGuess = options[Math.floor(Math.random()*options.length)];
  
   console.log(computerGuess);

    if (userGuess=='f' || userGuess=='l' || userGuess=='o' || userGuess=='w'|| userGuess=='e' || userGuess=='r') { 
        if ((userGuess==computerGuess)) {
            alert("You Have Chosen Correctly!");
            alert("wins: " + wins);
            wins++; 
            document.getElementById('#wins').innerHTML = wins;

            
           
        } 
        if ((userGuess=='f') && (computerGuess=='l')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='f') && (computerGuess=='o')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
            }
        if ((userGuess=='f') && (computerGuess=='w')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='f') && (computerGuess=='e')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='f') && (computerGuess=='r')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='l') && (computerGuess=='f')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='l') && (computerGuess=='o')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='l') && (computerGuess=='w')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='l') && (computerGuess=='e')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='l') && (computerGuess=='r')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='o') && (computerGuess=='f')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='o') && (computerGuess=='l')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='o') && (computerGuess=='w')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='o') && (computerGuess=='e')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='o') && (computerGuess=='r')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='w') && (computerGuess=='f')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='w') && (computerGuess=='l')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='w') && (computerGuess=='o')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='w') && (computerGuess=='e')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='w') && (computerGuess=='r')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='e') && (computerGuess=='f')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }}
        if ((userGuess=='e') && (computerGuess=='l')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='e') && (computerGuess=='o')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='e') && (computerGuess=='w')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='e') && (computerGuess=='r')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='r') && (computerGuess=='f')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='r') && (computerGuess=='l')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='r') && (computerGuess=='o')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='r') && (computerGuess=='w')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
            }
        if ((userGuess=='r') && (computerGuess=='e')) {
            losses++;
            alert("You lose!");
            alert("losses: " + losses);
        }  else {
            alert("Hint: Choose letters in the word Flower!");
        }
    

        // var html = "<p>Press letter keys that are in the word Flower to start playing!</p>" +
        // "<p>wins: " + wins + "</p>" +
        // "<p>losses: " + losses + "</p>";

        // document.getElementById('#wins').innerHTML = wins;
    

    
