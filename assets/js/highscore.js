// Retrieve high scores from local storage
var highScoreData = localStorage.getItem("highScore");

// Set the text alignment of the h1 element to left
var h1 = document.querySelector("h1");
h1.setAttribute("style", "text-align: left;");

// Parse the high scores from JSON to an array
var scores = JSON.parse(highScoreData);

// Get the score list element
var scoreList = document.querySelector("#score-list");

// Add an event listener to the clear button
document.getElementById("clear").addEventListener("click", function() {
    // Prevent the default action of the button
    preventDefault();

    // Clear the local storage
    localStorage.clear();

    // Remove the score list element
    scoreList.remove();

    // Reset the scores array
    scores = [];

    // Re-display the scores
    display();
});

// Function to display the high scores
function display() {
    // Check if high scores exist
    if (highScoreData) {

        // Iterate over the scores and create list items
        scores.forEach(function(score) {
          var listItem = document.createElement("li");
          listItem.textContent = "Name: " + score.name + ", " + "Score: " + score.score;
          console.log(score.name + ": " + score.score);
          scoreList.appendChild(listItem);
        });
    }
}

// Call the display function
display();


