var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var negativo;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = 'red';
    } else {
        document.getElementById("currentNumber").style.color = 'blue' ;
    }
   
   
    
}

/*
function decrement(){
    if (currentNumber > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        currentNumber = 0;
    }
    
}
*/

function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = 'red' ;
    } else {
        document.getElementById("currentNumber").style.color = 'blue' ;
    }
    
    
    
}