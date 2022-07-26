function renderPlayers() {
    var playerList = document.querySelector(".playerlist");
    var highScoresTitle = document.querySelector(".highscore");
    var storedPlayers = JSON.parse(localStorage.getItem("Player"));
    var storedScores = JSON.parse(localStorage.getItem("High Scores"));
    var storedAnswered = JSON.parse(localStorage.getItem("Questions Answered"));
    var highScoresList = [];
    var storedScoresList = [];
    var storedAnsweredList = [];

    highScoresTitle.textContent = "High Scores List";

    highScoresList = highScoresList.concat(storedPlayers);
    storedScoresList = storedScoresList.concat(storedScores);
    storedAnsweredList = storedAnsweredList.concat(storedAnswered);

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

renderPlayers();