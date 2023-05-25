import { widget } from "./baseWidget.js";
import { removeControl } from "./core.js";

function _createCheckbox(id, option) {
  var el = document.createElement("input");
  el.type = "checkbox";
  el.onchange = option.onChange;
  el.checked = option.checked;

  return {
    el: el,
    dispose: function () {
      //DOM과 Controls에 모두 삭제하는 과정
      el.remove();
      removeControl(id);
    }
  };
}
export var createCheckbox = widget(_createCheckbox);