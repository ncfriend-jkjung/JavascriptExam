export function Chef(name) {
  this.name = name;
  this.status = "ready";
  this.menu = { name: "대기" };

}
Chef.prototype.isAvailable = function () {
  if (this.status == "ready") {
    return true;
  }
  return false;
};
Chef.prototype.cookAsnyc = function (menu, chef) {

  //cook menu

  return new Promise(function (resolve) {
    this.status = "cooking";
    setTimeout(() => {
      //this.status = "ready";
      //this.menu = "대기";
      resolve([menu, chef]);
    }, menu.cookTime);
  }.bind(this));
};
Chef.prototype.setMenu = function (menu) {
  this.menu = menu;
};
Chef.prototype.clearMenu = function () {
  this.status = "ready";
  this.menu = { name: "대기" };
}