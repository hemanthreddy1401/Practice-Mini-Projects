let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let value=Math.random()*100;
let random=Math.ceil(value);

function checkGuess() {
   let guessValue=userInput.value;
   gameResult.style.backgroundColor="blue";
   if(guessValue<random){
       gameResult.textContent="You entered low value";
   }else if(guessValue>random){
       gameResult.textContent="You entered high value";
   }else if(guessValue===random){
       gameResult.textContent="hurray!!";
       gameResult.style.backgroundColor="green";
   }else{
       gameResult.textContent="Please enter valid input";
       gameResult.style.backgroundColor="red";
   }
}