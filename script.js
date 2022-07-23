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
var homePageState = homePage.getAttribute("data-state");
var quizBodyState = quizBody.getAttribute("data-state");


var questionsList = "Question 1, Question 2".split(",");
var ans1List = "Square Brackets, Arrays ".split(",");
var ans2List = "Curly Braces, Cool".split(",");
var ans3List = "Parentheses, Cool".split(",");
var ans4List = "Semicolon, Pool".split(",");

var index = 0;

question.textContent = questionsList[index];
ans1.textContent = ans1List[index];
ans2.textContent = ans2List[index];
ans3.textContent = ans3List[index];
ans4.textContent = ans3List[index];
var correct = [".ans1", ".ans3"]

linkScores.textContent = "Hey";
title.textContent = "UPenn LPS Coding Quiz (by Freddy Kwak)";
timer.textContent = "timer";
startButton.textContent = "Start Quiz";
ans1.textContent = "";
ans2.textContent = "";
ans3.textContent = "";
ans4.textContent = "";
question.textContent = "";

function navigate(next) {
    index = index + next;

    question.textContent = questionsList[index];
    ans1.textContent = ans1List[index];
    ans2.textContent = ans2List[index];
    ans3.textContent = ans3List[index];
    ans4.textContent = ans3List[index];
}

startButton.addEventListener("click", function () {
    title.textContent = "";
    start.textContent = "";
    navigate(0);
})

ansChoices.addEventListener("click", function (event) {
    var element = event.target

    if (element.matches("button")) {
        title.innerHTML = "";
        if (element.matches(correct[index])) {
            event.stopPropagation();
            navigate(1);
            if (index = 5) {

            }
        } else {
            if (timeLeft = 0) {

            }
        }

        
    }



})