export function createSpan(option) {
  var el = document.createElement("span");
  el.textContent = option.label;

  return {
    el: el

  };
}