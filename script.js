let computerGuess;

 let userGuesses= [];
 let attempts= 0;
 let maxGuesses;

let low = 1
let high = 100

 function updateRange(){
     const rangeOutput = document.getElementById("rangeOutput")
     rangeOutput.innerText =`${low} - ${high}`;
     rangeOutput.style.marginLeft = low +'%'
     rangeOutput.style.marginRight = 100- high +'%'
     rangeOutput.classList.add('flash')

 const  lowValue = document.getElementById("low")
 lowValue.style.flex = low + '%'
 lowValue.style.background = "#ef7b54"

 const space =document.getElementById("space")
 space.style.flex = high - low + '%'
 space.style.background = "#83e1d0"

 const highValue = document.getElementById("high")
 highValue.style.flex = 100 - high+'%'
 highValue.style.background = "#ef7b54"
 }


//FUNCTION TO HANDLE THE END OF THE GAME

 function gameEnded(){
     document.getElementById('newGameButton').style.display ='inline';
     document.getElementById('inputBox').setAttribute("readonly",'readonly')
 }

 // function to reload the game after clicking the new game button
function newGame(){
    window.location.reload()
}

// called when the game is opened  
 function init(){
     computerGuess =Math.floor(Math.random() *  100 + 1)
     document.getElementById("newGameButton").style.display ="none";
     document.getElementById("gameArea").style.display ="none";
   // console.log(computerGuess);
 }

 // FUNCTION TO START THE GAME

 function startGameView(){
     document.getElementById("welcomeScreen").style.display ="none";
     document.getElementById("gameArea").style.display ="block";
 }

function easyMode(){
     maxGuesses = 10
     startGameView()
 }

function hardMode(){
     maxGuesses = 5
     startGameView()
 }

 function compareGuess() {
     const userGuess= Number(document.getElementById('inputBox').value)
     userGuesses.push(" " + userGuess)
     document.getElementById('guesses').innerHTML = userGuesses;
     attempts ++;//increases the number of attempts everytime you guess the wrong number
     document.getElementById('attempts').innerHTML = attempts;


 // ---------------------------------------------------------TO COMPARE THE COMPUTER GUESS WITH THE USER GUESS


  if (attempts < maxGuesses){
    if(userGuess > computerGuess){
         if (userGuess < high) high = userGuess
         document.getElementById('textOutput').innerHTML ="Your guess is too high"
         document.getElementById("inputBox").value = ''; //CLEARS THE INPUT BOX AFTER HITTING ENTER
     }
   else if(userGuess < computerGuess){
         if(low > userGuess) low = userGuess
         document.getElementById('textOutput').innerHTML ="Your guess is too low"
         document.getElementById("inputBox").value = '';
    }
     else{
         document.getElementById('textOutput').innerHTML ="Correct! You got it in"  + attempts + " attempts"
         gameEnded()
     }

  }    else{
     if(userGuess > computerGuess){
         document.getElementById('textOutput').innerHTML ="YOU LOSE! <br/> the number was" + computerGuess
         gameEnded()
     }
     else if(userGuess < computerGuess){
         document.getElementById('textOutput').innerHTML ="YOU LOSE! <br/> the number was" + computerGuess
         gameEnded()
     }
     else{
         document.getElementById('textOutput').innerHTML ="Correct! You got it in " + attempts +' attempts'
         gameEnded()
    }
 }
 updateRange()
 }



