var startBtn = document.querySelector("#start");
var h1 = document.querySelector("h1");

var q1 = {
question: "What is an a array in JavaScript",
answers: ["Collect of datatypes", "Stores only strings", "A type of syntax", "Variable in an Oject"],
correctAnswer: "Collect of datatypes",
};

function pickAnswer() {

    console.log("Hello");
    h1.textContent = q1.question;
    
}


startBtn.addEventListener("click", pickAnswer);