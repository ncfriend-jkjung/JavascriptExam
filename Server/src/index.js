import { Item } from "./items.js";

var startEl = document.getElementById("start");
var comEl = document.getElementById("com");
var gameEl = document.getElementById("gameBox");

var idx = 0;
var timerID;

var Btns = [new Item("가위", callGame), new Item("바위", callGame), new Item("보", callGame)];
Btns.forEach(function (item) {
  item.render(gameEl);
});
//var items = ["가위", "바위", "보"];

startEl.onclick = function () {

  timerID = setInterval(() => {
    comEl.textContent = Btns[(++idx) % Btns.length].getName();
  }, 100);

  startEl.setAttribute("disabled", true);

  Btns.forEach(function (item) {
    item.setDisable(false);
  });
};

function callGame(name) {
  var com = Btns[idx % Btns.length].getName();
  if (com == name) {
    alert("비겼음");
  } else if (Btns[(idx + 1) % Btns.length].getName() == name) {
    alert("이겼음");
  } else {
    alert("졌음");
  }
  clearInterval(timerID);
  startEl.removeAttribute("disabled");
  Btns.forEach(function (item) {
    item.setDisable(true);
  })
}
