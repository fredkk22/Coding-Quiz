var playerList = document.querySelector(".playerlist");
var highScoresTitle = document.querySelector(".highscore");
var highScoresList = [];
highScoresTitle.textContent = "High Scores List";

function renderPlayers() {
    storedPlayers = JSON.parse(localStorage.getItem("Player"));

    for (var i = 0; i < highScoresList.length; i++) {

        var highScore = highScoresList[i];

        var li = document.createElement("li");
        li.textContent = highScore;
        li.setAttribute("data-index", i);

        playerList.appendChild(li);
    }

}

function display() {

    var storedPlayers = JSON.parse(localStorage.getItem("Player"));

    highScoresList = highScoresList + storedPlayers;

    


    renderPlayers()
}

display();

localStorage.getItem("Player");