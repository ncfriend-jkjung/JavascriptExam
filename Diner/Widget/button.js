import { widget } from "./baseWidget.js";
import { removeControl } from "./core.js";

function _createButton(id, option) {
  var el = document.createElement("button");
  el.textContent = option.label;
  el.onclick = option.onClick;

  return {
    id: id,
    el: el,
    dispose: function () {
      //DOM과 Controls에 모두 삭제하는 과정
      el.remove();
      removeControl(id);
    }
  };
}
export var createButton = widget(_createButton);