/*Add your JavaScript here*/

var robloxScore = 0; //store roblox score
var genshinScore = 0; //store genshin score

var questionCount = 0; //store number of answers clicked on

// store HTML elements using DOM
var result = document.getElementById("result");
var displayResult = document.getElementById("displayResult");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Extension 1: Add more questions
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");


// listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", roblox);
q1a2.addEventListener("click", genshin);

q2a1.addEventListener("click", genshin);
q2a2.addEventListener("click", roblox);

q3a1.addEventListener("click", genshin);
q3a2.addEventListener("click", roblox);

q4a1.addEventListener("click", roblox);
q4a2.addEventListener("click", genshin);

q5a1.addEventListener("click", genshin);
q5a2.addEventListener("click", roblox);



// listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);

// track roblox score and check if quiz is complete
function roblox() {
  robloxScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " robloxScore = " + robloxScore);


  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
  
}


// track genshin score and check if quiz is complete
function genshin() {
  genshinScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " genshinScore = " + genshinScore);


  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
  
}



// update quiz result

function updateResult() {
  displayResult.addEventListener("click", display);
}

function display() {
  if (robloxScore >= 3) {
      result.innerHTML = "You are a roblox player!";
      console.log("You are a roblox player!");      
    } else if (genshinScore >= 3) {
      result.innerHTML = "You are a genshin player!";
      console.log("You are a genshin player!");
    }
}

// restart quiz
function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0; // <--
  robloxScore = 0; // <--
  genshinScore = 0; // make sure to just assign/reinitialize these variables, or else when you click restart button and answer the quiz again, nothing shows up (don't redeclare the variables with "var"!)
  console.log("questionCount = " + questionCount + " robloxScore = " + robloxScore + " genshinScore = " + genshinScore);
  enableQuestions();
}

// extension 3 - disable buttons

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);


function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
}

function disableQ5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
}

//enable buttons
function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
}