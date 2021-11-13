var number = 0;

buttonDecrease=document.getElementById("decrease");
buttonDecrease.addEventListener("click", function() {
    document.getElementById("numero").innerText=decreaseNumber();
});

buttonIncrease=document.getElementById("increase");
buttonIncrease.addEventListener("click", function() {
    document.getElementById("numero").innerText=increaseNumber();
});

buttonDecrease=document.getElementById("reset");
buttonDecrease.addEventListener("click", function() {
    document.getElementById("numero").innerText=reset();
});

function increaseNumber(){
    return number++;
}

function decreaseNumber(){
    return number--;
}

function reset(){
    number=0;
    return number;
}

