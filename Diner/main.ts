import { Chef } from "./TSComponents/Chef.js";
import { Menu } from "./TSComponents/Menu.js";
import { Server } from "./TSComponents/Server.js";
import { Widget } from "./TSWidget/index.js";
import { dinerColumn } from "./TSWidget/widgetType.js";
import { ListEl } from "./TSWidget/list.js";

let orders:Menu[] = [];
let idx = 1;

const chefs = [new Chef("요리사1"), new Chef("요리사2")];
const servers = [new Server("서버1", 1000), new Server("서버2", 2000)];

const controlContainer = Widget.div("contol-container", {});
const bodyContainer = Widget.div("body-container", {});

document.body.append(controlContainer.el);
document.body.append(bodyContainer.el);

const menuHeaderControl = Widget.h3("h3MenuOrder", { label: "주문" });
bodyContainer.append(menuHeaderControl);
const menuListColumns: dinerColumn[] = [{
  render: function (data) {
    const el = Widget.span("span" + crypto.randomUUID(), {
      label: (data as Menu).name
    });
    return el;
  }
}];
const workerListColumns: dinerColumn[] = [{
  render: function (data) {
    const el = Widget.span("span" + crypto.randomUUID(), {
      label: (data as Chef|Server).name
    });
    return el;
  }
},
{
  render: function (data) {
    const el = Widget.span("span" + crypto.randomUUID(), {
      label: ": " + (data as Chef|Server).menu.name
    });
    return el;
  }
}];

const menuListControl = Widget.list("menuList", {
  datas: orders,
  columns: menuListColumns
});
bodyContainer.append(menuListControl);
///요리 리스트
const cookHeaderControl = Widget.h3("h3MenuCook", { label: "요리" });
bodyContainer.append(cookHeaderControl);
const cookListControl = Widget.list("cookList", {
  datas: chefs,
  columns: workerListColumns
});
bodyContainer.append(cookListControl);
//서빙 리스트
const serveHeaderControl = Widget.h3("h3MenuServing", { label: "서빙" });
bodyContainer.append(serveHeaderControl);
const serveListControl = Widget.list("serveList", {
  datas: servers,
  columns: workerListColumns
});
bodyContainer.append(serveListControl);



const btnMenuControlR = Widget.button("btnRamyen", {
  label: "라면",
  onClick: function () { orderMenu(new Menu("라면" + (idx++), 1000)); }
});
controlContainer.append(btnMenuControlR);
const btnMenuControlB = Widget.button("btnBibimbab", {
  label: "비빔밥",
  onClick: function () { orderMenu(new Menu("비빔밥" + (idx++), 2000)); }
});
controlContainer.append(btnMenuControlB);


function orderMenu(menu: Menu) {
  const menuControl = Widget.getControl("menuList") as ListEl;
  if(menuControl){
    menuControl.append(menu);
    menuControl.reload();
  }

  setTimeout(() => {
    run(menu);
  }, 10);
}

//핵심 프로세스는 모두 run안에서 처리할 것.(주문, 요리, 서빙)
//화면이 뻗으면 안됨.
function run(menu: Menu) {

  
  //대기중인 요리사 찾기
  const cookPromise = new Promise<[Chef, Menu]>(function (resolve) {
    const cookTimer = setInterval(function () {
      let freeChefs: Chef[] = [];
      chefs.forEach(function (chef: Chef) {
        if (chef.isAvailable()) {
          freeChefs.push(chef);
        }
      });
      if (freeChefs.length > 0) {
        clearInterval(cookTimer);
        resolve([freeChefs[0], menu]);
      }
    }, 0);
  })
    //요리사에게 요리 시킴(+>주문 목록에서 요리 목록으로 이동)
    .then(function (args:[chef:Chef, menu:Menu]): Promise<[Menu, Chef]> {
      const freeChef = args[0];
      menu = args[1];
      //주문 들어온 순서를 맞추려면, orders 목록의 첫번째 요청만 처리하는 걸로 하면 됨
      // if (orders.indexOf(menu) > 0) {
      //   return run(menu);
      // }
      //주문 목록 이동
      const menuControl = Widget.getControl("menuList") as ListEl;
      menuControl.pop(menu);
      (Widget.getControl("menuList") as ListEl).reload();
      freeChef.setMenu(menu);
      (Widget.getControl("cookList") as ListEl).reload();


      return freeChef.cookAsnyc(menu, freeChef)();
    })
    //대기중인 서버 찾기
    .then((args:[menu:Menu, chef:Chef])=> {
      const menu = args[0];
      const chef = args[1];
      return new Promise<[Server, Menu, Chef]>(function (resolve:(value:[Server, Menu, Chef])=>void) {
        const serveTimer = setInterval(function () {
          let freeServers:Server[] = [];
          for(let server of servers){
            if (server.isAvailable()) {
              freeServers.push(server);
            }
          }
          
          if (freeServers.length > 0) {
            clearInterval(serveTimer);
            resolve([freeServers[0], menu, chef]);
          }
        }, 0);
      });
    })
    //서빙을 시킴(+> 요리 목록에서 서빙 목록으로)
    .then((args:[Server, Menu, Chef]) => {
      const freeServer = args[0];
      const menu = args[1];
      const chef = args[2];

      chef.clearMenu();
      freeServer.setMenu(menu);

      //주문 목록 이동
      (Widget.getControl("cookList") as ListEl).reload();
      (Widget.getControl("serveList") as ListEl).reload();

      return freeServer.serveAsnyc(menu, freeServer);
    })
    //서빙이 끝난 목록으로 이동
    .then((args:[Menu, Server])=> {
      const menu = args[0];
      const server = args[1];
      server.clearMenu();
      (Widget.getControl("serveList") as ListEl).reload();
      //alert("서빙이 끝났습니다.");
    });
}
//run();

// setInterval(() => {
//   var cookCnt = Widget.getControl("cookList").getChildCnt();
//   Widget.getControl("h3MenuCook").rename("요리" + cookCnt);
// }, 0);
