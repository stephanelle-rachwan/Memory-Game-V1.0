// Initializing an array to store the sequence
var program_sequence = []
var our_sequence = []

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

// Generate a random number between 1 and 4, including both 1 and 4
// Fct taken from https://www.udacity.com/blog/2021/04/javascript-random-numbers.html#:~:text=Generating%20Javascript%20Random%20Numbers,it%20will%20never%20be%201.
function generateRandomIntegerInRange() {
  return Math.floor(Math.random() * (4)) + 1;
}

// We create a fct that uses the playSound and changeColor fcts, randomly
function sequenceWork (){
  rand=generateRandomIntegerInRange();
  program_sequence.push(rand);
  playSound(program_sequence[program_sequence.length-1]);
}

// We make the game work upon clicking anywhere and change the title to level 1
// to make it work once, used {once:true} https://dev.to/js_bits_bill/addeventlistener-once-js-bits-565d
document.getElementById("body").addEventListener("click",function(){
  sequenceWork();
  changeTitle(); 
},{once:true})
function changeTitle (){
  document.getElementById("title").innerHTML = "Level 1";
}

// Fill our sequence (our_sequence) with the squares we press on
function compare (element_clicked) {
  our_sequence.push(element_clicked);
  if (our_sequence[our_sequence.length-1] == program_sequence[our_sequence.length-1]) {
    executeGame();
  }
  else {
    gameOver();
  }
}

document.getElementById("green_square").addEventListener("click",function(){compare(1)});
document.getElementById("red_square").addEventListener("click",function(){compare(2)});
document.getElementById("yellow_square").addEventListener("click",function(){compare(3)});
document.getElementById("blue_square").addEventListener("click",function(){compare(4)});

// Create function executeGame to go on with the game
function executeGame(){
  // as long as length[our_sequence] == length[program_sequence] ; continue
  // we should make l program click 3a gher ra2em, length[program_sequence] = number tb3 l level
  // we change the title accordingly
  }
  
// Create function gameOver when we lose to do the required changes
function gameOver() {
  console.log("difndi")
  document.getElementById("title").innerHTML = "Game Over, Press Any Key to Restart";
  wrong_audio.play();
  document.getElementById("body").style.backgroundColor = "red";
  setTimeout(() => {
    document.getElementById("body").style.backgroundColor = "#0f1833";
  }, 200)
}