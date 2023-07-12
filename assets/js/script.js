// Define the startBtn variable.
var startBtn = document.querySelector("#start");

// Define the h1 variable.
var h1 = document.querySelector("h1");

// Define the buttonContainer variable.
var buttonContainer = document.querySelector('#button-container');

// Define the form variable.
var form = 'hgh'

// Define the quesNo variable.
var quesNo = 0; // Current question number.

// Define the score variable.
var score = 0; // User's score.

// Define the allQ variable.
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
    question: "JavaScript",
    answers: ["Collect of datatypes", "BBBBBBB", "BBBBBBB", "BBBBBBB"],
    correctAnswer: "Collect of datatypes",
  },
  {
    question: "ZZZZZZZJavaScript",
    answers: ["Collect of datatypes", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC"],
    correctAnswer: "Collect of datatypes",
  },
];

// Define the quizQ variable.
var quizQ = allQ[quesNo]; // Current question.

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
    var selectedAnswer = event.target.textContent.substring(2);
  
    // Check if the selected answer is the correct answer.
    if (selectedAnswer === quizQ.correctAnswer) {
      console.log('Correct!');
      score = score + 10;
    } else {
      console.log('Incorrect!');
      score = score - 5;
    }
  
    // Remove the buttons from the DOM.
    removeButtons();
  
    // Call the nextQuestion() function to move to the next question.
    nextQuestion();
  }
  
  // This code defines the createButtons() function, which creates the buttons for the current question.
  function createButtons() {
  
    // Iterate over the answers in the current question and create a button for each one.
    for (var i = 0; i < quizQ.answers.length; i++) {
      var button = document.createElement('button');
      button.textContent = i + 1 + " " + quizQ.answers[i];
      button.addEventListener('click', checkAnswer);
      buttonContainer.appendChild(button);
    }
  }
  
  // This code defines the removeButtons() function, which removes the buttons from the DOM.
  function removeButtons() {
  
    // Remove all of the buttons from the buttonContainer element.
    while (buttonContainer.firstChild) {
      buttonContainer.removeChild(buttonContainer.firstChild);
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
  
  // Start timer
  // This function starts a timer that counts down from 10 to 0.
  // The timer will be cleared when the quiz is completed.
  function startTimer() {
    timer = setInterval(function() {
      console.log("Timer: " + (10 - quesNo));
      if (quesNo === 10) {
        clearInterval(timer);
      }
    }, 1000);
  }
  
  function nextQuestion() {
  
    // This function moves to the next question in the quiz.
  
    // Increment the question number.
    quesNo++;
  
    // If the question number is less than the length of the allQ array,
    // then get the next question and display it.
    if (quesNo < allQ.length) {
      quizQ = allQ[quesNo];
      h1.textContent = quizQ.question;
      removeButtons();
      createButtons();
      console.log("New Q" + quesNo + "___" + quizQ.question);
    } else {
      // Otherwise, the quiz is complete, so display a message and
      // create a form for the user to enter their name.
      console.log("Quiz Completed");
      h1.textContent = "Quiz Completed";
      var scoreText = document.createElement("p");
      scoreText.textContent = "Your final score is " + score;
      buttonContainer.appendChild(scoreText);
      createNameInput();
    }
  }
  
  // When the start button is clicked, the startTimer() function is called.
  startBtn.addEventListener("click", function() {
    startQuiz()
    startTimer();
  });