var startBtn = document.querySelector("#start");
var h1 = document.querySelector("h1");
var buttonContainer = document.querySelector('#button-container');
var form = 'hgh'

var quesNo = 0;
var score = 0;
//var highScore = [];

console.log(quesNo)


var allQ = [
    {
        question: "What is an a array in JavaScript",
        answers: ["Collect of datatypes", "Stores only strings", "A type of syntax", "Variable in an Oject"],
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
    }];
    
    var quizQ = allQ[quesNo]

    function startQuiz() {
        console.log("Hello");
      
        h1.setAttribute("style", "text-align: left;");
        document.querySelector('.card-contents').style.textAlign = 'left';
      
        h1.textContent = quizQ.question;
      
        createButtons();
      
        console.log(quesNo);
      
        startBtn.remove(); // Remove the start button from the DOM
    }

     
     
    // Click event handler
    function checkAnswer(event) {
        var selectedAnswer = event.target.textContent.substring(2);
        console.log(selectedAnswer);
      
        if (selectedAnswer === quizQ.correctAnswer) {
          console.log('Correct!');
          score = score + 10;
        } else {
          console.log('Incorrect!');
          score = score - 5;
        }
        console.log(score);
      
        removeButtons();
        nextQuestion(); // Call nextQuestion() only once to move to the next question
    }
    
    
    
    // var buttonContainer = document.querySelector('#button-container');
    // var currentButtons = document.querySelectorAll('#button-container button');
    
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
    

    //removeButtons()
    var highScore  = []
    var vvvv = localStorage.getItem("highScore")


    function createNameInput() {
        var cardContents = document.querySelector('.card-contents'); // Get the .card-contents element
      
        var nameForm = document.createElement("form");
        nameForm.id = "nameForm";
      
        var nameLabel = document.createElement("label");
        nameLabel.textContent = "Enter your name:";
        nameLabel.setAttribute("for", "nameInput");
      
        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "nameInput";
        nameInput.required = true;
      
        var submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
      
        nameForm.appendChild(nameLabel);
        nameForm.appendChild(nameInput);
        nameForm.appendChild(submitButton);
      
        cardContents.appendChild(nameForm); // Append the form to the .card-contents element
      
        nameForm.addEventListener("submit", function(event) {
            event.preventDefault();
          
            var nameInput = document.getElementById("nameInput");
            var name = nameInput.value;
            var score = 90; // Replace with the actual score
          
            console.log(typeof name);
          
            // Call the saveUserScore function to update the highScore
            saveUserScore(name, score);
          
            // Redirect to highscore.html
            window.location.href = "highscore.html";
        });
    }
    
    function saveUserScore(name, score) {
        var highScore = localStorage.getItem("highScore");
        var highScoreData;
      
        try {
          highScoreData = highScore ? JSON.parse(highScore) : [];
        } catch (error) {
          console.error("Error parsing highScore:", error);
          highScoreData = [];
        }
      
        // Create a new score record
        var newScore = { name: name, score: score };
      
        // Add the new score to the highScoreData array
        highScoreData.push(newScore);
      
        // Store the updated highScoreData back in localStorage
        localStorage.setItem("highScore", JSON.stringify(highScoreData));
      }
    
    function nextQuestion() {
        quesNo++;
        if (quesNo < allQ.length) {
          quizQ = allQ[quesNo];
          h1.textContent = quizQ.question;
          removeButtons();
          createButtons();
          console.log("New Q" + quesNo + "___" + quizQ.question);
        } else {
          console.log("Quiz Completed");
          h1.textContent = "Quiz Completed";
          var scoreText = document.createElement("p");
          scoreText.textContent = "Your final score is " + score;
          buttonContainer.appendChild(scoreText);
          createNameInput();
        }
    }

    

    

  
  

startBtn.addEventListener("click", startQuiz);
