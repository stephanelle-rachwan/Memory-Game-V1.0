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

// Function thats compares between the last click we perform
function sequenceDifferentiate (element_clicked) {
  if (our_sequence[our_sequence.length-1] == program_sequence[our_sequence.length-1]) {
    console.log(program_sequence,our_sequence)
      return true;
  }
  else {
    gameOver();
  }
}
  
// Create function gameOver when we lose to do the required changes
function gameOver() {
  document.getElementById("title").innerHTML = "Game Over, Press Any Key to Restart";
  wrong_audio.play();
  document.getElementById("body").style.backgroundColor = "red";
  setTimeout(() => {
    document.getElementById("body").style.backgroundColor = "#0f1833";
  }, 200)
  // Adding a timeout so that it differentiate between the last wrong click and the restart click 
  setTimeout(document.getElementById('body').addEventListener("click",function(){location.reload()},1000))
}

// The main function connecting the program all together
function Start(){
  // Playing the new sound of the last index/btn
  setTimeout(playSound(program_sequence[program_sequence.length-1]),1000)
      function start(x){
        if (!x){return;}
        our_sequence.push(x);
        // console.log(our_sequence,program_sequence)
        x=sequenceDifferentiate()
        if (our_sequence.length==program_sequence.length){
              rand=generateRandomIntegerInRange()
              our_sequence=[]
              program_sequence.push(generateRandomIntegerInRange())
              setTimeout(function(){playSound(program_sequence[program_sequence.length-1])},500)
              document.getElementById("title").innerHTML=`Level ${program_sequence.length}`
              return;   
          } 
      }
    
    document.getElementById('red_square').addEventListener("click",function (){start(2)},console.log(our_sequence,program_sequence));
    document.getElementById('yellow_square').addEventListener("click",function (){start(3),console.log(our_sequence,program_sequence)});
    document.getElementById('blue_square').addEventListener("click",function (){start(4),console.log(our_sequence,program_sequence)});
    document.getElementById('green_square').addEventListener("click",function (){start(1),console.log(our_sequence,program_sequence)});
  start();
}

// We make the game work upon clicking anywhere and change the title to level 1
document.getElementById("body").addEventListener("click",function(){
  document.getElementById("title").innerHTML=`Level ${program_sequence.length}`;
  Start();
} // to make it work once, used {once:true} https://dev.to/js_bits_bill/addeventlistener-once-js-bits-565d
,{once:true})