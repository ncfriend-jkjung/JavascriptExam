export function Item(name, onClick) {
  this.itemEl = document.createElement("button");
  this.itemEl.setAttribute("disabled", true);
  this.itemEl.textContent = name;

  this.itemEl.onclick = function () {
    onClick(name);
  }
}
Item.prototype.render = function (target) {
  target.append(this.itemEl);
}
Item.prototype.setDisable = function (dis) {
  if (dis) {
    this.itemEl.setAttribute("disabled", true);
  } else {
    this.itemEl.removeAttribute("disabled");
  }
};
Item.prototype.getName = function () {
  return this.itemEl.textContent;
}