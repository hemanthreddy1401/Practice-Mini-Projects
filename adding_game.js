let first=document.getElementById("firstNumber");
let second=document.getElementById("secondNumber");
let user=document.getElementById("userInput");
let result=document.getElementById("gameResult");

let successMessage="Congratulations! you got it right";
let tryAgainMessage="Please Try Again!";

//Displaying the random values
let num1=Math.ceil(Math.random()*100);
let num2=Math.ceil(Math.random()*100);
first.textContent=num1;
second.textContent=num2;
result.textContent="";
user.value="";
    
function restart(){
    let num1=Math.ceil(Math.random()*100);
    let num2=Math.ceil(Math.random()*100);
    first.textContent=num1;
    second.textContent=num2;
    result.textContent="";
    user.value="";
}

function check(){
   let firstRandom=parseInt(first.textContent);
   let secondRandom=parseInt(second.textContent);
   let userEnteredSum=parseInt(user.value);

    if(userEnteredSum===firstRandom+secondRandom){
        result.textContent=successMessage;
        result.style.backgroundColor="#028a0f";
    }else{
        result.textContent=tryAgainMessage;
        result.style.backgroundColor="#1e217c";
        
    }
}

