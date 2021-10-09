var lastDate = new Date(2022, 00, 01, 0, 0, 0);                //data limite


function calcolaGiorni() {
    var currentDate = new Date();                           //oggetto che prende la data di oggi
    // get total seconds between the times
    var delta = Math.abs(lastDate - currentDate) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    aggiornaTimer("days", days);

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    aggiornaTimer("hours", hours);
    
    var minutes = Math.floor(delta / 60) % 60;  // calculate (and subtract) whole minutes
    delta -= minutes * 60;
    aggiornaTimer("minutes", minutes);
    
    var seconds = Math.round(delta % 60);  // what's left is seconds. in theory the modulus is not required
    aggiornaTimer("seconds", seconds);
}

function aggiornaTimer(x, valueOfX){
    formattedValueOfX = formattaTimer(valueOfX);
    document.getElementById(x).innerHTML = formattedValueOfX;
}

function formattaTimer(y){
    return (y < 10) ? ("0" + y) : y;
}

setInterval(calcolaGiorni,1000);
