export function createCheckbox(option) {
  var el = document.createElement("input");
  el.type = "checkbox";
  el.onchange = option.onChange;
  el.checked = option.checked;

  return {
    el: el

  };
}