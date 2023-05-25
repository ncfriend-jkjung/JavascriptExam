import { widget } from "./baseWidget.js";
import { removeControl } from "./core.js";

function _createH3(id, option) {
  var el = document.createElement("h3");
  el.textContent = option.label;

  return {
    id: id,
    el: el,
    dispose: function () {
      //DOM과 Controls에 모두 삭제하는 과정
      el.remove();
      removeControl(id);
    },
    rename: function (label) {
      el.textContent = label;
    }
  };
}
export var createH3 = widget(_createH3);