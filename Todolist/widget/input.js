export function createInput(option) {
  var el = document.createElement("input");

  return {
    el: el,
    getValue: function () {
      return el.value;
    },
    focus: function () {
      el.focus();
    },
    clear: function () {
      el.value = "";
    }
  };
}