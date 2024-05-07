let counterElement=document.getElementById("counterValue");


function onIncrease(){
    let previousCounterValue=counterElement.textContent;
    let updatedCounterValue=parseInt(previousCounterValue)+1;
    console.log(updatedCounterValue);
    counterElement.textContent=updatedCounterValue;
    if(counterElement.textContent>0){
        counterElement.style.color="green";
    }
}
function onDecrease(){
    let presentCounterValue=counterElement.textContent;
    let decreaseCounterValue=parseInt(presentCounterValue)-1;
    console.log(decreaseCounterValue);
    counterElement.textContent=decreaseCounterValue;
    if(counterElement.textContent<0){
        counterElement.style.color="red";
    }
}
function onReset(){
    counterElement.textContent=0;
    console.log(counterElement.textContent);
        counterElement.style.color="black";
}