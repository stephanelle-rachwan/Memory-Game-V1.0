// Importing Sounds
var blue_audio = new Audio("./assets/sounds/blue.mp3");
var green_audio = new Audio("./assets/sounds/green.mp3");
var red_audio = new Audio("./assets/sounds/red.mp3");
var yellow_audio = new Audio("./assets/sounds/yellow.mp3");
var wrong_audio = new Audio("./assets/sounds/wrong.mp3");

// Adding functions that changes the sound (playSound) and color (changeColor) of the elements on click 
document.getElementById("green_square").addEventListener("click", function(){playSound(1)});
document.getElementById("red_square").addEventListener("click", function(){playSound(2)});
document.getElementById("yellow_square").addEventListener("click", function(){playSound(3)});
document.getElementById("blue_square").addEventListener("click", function(){playSound(4)});

// Function to play the desired sound
function playSound(x) {
  switch (x) {
    case 1:
      green_audio.play();
      changeColor(1);
      break;
    case 2:
      red_audio.play();
      changeColor(2);
      break;
    case 3:
      yellow_audio.play();
      changeColor(3);
      break;    
    case 4:
      blue_audio.play();
      changeColor(4);
      break;
  }
}
// Function that changes the color to white then to the original color after 2ms
function changeColor(x) {
  switch (x) {
    case 1:
      document.getElementById("green_square").style.backgroundColor = "white";
      setTimeout(() => {
        // document.getElementById("green_square").style.display = "none";
        // document.getElementById("green_square").style.display = "visibility";
        document.getElementById("green_square").style.backgroundColor = "green";
      }, 200)
      break;
    case 2:
      document.getElementById("red_square").style.backgroundColor = "white";
      setTimeout(() => {
        document.getElementById("red_square").style.backgroundColor = "red";
      }, 200)
      break;
    case 3:
      document.getElementById("yellow_square").style.backgroundColor = "white";
      setTimeout(() => {
        document.getElementById("yellow_square").style.backgroundColor = "yellow";
      }, 200)
      break;    
    case 4:
      document.getElementById("blue_square").style.backgroundColor = "white";
      setTimeout(() => {
        document.getElementById("blue_square").style.backgroundColor = "blue";
      }, 200)
      break;
  }
}