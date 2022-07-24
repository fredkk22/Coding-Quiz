var header = document.querySelector("header");
var title = document.querySelector("h3");
var question = document.querySelector("h4");
var ansList = document.querySelector("ul");
var linkScores = document.querySelector(".link");
var timer = document.querySelector(".timer");
var topofheader = document.querySelector(".topofheader");
var instructions = document.querySelector(".instructions");
var start = document.querySelector(".start");
var startButton = document.querySelector(".startbtn");
var quiz = document.querySelector(".quiz");
var quizBody = document.querySelector(".quizbody");
var homePage = document.querySelector(".homepage");
var ans1 = document.querySelector(".ans1")
var ans2 = document.querySelector(".ans2")
var ans3 = document.querySelector(".ans3")
var ans4 = document.querySelector(".ans4")
var ansChoices = document.querySelector(".anschoices");
var questionsList = "Question 1, Question 2".split(",");
var ans1List = "Square Brackets, Arrays ".split(",");
var ans2List = "Curly Braces, Cool".split(",");
var ans3List = "Parentheses, Cool".split(",");
var ans4List = "Semicolon, Pool".split(",");
var index = 0;
var correct = [".ans1", ".ans2"]
var timeLeft = 60;
var container = document.querySelector(".container")
var endOfGame = document.querySelector(".endofgame")
var form = document.querySelector(".endform")

question.textContent = questionsList[index];
ans1.textContent = ans1List[index];
ans2.textContent = ans2List[index];
ans3.textContent = ans3List[index];
ans4.textContent = ans3List[index];

linkScores.textContent = "Hey";
title.textContent = "UPenn LPS Coding Quiz (by Freddy Kwak)";
timer.textContent = "Time: " + timeLeft + " seconds remaining";
startButton.textContent = "Start Quiz";
form.textContent = "Enter your initials here:";

container.removeChild(quizBody);
container.removeChild(endOfGame);

function navigate(next) {
    index = index + next;

    question.textContent = questionsList[index];
    ans1.textContent = ans1List[index];
    ans2.textContent = ans2List[index];
    ans3.textContent = ans3List[index];
    ans4.textContent = ans3List[index];

    container.appendChild(quizBody);
}

function beginTimer() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time:" + timeLeft + " seconds remaining";

        if (timeLeft < 1) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

startButton.addEventListener("click", function () {
    container.removeChild(homePage);
    navigate(0);
    beginTimer();
})

ansChoices.addEventListener("click", function (event) {
    var element = event.target

    if (element.matches("button")) {
        title.innerHTML = "";
        if (element.matches(correct[index])) {
            event.stopPropagation();
            navigate(1);
            if (timeLeft < 1) {
                container.removeChild(quizBody);
                container.appendChild(endOfGame);
                timer.textContent = "Time ran out!"
            }

        } else {
            timeLeft = timeLeft - 5;
            if (timeLeft < 1) {
                container.removeChild(quizBody);
                container.appendChild(endOfGame);
                timer.textContent = "Time ran out!"
            }
        }
    }
})