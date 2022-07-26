function renderPlayers() {
    var playerList = document.querySelector(".playerlist");
    var highScoresTitle = document.querySelector(".highscore");
    var storedPlayers = JSON.parse(localStorage.getItem("Player"));
    var highScoresList = [];

    highScoresTitle.textContent = "High Scores List";

    highScoresList = highScoresList.concat(storedPlayers);

    for (var i = 0; i < highScoresList.length; i++) {

        var highScore = highScoresList[i];

        var li = document.createElement("li");
        li.textContent = highScore;
        li.setAttribute("data-index", i);

        playerList.appendChild(li);
    }
}

renderPlayers();