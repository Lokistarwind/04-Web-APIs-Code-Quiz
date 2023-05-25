
// global variables for timer, start buttone and game complete.
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizComplete = false;
var timer;
var timerCount;
var score;

//array with all the questions, options, and answers
var answerSheet = [{question:"Commonly used data types DO NOT include", 
             options: ["Strings", "Booleans", "Alerts", "Numbers"],
             answer: "Alerts"},
            {question:"The condition in an if/else statement is in eclosed within _____.",
            options: ["Quotes", "Curly brackets", "Parentheses", "Square\nbrackets"],
            answer: "Parentheses"},
            {question:"Arrays in Javascript can be used to store _____.",
            options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
            answer: "All of the above"},
            {question:"String values must be enclosed within ____ when being assigned to variables", 
            options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
            answer: "Quotes"},
            {question:"A useful tool used during development and debugging for printing content to the debugger is:", 
            options: ["Javascript", "Terminal/ bash", "For loops", "Console.log"],
            answer: "Console.log"}];



//global values to use when making each question page
var opt1;
var opt2;
var opt3;
var opt4;
var result;
var questionObj;
var playerPush;

var quizGameEL= document.getElementById("quizGame");
var playerAnswer = null;

// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 1000;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startButton.remove();
  startTimer();
  startQuiz();
}

//starts up the quiz by running setupQuestion which chains into a series of setupQuestion calls
function startQuiz(){

    setupQuestion(answerSheet, 0);
   
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

    //checks to see which question is being passed down
    //once the first question is answered, it will create a chain of events
    //in which each question is deleted and refills the page with the next until it finishes.
    if(index == 0)
    {
        quizGameEL.onclick=playerInput0;
    }
    if(index == 1)
    {
         quizGameEL.onclick=playerInput1;
    }
    if(index == 2)
    {
        quizGameEL.onclick=playerInput2;
    }
    if(index == 3)
    {
        quizGameEL.onclick=playerInput3;
    }
    if(index == 4)
    {
        quizGameEL.onclick=playerInput4;
    }

}

//checks players answer and removes elements made by the function setupQuestion
//each question click will rest and trigger the next one until it finishes
function playerInput0(event)
{
    playerPush = event.target;
    playerAnswer =playerPush.textContent;
    console.log(playerAnswer);
    //penalize the player for clicking a wrong answer
    if(playerAnswer !== answerSheet[0].answer && playerAnswer !== null)
    {
        timerCount = timerCount-20;
       
       
    }
    //removes elements made by setupQuestion
    resetQuestion();
    //trigger the next question until it finishes
    setupQuestion(answerSheet, 1);
}

function playerInput1(event)
{
    
    playerPush = event.target;
    playerAnswer =playerPush.textContent;   
    if(playerAnswer !== answerSheet[1].answer && playerAnswer !== null)
    {
        timerCount = timerCount-20;
    }
    resetQuestion();
    setupQuestion(answerSheet, 2);
}

function playerInput2(event)
{
    
    playerPush = event.target;
    playerAnswer =playerPush.textContent;
    console.log(playerAnswer);
   
    if(playerAnswer !== answerSheet[2].answer && playerAnswer !== null)
    {
        timerCount = timerCount-20;
    }
    resetQuestion();
    setupQuestion(answerSheet, 3);
}

function playerInput3(event)
{
    
    playerPush = event.target;
    playerAnswer =playerPush.textContent;
    console.log(playerAnswer);
   
    if(playerAnswer !== answerSheet[3].answer && playerAnswer !== null)
    {
        timerCount = timerCount-20;
    }
    resetQuestion();
    setupQuestion(answerSheet, 4);
}

function playerInput4(event)
{
   
    playerPush = event.target;
    playerAnswer =playerPush.textContent;
    console.log(playerAnswer);
   
    if(playerAnswer !== answerSheet[4].answer && playerAnswer !== null)
    {
        timerCount = timerCount-20;
    }
    resetQuestion();
    //once the code reaches here, the game is done
    quizComplete = true;
    score = timerCount;
    timerCount = 0;
    console.log(score);
    //hides the timer
    timerElement.setAttribute("style", "visibility: hidden");
    finalScore(score);
}


//displays the final score
function finalScore(temp){
    var tempObj = document.createElement("h1");
    tempObj.textContent = "Your final score is " + temp;
    console.log(tempObj.textContent);
    tempObj.setAttribute("style", "text-align: center","display: flex",
    "justify-content: center","align-items:center");
    document.getElementById("quizGame").appendChild(tempObj);
    
}


//rests quizgame after every question
function resetQuestion()
{
    opt1.remove();
    opt2.remove();
    opt3.remove();
    opt4.remove();
    questionObj.remove();
}
   



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
    if (timerCount <= 0) {
      // Clears interval
      score = timerCount;
      clearInterval(timer);
    }
  }, 1000);
}


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);