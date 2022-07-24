var title = document.querySelector("h1");
var scores = document.querySelector("ol");

title.textContent = "High Scores";

localStorage.setItem("scores", "playerinitials");

var li = document.querySelector("li");

localStorage.getItem("scores");

scores.appendChild("li");