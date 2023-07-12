// Define the startBtn variable.
var startBtn = document.querySelector("#start");

// Define the h1 variable.
var h1 = document.querySelector("h1");

// Define the buttonContainer variable.
var buttonContainer = document.querySelector('#button-container');

// p element #message 
var message = document.querySelector('#message');

// Define the quesNo variable.
var quesNo = 0; // Current question number.

// Define the score variable.
var score = 0; // User's score.

// Timer var
var timer = null;

// Time remaining
var timeRemaining = 90;

// Define the all question as object array variable.
var allQ = [
  {
    // Question.
    question: "What is an a array in JavaScript",
    // List of answers.
    answers: ["Collect of datatypes", "Stores only strings", "A type of syntax", "Variable in an Oject"],
    // Correct answer.
    correctAnswer: "Collect of datatypes",
  },
    {
    question: "Commonly used data type DO NOT INCLUDE:",
    answers: ["String", "Boolean", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
    },
    {
        question: "String Values Must be inclosed with _____ when being assigned to valiables:",
        answers: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        correctAnswer: "Quotes",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<js>", "<script>", "<scripting>", "<javascript>"],
        correctAnswer: "<script>",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["The <body> section", "Both the <head> section and the <body>", "The <head> section", "None"],
        correctAnswer: "Both the <head> section and the <body>",
        }];
    
// Questions object array variable.
var quizQ = allQ[quesNo]

// This code defines the startQuiz() function, which is called when the user clicks the start button.
function startQuiz() {

  // Set the text alignment of the h1 element to left.
  h1.setAttribute("style", "text-align: left;");
  document.querySelector('.card-contents').style.textAlign = 'left';

  // Set the h1 element's text to the question at the current index in the allQ array.
  h1.textContent = quizQ.question;

  // Create the buttons for the current question.
  createButtons();

  // Remove the start button from the DOM.
  startBtn.remove();
}

// This code defines the checkAnswer() function, which is called when the user clicks one of the buttons.
function checkAnswer(event) {

    // Get the selected answer from the event object.
    selectedAnswer = event.target.textContent.substring(2);
  
    // Check if the selected answer is correct.
    if (selectedAnswer === quizQ.correctAnswer) {
      // Add a <p> element at the bottom of the button answers to display "Correct!" with a break line.
      message.textContent = "Correct!\n";
      // Add points
      score = score + 10;
    } else {
      // Add a <p> element at the bottom of the button answers to display "Wrong!" with a break line.
      message.textContent = "Wrong!\n";
      // Deduct points
      score = score - 5;
      // If answer incorrect remaining time -6
      timeRemaining -= 6;
    }
    removeButtons();
    // Call the nextQuestion() function to move to the next question.
    nextQuestion();
  }
    
    
    
    
    function createButtons() {
        
        var qNo = 1;
        for (var i = 0; i < quizQ.answers.length; i++) {
            var button = document.createElement('button');
            button.setAttribute("style", "display: block")
            button.textContent = qNo + " " + quizQ.answers[i];
            console.log("Buttons" + quesNo);
            qNo++
            button.addEventListener('click', checkAnswer);
            buttonContainer.appendChild(button);

        }
    }

    // Remove existing buttons
    function removeButtons() {
        // Remove existing buttons
        while (buttonContainer.firstChild) {
          buttonContainer.removeChild(buttonContainer.firstChild);
          console.log("Remove");
        }
    }

    // This code defines the createNameInput() function, which creates a form for the user to enter their name.
function createNameInput() {

  // Get the .card-contents element.
  var cardContents = document.querySelector('.card-contents');

  // Create a new form element.
  var nameForm = document.createElement("form");
  nameForm.id = "nameForm";

  // Create a label element for the name input.
  var nameLabel = document.createElement("label");
  nameLabel.textContent = "Enter your name:";
  nameLabel.setAttribute("for", "nameInput");

  // Create a text input element for the name.
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "nameInput";
  nameInput.required = true;

  // Create a submit button for the form.
  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.setAttribute("style", "font-size: 18px")

  // Append the label, text input, and submit button to the form element.
  nameForm.appendChild(nameLabel);
  nameForm.appendChild(nameInput);
  nameForm.appendChild(submitButton);

  // Append the form element to the .card-contents element.
  cardContents.appendChild(nameForm);

  // Add an event listener to the form element to handle the submit event.
  nameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the value of the name input element.
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;

    // Call the saveUserScore() function to update the highScore.
    saveUserScore(name, score);

    // Redirect to highscore.html.
    window.location.href = "highscore.html";
        });
    }
    
    function saveUserScore(name, score) {

        // This function saves the user's score to localStorage.
      
        // Get the current highScore from localStorage.
        var highScore = localStorage.getItem("highScore");
      
        // Create a new score record.
        var newScore = { name: name, score: score };
      
        // Add the new score to the highScore array.
        var highScoreData;
        try {
          highScoreData = highScore ? JSON.parse(highScore) : [];
        } catch (error) {
          console.error("Error parsing highScore:", error);
          highScoreData = [];
        }
        highScoreData.push(newScore);
      
        // Store the updated highScoreData back in localStorage.
        localStorage.setItem("highScore", JSON.stringify(highScoreData));
    }

      function startTimer() {
        timer = setInterval(function() {
          // This function is called every 1000 milliseconds (1 second).
          if (timeRemaining > 1) {
            timeRemaining--;
            // This calculates the time remaining.
            console.log("Timer: " + timeRemaining);
            // This logs the time remaining to the console.
            document.querySelector(".timer").textContent = "Timer: " + timeRemaining;
            // This updates the content of the `.timer` element with the current time remaining.
          } else {
            // The timer has reached 0.
            clearInterval(timer);
            document.querySelector(".timer").textContent = "Timer: " + 0;
            buttonContainer.remove();
            finished();
          }
        }, 1000);
      }
      
      // This function moves to the next question in the quiz.
      function nextQuestion() {

        // This function moves to the next question in the quiz.
      
        // Increment the question number.
        quesNo++;
      
        // If the question number is less than the length of the allQ array and
        // the time remaining is greater than 0,
        // then get the next question and display it.
        if (quesNo < allQ.length && timeRemaining > 0) {
          quizQ = allQ[quesNo];
          h1.textContent = quizQ.question;
          removeButtons();
          createButtons();
          console.log("New Q" + quesNo + "___" + quizQ.question);
        } else {
          // Otherwise
          finished();
        }
    }

      // The quiz is complete
      function finished() {
        // Display a finish message and
        // create a form for the user to enter their name.
        h1.textContent = "Quiz Completed";
        var scoreText = document.createElement("p");
        scoreText.textContent = "Your final score is " + score;
        buttonContainer.appendChild(scoreText);
        message.remove();
        createNameInput();
      }



    

    

  
  

// This code adds an event listener to the start button.
// When the start button is clicked, the startTimer() function is called.
startBtn.addEventListener("click", function() {
    startTimer();
    startQuiz();
  });
