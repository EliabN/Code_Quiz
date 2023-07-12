// Retrieve high scores from local storage
var highScoreData = localStorage.getItem("highScore");
var h1 = document.querySelector("h1");

h1.setAttribute("style", "text-align: left;");
        
// Check if high scores exist
if (highScoreData) {
    // Parse the high scores from JSON to an array
    var scores = JSON.parse(highScoreData);
  
    // Get the score list element
    var scoreList = document.querySelector("#score-list");

    console.log(scores);
  
    // Iterate over the scores and create list items
    scores.forEach(function(score) {
      var listItem = document.createElement("li");
      listItem.textContent = "Name: " + score.name + ", " + "Score: " + score.score;
      console.log(score.name + ": " + score.score);
      scoreList.appendChild(listItem);
    });
}