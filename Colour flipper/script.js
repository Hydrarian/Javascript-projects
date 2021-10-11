// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Cambia colore";


// 2. Append somewhere
var container = document.getElementById("buttonContainer");
container.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  var newColour=generateRandomColour();
  button.style.backgroundColor=newColour;
  document.body.style.backgroundColor=newColour;
});

function generateRandomColour() {
    var characters ='0123456789ABCDEF';
    var colour ='#';
    for (i=0; i<6; i++){
        colour+=characters[Math.floor(Math.random()*16)];
        //console.log(colour);
    }
    return colour;
}

generateRandomColour();