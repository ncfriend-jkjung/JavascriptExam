import { Menu } from "./Menu.js";

export class Chef{
  name: string;
  status : "ready" | "cooking";
  menu : Menu;
  constructor(name: string){
    this.name = name;
    this.status = "ready";
    this.menu = {name:"대기", cookTime: 0};
  }
  isAvailable() {
    if (this.status == "ready") {
      return true;
    }
    return false;
  };
  setMenu(menu: Menu) {
    this.menu = menu;
  };
  clearMenu() {
    this.status = "ready";
    this.menu = { name: "대기", cookTime: 0};
  }
  cookAsnyc (menu: Menu, chef: Chef) {
    //cook menu
    return () => { return new Promise<[Menu,Chef]>(function (resolve) {
      chef.status = "cooking";
      setTimeout(() => {
        //this.status = "ready";
        //this.menu = "대기";
        resolve([menu, chef]);
      }, menu.cookTime);
    })};
  };
}
