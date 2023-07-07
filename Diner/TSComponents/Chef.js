export class Chef {
    constructor(name) {
        this.name = name;
        this.status = "ready";
        this.menu = { name: "대기", cookTime: 0 };
    }
    isAvailable() {
        if (this.status == "ready") {
            return true;
        }
        return false;
    }
    ;
    setMenu(menu) {
        this.menu = menu;
    }
    ;
    clearMenu() {
        this.status = "ready";
        this.menu = { name: "대기", cookTime: 0 };
    }
    cookAsnyc(menu, chef) {
        //cook menu
        return () => {
            return new Promise(function (resolve) {
                chef.status = "cooking";
                setTimeout(() => {
                    //this.status = "ready";
                    //this.menu = "대기";
                    resolve([menu, chef]);
                }, menu.cookTime);
            });
        };
    }
    ;
}
