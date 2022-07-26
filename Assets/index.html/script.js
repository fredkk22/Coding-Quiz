var timer = document.querySelector("h1");
var title = document.querySelector("h2");
var question = document.querySelector("h3");
var linkScores = document.querySelector(".link");
var instructions1 = document.querySelector(".instructions1");
var instructions2 = document.querySelector(".instructions2");
var instructions3 = document.querySelector(".instructions3");
var startButton = document.querySelector(".startbtn");
var quizBody = document.querySelector(".quizbody");
var homePage = document.querySelector(".homepage");
var ans1 = document.querySelector(".ans1")
var ans2 = document.querySelector(".ans2")
var ans3 = document.querySelector(".ans3")
var ans4 = document.querySelector(".ans4")
var ansChoices = document.querySelector(".anschoices");
var questionsList = "1. What comes after document.querySelector?, 2. What type of data comes in quotation marks?, 3. What adds a child element to a parent element in vanilla?, 4. Which returns a true or false value?, 5. What kind of file can style the HTML file?".split(",");
var ans1List = "Square Brackets, String, .textContent, a lean, reset.css".split(",");
var ans2List = "Curly Braces, Array, .innerHTML, a boolean, style.css".split(",");
var ans3List = "Parentheses, Unordered List, .appendChildren, a number, index.html".split(",");
var ans4List = "Semicolon, Ordered List, .appendChild, false, All of the Above".split(",");
var correct = ".ans3, .ans1, .ans4, .ans2, .ans4".split(",");
var i = 0;
var timeLeft = 60;
var main = document.querySelector("main")
var endOfGame = document.querySelector(".endofgame")
var form = document.querySelector(".endform")
var result = document.querySelector(".resultalert")
var playerInitials = document.querySelector("#typeinitials");
var submitbtn = document.querySelector(".submit");
var numberAns = document.querySelector(".numansquestions");
var finalTime = document.querySelector(".finaltime");


linkScores.textContent = "High Scores";
instructions1.textContent = "This quiz contains 5 questions about coding in a multiple choice form."
instructions2.textContent = "The quiz will continue until either the timer at the top right corner of the screen runs out or the user answers all the questions."
instructions3.textContent = "Whoever answers all of the questions the fastest may enter their initials at the end of the quiz to enter the High Scores list."
title.textContent = "UPenn LPS Coding Quiz (by Freddy Kwak)";
timer.textContent = "Time: " + timeLeft + " seconds remaining";
startButton.textContent = "Start Quiz";
form.textContent = "Enter your initials here:";
submitbtn.textContent = "Submit";
numberAns.textContent = "Questions Answered: " + i;
finalTime.textContent = "Time Left: " + timeLeft + " seconds";

main.removeChild(quizBody);
main.removeChild(endOfGame);

function navigate(next) {
    i = i + next;

    question.textContent = questionsList[i];
    ans1.textContent = ans1List[i];
    ans2.textContent = ans2List[i];
    ans3.textContent = ans3List[i];
    ans4.textContent = ans4List[i];

    main.appendChild(quizBody);
}

function beginTimer() {
    var timeInterval = setInterval(function () {
        timeLeft--;

        timer.textContent = "Time:" + timeLeft + " seconds remaining";

        if (timeLeft < 1) {
            clearInterval(timeInterval);
            timer.textContent = "Time ran out!";
            numberAns.textContent = "Questions Answered: " + i;
            finalTime.textContent = "Time Left: " + timeLeft + " seconds";
        }

        if (i === 5) {
            clearInterval(timeInterval);
            timer.textContent = "Congrats! You completed the quiz!"
            numberAns.textContent = "Questions Answered: " + i;
            finalTime.textContent = "Time Left: " + timeLeft + " seconds";
        }
    }, 1000);
}

startButton.addEventListener("click", function () {
    main.removeChild(homePage);
    navigate(0);
    beginTimer();
})

ansChoices.addEventListener("click", function (event) {
    var element = event.target

    if (element.matches("button")) {
        if (element.matches(correct[i])) {
            event.stopPropagation();
            navigate(1);
            if (timeLeft < 1) {
                main.removeChild(quizBody);
                main.appendChild(endOfGame);
            }

            if (i === 5) {
                main.removeChild(quizBody);
                main.appendChild(endOfGame);
            }
        } else {
            timeLeft = timeLeft - 10;

            if (timeLeft < 1) {
                main.removeChild(quizBody);
                main.appendChild(endOfGame);
            }
        }
    }
})

function saveLastPlayer() {
    var player = playerInitials.value;

    localStorage.setItem("Player", JSON.stringify(player));
    window.location.href = "index.html";
}

submitbtn.addEventListener("click", function () {

    saveLastPlayer();
})

