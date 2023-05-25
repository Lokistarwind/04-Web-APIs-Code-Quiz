
//var wordBlank = document.querySelector(".word-blanks");
//var win = document.querySelector(".win");
//var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
//var option1Button = document.querySelector(".option1-button");
//var option2Button = document.querySelector(".option2-button");
//var option3Button = document.querySelector(".option3-button");
//var option4Button = document.querySelector(".option4-button");
var quizComplete = false;


var timer;
var timerCount;
var score;

var answerSheet = [{question:"Commonly used data types DO NOT include", 
             options: ["Strings", "Booleans", "Alerts", "Numbers"],
             answer: "Alerts"},
            {question:"The condition in an if/else statement is in eclosed within _____.",
            options: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
            answer: "Parentheses"},
            {question:"Arrays in Javascript can be used to store _____.",
            options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
            answer: "All of the above"},
            {question:"String values must be enclosed within ____ when being assigned to variables", 
            options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
            answer: "Quotes"},
            {question:"A useful tool used during development and debugging for printing content to the debugger is:", 
            options: ["Javascript", "Terminal/bash", "For loops", "Console.log"],
            answer: "Console.log"}];

//answerSheet[1].question;
//answerSheet[1].options[0];

//global values
var opt1;
var opt2;
var opt3;
var opt4;
var questionObj;
var playerPush;

var quizGameEL= document.getElementById("quizGame");
var playerAnswer = null;


// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}


// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 1000;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startButton.remove();
  //renderBlanks()
  startTimer();
  startQuiz();
}

//starts up the quiz
function startQuiz(){

    setupQuestion(answerSheet, 0);
    console.log(playerAnswer);
    
    
   // setupQuestion(answerSheet, 1);

   // quizGameEL.onclick=playerInput;

t

}


//intiializes the question and answer buttons.
function setupQuestion(answerSheet,index)
{
questionObj = document.createElement("h1");
questionObj.textContent = answerSheet[index].question;
questionObj.setAttribute("style", "text-align: center");
document.getElementById("quizGame").appendChild(questionObj);

opt1 = document.createElement("button");
opt1.textContent = answerSheet[index].options[0];
opt1.setAttribute("style", "text-align: center","display: flex",
"justify-content: center","align-items:center");
document.getElementById("quizGame").appendChild(opt1);

opt2 = document.createElement("button");
opt2.textContent = answerSheet[index].options[1];
opt2.setAttribute("style", "text-align: center","display: flex",
"justify-content: center","align-items:center");
document.getElementById("quizGame").appendChild(opt2);

opt3 = document.createElement("button");
opt3.textContent = answerSheet[index].options[2];
opt3.setAttribute("style", "text-align: center","display: flex",
"justify-content: center","align-items:center");
document.getElementById("quizGame").appendChild(opt3);

opt4 = document.createElement("button");
opt4.textContent = answerSheet[index].options[3];
opt4.setAttribute("style", "text-align: center","display: flex",
"justify-content: center","align-items:center");
document.getElementById("quizGame").appendChild(opt4);

quizGameEL = document.getElementById("quizGame");



//quizGameEL.onclick=playerInput;
quizGameEL.addEventListener("click", playerInput);
console.log(quizGameEL);


}

//checks answer and removes elements made by the function setupQuestion
function playerInput(event)
{
    //event.stop
    //event.stopPropagation();
    playerPush = event.target;
    //console.log(temp);
    playerAnswer =playerPush.textContent;
    console.log(playerAnswer);
   
    //if(playerAnswer !== answerSheet[index].answer && playerAnswer !== null)
    //{
        //timerCount = timerCount-20;
    //}
    resetQuestion();
}

function resetQuestion()
{
    opt1.remove();
    opt2.remove();
    opt3.remove();
    opt4.remove();
    questionObj.remove();
}
   



// The winGame function is called when the win condition is met
/*
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}
*/
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (quizComplete && timerCount > 0) {
        // Clears interval and stops timer
        score = timerCount;
        clearInterval(timer);
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      score = timerCount;
      clearInterval(timer);
    }
  }, 1000);
}

// Creates blanks on screen
/*function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ")
//}
*/
// Updates win count on screen and sets win count to client storage
//function setWins() {
  //win.textContent = winCounter;
  //localStorage.setItem("winCount", winCounter);
//}

// Updates lose count on screen and sets lose count to client storage
//function setLosses() {
  //lose.textContent = loseCounter;
  //localStorage.setItem("loseCount", loseCounter);
//}

// These functions are used by init
/*function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}
*/
/*
function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}
*/
/*
function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}
*/

// Tests if guessed letter is in word and renders it to the screen.
/*function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
    wordBlank.textContent = blanksLetters.join(" ");
  }
}
*/

// Attach event listener to document to listen for key event
/*document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});
*/

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);


//ADD back later to perform score keeping
// Calls init() so that it fires when page opened
//init();

// Bonus: Add reset button
//var resetButton = document.querySelector(".reset-button");
/*
function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
*/
// Attaches event listener to button
//resetButton.addEventListener("click", resetGame);