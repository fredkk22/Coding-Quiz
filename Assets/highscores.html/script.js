// Print page title on the screen
var highScoresTitle = document.querySelector("h1");
highScoresTitle.textContent = "High Scores List";

// Function to render player initials, time remaining (in order from most to least), and number of questions answered (in the same order)
function renderPlayers() {
    var playerList = document.querySelector("ol");
    var storedPlayers = JSON.parse(localStorage.getItem("Player"));
    var storedScores = JSON.parse(localStorage.getItem("High Scores"));
    var storedAnswered = JSON.parse(localStorage.getItem("Questions Answered"));
    var highScoresList = [];
    var storedScoresList = [];
    var storedAnsweredList = [];
    // Concat arrays with newly added values
    highScoresList = highScoresList.concat(storedPlayers);
    storedScoresList = storedScoresList.concat(storedScores);
    storedAnsweredList = storedAnsweredList.concat(storedAnswered);
    // For Loop to create and append list items to High Scores list
    for (var i = 0; i < highScoresList.length; i++) {
        var highScore = highScoresList[i];
        var storedScore = storedScoresList[i];
        var storedAnswer = storedAnsweredList[i];
        var li = document.createElement("li");

        li.textContent = highScore + " (" + storedScore + " seconds remaining, " + storedAnswer + " questions answered)";
        li.setAttribute("data-index", i);
        playerList.appendChild(li);
    }
}
// Only render list items if "Player" contains values
if (localStorage.getItem("Player")) {
    renderPlayers();
}