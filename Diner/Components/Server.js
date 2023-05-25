export function Server(name, serveTime) {
  this.name = name;
  this.serveTime = serveTime;
  this.status = "ready";
  this.menu = { name: "대기" };

}
Server.prototype.isAvailable = function () {
  if (this.status == "ready") {
    return true;
  }
  return false;
};
Server.prototype.serveAsnyc = function (menu, server) {
  //serve menu

  return new Promise(function (resolve) {
    this.status = "serving";
    setTimeout(() => {
      //this.status = "ready";
      //this.menu = "대기";
      resolve([menu, server]);
    }, this.serveTime);
  }.bind(this));
};
Server.prototype.setMenu = function (menu) {
  this.menu = menu;
};
Server.prototype.clearMenu = function () {
  this.status = "ready";
  this.menu = { name: "대기" };
}