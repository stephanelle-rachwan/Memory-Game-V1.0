// Importing Sounds
var blue_audio = new Audio("./assets/sounds/blue.mp3");
var green_audio = new Audio("./assets/sounds/green.mp3");
var red_audio = new Audio("./assets/sounds/red.mp3");
var yellow_audio = new Audio("./assets/sounds/yellow.mp3");
var wrong_audio = new Audio("./assets/sounds/wrong.mp3");

// Testing
// var green_test = document.getElementById("green_square") 
// green_test.addEventListener("click", function(){playSound()});

// function playSound(x){
//   green_audio.play(); 
// }


document.getElementById("green_square").addEventListener("click", function(){playSound(1)});
document.getElementById("red_square").addEventListener("click", function(){playSound(2)});
document.getElementById("yellow_square").addEventListener("click", function(){playSound(3)});
document.getElementById("blue_square").addEventListener("click", function(){playSound(4)});

function playSound(x) {
  switch (x) {
    case 1:
      green_audio.play();
      break;
    case 2:
      red_audio.play();
      break;
    case 3:
      yellow_audio.play();
      break;    
    case 4:
      blue_audio.play();
      break;
  }
}