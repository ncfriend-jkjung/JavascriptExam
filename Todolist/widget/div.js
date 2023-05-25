import { addControl } from "./core.js";
import { widget } from "./baseWidget.js";
import { removeControl } from "./core.js";

function _createDiv(id, option) {
  var el = document.createElement("div");
  var children = [];


  return {
    id: id,
    el: el,
    append: function (control) {
      el.append(control.el);
      children.push(control);
    },
    dispose: function () {
      //연결된 자식 모두 삭제
      children.forEach(function (child) { child.dispose(); });
      //DOM과 Controls에 모두 삭제하는 과정
      el.remove();
      removeControl(id);
    }
  };
}
export var createDiv = widget(_createDiv);