import { Chef } from "./Components/Chef.js";
import { Menu } from "./Components/Menu.js";
import { Server } from "./Components/Server.js";


var orders = [];
var idx = 1;

var chefs = [new Chef("요리사1"), new Chef("요리사2")];
var servers = [new Server("서버1", 1000), new Server("서버2", 2000)];

var controlContainer = Widget.div("contol-container", {});
var bodyContainer = Widget.div("body-container", {});

document.body.append(controlContainer.el);
document.body.append(bodyContainer.el);

var menuHeaderControl = Widget.h3("h3MenuOrder", { label: "주문" });
bodyContainer.append(menuHeaderControl);
var menuListColumns = [{
  render: function (data) {
    var el = Widget.span("span" + crypto.randomUUID(), {
      label: data.name
    });
    return el;
  }
}];
var workerListColumns = [{
  render: function (data) {
    var el = Widget.span("span" + crypto.randomUUID(), {
      label: data.name
    });
    return el;
  }
},
{
  render: function (data) {
    var el = Widget.span("span" + crypto.randomUUID(), {
      label: ": " + data.menu.name
    });
    return el;
  }
}];

var menuListControl = Widget.list("menuList", {
  datas: orders,
  columns: menuListColumns
});
bodyContainer.append(menuListControl);
///요리 리스트
var cookHeaderControl = Widget.h3("h3MenuCook", { label: "요리" });
bodyContainer.append(cookHeaderControl);
var cookListControl = Widget.list("cookList", {
  datas: chefs,
  columns: workerListColumns
});
bodyContainer.append(cookListControl);
//서빙 리스트
var serveHeaderControl = Widget.h3("h3MenuServing", { label: "서빙" });
bodyContainer.append(serveHeaderControl);
var serveListControl = Widget.list("serveList", {
  datas: servers,
  columns: workerListColumns
});
bodyContainer.append(serveListControl);



var btnMenuControlR = Widget.button("btnRamyen", {
  label: "라면",
  onClick: function () { orderMenu(new Menu("라면" + (idx++), 1000)); }
});
controlContainer.append(btnMenuControlR);
var btnMenuControlB = Widget.button("btnBibimbab", {
  label: "비빔밥",
  onClick: function () { orderMenu(new Menu("비빔밥" + (idx++), 2000)); }
});
controlContainer.append(btnMenuControlB);


function orderMenu(menu) {
  Widget.getControl("menuList").append(menu, menuListColumns);
  Widget.getControl("menuList").reload();

  setTimeout(() => {
    run(menu);
  }, 10);
}

//핵심 프로세스는 모두 run안에서 처리할 것.(주문, 요리, 서빙)
//화면이 뻗으면 안됨.
function run(menu) {

  //대기중인 요리사 찾기
  var cookPromise = new Promise(function (resolve) {
    var cookTimer = setInterval(function () {
      var freeChefs = [];
      chefs.forEach(function (chef) {
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
    .then(function (args) {
      var freeChef = args[0];
      menu = args[1];
      //주문 목록 이동
      Widget.getControl("menuList").pop(menu);
      freeChef.setMenu(menu);
      Widget.getControl("cookList").reload();


      return freeChef.cookAsnyc(menu, freeChef);
    })
    //대기중인 서버 찾기
    .then(function (args) {
      var menu = args[0];
      var chef = args[1];
      return new Promise(function (resolve) {
        var serveTimer = setInterval(function () {
          var freeServers = [];
          servers.forEach(function (server) {
            if (server.isAvailable()) {
              freeServers.push(server);
            }
          });
          if (freeServers.length > 0) {
            clearInterval(serveTimer);
            resolve([freeServers[0], menu, chef]);
          }
        }, 0);
      }
      )
    })
    //서빙을 시킴(+> 요리 목록에서 서빙 목록으로)
    .then(function (args) {
      var freeServer = args[0];
      var menu = args[1];
      var chef = args[2];

      chef.clearMenu();
      freeServer.setMenu(menu);

      //주문 목록 이동
      Widget.getControl("cookList").reload();
      Widget.getControl("serveList").reload();

      return freeServer.serveAsnyc(menu, freeServer);
    })
    //서빙이 끝난 목록으로 이동
    .then(function (args) {
      var menu = args[0];
      var server = args[1];
      server.clearMenu();
      Widget.getControl("serveList").reload();
      //alert("서빙이 끝났습니다.");
    });
}
//run();

// setInterval(() => {
//   var cookCnt = Widget.getControl("cookList").getChildCnt();
//   Widget.getControl("h3MenuCook").rename("요리" + cookCnt);
// }, 0);
