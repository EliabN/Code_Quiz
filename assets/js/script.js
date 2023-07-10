var startBtn = document.querySelector("#start");
var h1 = document.querySelector("h1");
var buttonContainer = document.querySelector('#button-container');

var queNo = 0;
var score = 0;
var highScore = [];

console.log(score)


var allQ = [{
question: "What is an a array in JavaScript",
answers: ["Collect of datatypes", "Stores only strings", "A type of syntax", "Variable in an Oject"],
correctAnswer: "Collect of datatypes",
}, {
    question: "What is an a array in JavaScript",
    answers: ["Collect of datatypes", "Stores only strings", "A type of syntax", "Variable in an Oject"],
    correctAnswer: "Collect of datatypes",
    }];

function pickAnswer() {
    var quizQ = allQ[queNo] 
    console.log("Hello");
    h1.textContent = quizQ.question;
    var qNo = 1; 
    
    // Click event handler
    function checkAnswer(event) {
        var selectedAnswer = event.target.textContent.substring(2)

        console.log(selectedAnswer);
        
        if (selectedAnswer === quizQ.correctAnswer) {
          console.log('Correct!');
          score = score + 10;
        } else {
          console.log('Incorrect!');
          score = score - 5;
        }
        console.log(score);
    }

    for (var i = 0; i < quizQ.answers.length; i++) {

        var button = document.createElement('button');
        button.textContent = qNo + " " + quizQ.answers[i];
        console.log("Buttons");
        qNo++
        button.addEventListener('click', checkAnswer);
        buttonContainer.appendChild(button);
    }

    function saveUser() {
        var name = [{name:"James", score: 94}]
        point = JSON.stringify(point)
        localStorage.setItem("score", point);
    }

}



startBtn.addEventListener("click", pickAnswer);