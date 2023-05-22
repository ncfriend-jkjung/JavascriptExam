import { Item } from "./items.js";

var startEl = document.getElementById("start");
var comEl = document.getElementById("com");
var gameEl = document.getElementById("gameBox");

var items = ["가위", "바위", "보"];
var idx = 0;
var timerID;

var ScissorEl = new Item("가위", callGame);
var RockEl = new Item("바위", callGame);
var PaperEl = new Item("보", callGame);
var Btns = [ScissorEl, RockEl, PaperEl];
Btns.forEach(function (item) {
  item.render(gameEl);
});

startEl.onclick = function () {

  timerID = setInterval(() => {
    comEl.textContent = items[(++idx) % 3];
  }, 100);

  startEl.setAttribute("disabled", true);

  Btns.forEach(function (item) {
    item.setDisable(false);
  });
};

function callGame(name) {
  var com = items[idx % 3];
  if (com == name) {
    alert("비겼음");
  } else if (items[(idx + 1) % 3] == name) {
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
// var ScissorEl = document.getElementById("scissor");
// ScissorEl.onclick = function () {
//   var com = items[idx % 3];
//   if (com == "가위") {
//     alert("비겼습니다.");
//   } else if (com == "바위") {
//     alert("졌습니다.");
//   } else {
//     alert("이겼습니다.");
//   }

//   clearInterval(timerID);
// };

// var RockEl = document.getElementById("rock");
// RockEl.onclick = function () {
//   var com = items[idx % 3];
//   if (com == "바위") {
//     alert("비겼습니다.");
//   } else if (com == "보") {
//     alert("졌습니다.");
//   } else {
//     alert("이겼습니다.");
//   }

//   clearInterval(timerID);
// };

// var PaperEl = document.getElementById("paper");
// PaperEl.onclick = function () {
//   var com = items[idx % 3];
//   if (com == "보") {
//     alert("비겼습니다.");
//   } else if (com == "가위") {
//     alert("졌습니다.");
//   } else {
//     alert("이겼습니다.");
//   }

//   clearInterval(timerID);
// };