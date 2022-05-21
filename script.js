// Importing Sounds
var blue_audio = new Audio("./assets/sounds/blue.mp3");
var green_audio = new Audio("./assets/sounds/green.mp3");
var red_audio = new Audio("./assets/sounds/red.mp3");
var yellow_audio = new Audio("./assets/sounds/yellow.mp3");
var wrong_audio = new Audio("./assets/sounds/wrong.mp3");

// Testing
var green_test = document.getElementById("green_square") 
green_test.addEventListener("click", function(){playSound()});

function playSound(){
  green_audio.play(); 
}