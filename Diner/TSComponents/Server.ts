import { Menu } from "./Menu.js";

export class Server{
  name: string;
  serveTime: number;
  status: "ready" | "serving";
  menu : Menu;
  constructor(name: string, serveTime: number){
    this.name = name;
    this.serveTime = serveTime;
    this.status = "ready";
    this.menu = {name: "대기", cookTime: 0};
  }

  isAvailable() {
    if (this.status == "ready") {
      return true;
    }
    return false;
  };
  serveAsnyc(menu: Menu, server:Server) {
    //serve menu
  
    return new Promise<[Menu, Server]>(function (resolve) {
      server.status = "serving";
      setTimeout(() => {
        //this.status = "ready";
        //this.menu = "대기";
        resolve([menu, server]);
      }, server.serveTime);
    });
  };
  setMenu(menu: Menu) {
    this.menu = menu;
  };
  clearMenu() {
    this.status = "ready";
    this.menu = { name: "대기", cookTime: 0 };
  }
}
