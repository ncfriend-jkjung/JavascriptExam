import { Item } from "./item2.js";

let startEl = document.getElementById("start");
let comEl = document.getElementById("com");
const gameEl = document.getElementById("gameBox");



let idx = 0;
let timerID: NodeJS.Timer;

const Btns = [new Item("가위", callGame), new Item("바위", callGame), new Item("보", callGame)];
Btns.forEach(function (item) {
  item.render(gameEl);
});
//var items = ["가위", "바위", "보"];

if(startEl != null){
  startEl.onclick = function () {

    timerID = setInterval(() => {
      if(comEl != null)
        comEl.textContent = Btns[(++idx) % Btns.length].getName();
    }, 100);
  
    if(startEl != null)
      startEl.setAttribute("disabled", "true");
  
    Btns.forEach(function (item) {
      item.setDisable(false);
    });
  };
}


function callGame(name : string) {
  var com = Btns[idx % Btns.length].getName();
  if (com == name) {
    alert("비겼음");
  } else if (Btns[(idx + 1) % Btns.length].getName() == name) {
    alert("이겼음");
  } else {
    alert("졌음");
  }
  clearInterval(timerID);
  if(startEl != null)
    startEl.removeAttribute("disabled");
  Btns.forEach(function (item) {
    item.setDisable(true);
  })
}
