export function Item(name: string, onClick: (name: string)=> void) {
  this.itemEl = document.createElement("button");
  this.itemEl.setAttribute("disabled", true);
  this.itemEl.textContent = name;

  this.itemEl.onclick = function () {
    onClick(name);
  }
}
Item.prototype.render = function (target: HTMLElement) {
  target.append(this.itemEl);
}
Item.prototype.setDisable = function (dis: HTMLElement) {
  if (dis) {
    this.itemEl.setAttribute("disabled", true);
  } else {
    this.itemEl.removeAttribute("disabled");
  }
};
Item.prototype.getName = function () {
  return this.itemEl.textContent;
}