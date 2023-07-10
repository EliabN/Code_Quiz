var startBtn = document.querySelector("#start");
var h1 = document.querySelector("h1");
var buttonContainer = document.querySelector('#button-container');

var quesNo = 0;
var score = 0;
var highScore = [];

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
    
    h1.textContent = quizQ.question;

    createButtons()
    //removeButtons()

    function saveUser() {
        var name = "James"
        point = JSON.stringify(point)
        localStorage.setItem("score", point);
    }
    console.log(quesNo)
    
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


    function nextQuestion() {
        if (quesNo < allQ.length) {
            quesNo++
          quizQ = allQ[quesNo];
          h1.textContent = quizQ.question;
          removeButtons();
          createButtons();
          console.log("New Q" + quesNo + "___" + quizQ.question);
        } else {
            console.log("Quiz Completed")
            h1.textContent = "Quiz Completed";
        }
    }
    

startBtn.addEventListener("click", startQuiz);