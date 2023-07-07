export class Server {
    constructor(name, serveTime) {
        this.name = name;
        this.serveTime = serveTime;
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
    serveAsnyc(menu, server) {
        //serve menu
        return new Promise(function (resolve) {
            server.status = "serving";
            setTimeout(() => {
                //this.status = "ready";
                //this.menu = "대기";
                resolve([menu, server]);
            }, server.serveTime);
        });
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
}
