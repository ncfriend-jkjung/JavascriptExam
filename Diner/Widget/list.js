import { widget } from "./baseWidget.js";
import { removeControl } from "./core.js";
import { addControl } from "./core.js";

function _createLi(id, option) {
  var el = document.createElement("li");
  var data = option.data;
  var columns = option.columns;
  var children = [];

  columns.forEach(function (column) {
    var control = column.render(data);
    children.push(control);
    el.append(control.el);
  });

  return {
    id: id,
    el: el,
    children: children,
    append: function (item) {
      el.append(item);
    },
    dispose: function () {
      children.forEach(function (child) { child.dispose(); });
      el.remove();
      removeControl(id);

    }
  }
}


function _createList(id, option) {
  var el = document.createElement("ul");
  var datas = option.datas;
  var columns = option.columns;
  var childs = [];
  var popFunc = option.pop;
  //var idx = 1;

  el.style.listStyle = "none";
  el.style.padding = 0;

  render(datas, columns);

  return {
    id: id,
    el: el,
    reload: reload,
    append: appendListLine,
    pop: function (data) {
      datas.splice(datas.indexOf(data), 1);
      if (popFunc) {
        return option.pop.apply(null, arguments);
      } else {
        reload();
      }
    },
    setData: function (inputdatas) {
      datas = inputdatas;
    },
    dispose: function () {
      //자기+ 자식 요소(li+alpha)를 삭제
      childs.forEach(function (child) { child.dispose(); });
      //DOM과 Controls에 모두 삭제하는 과정
      el.remove();
      removeControl(id);
    },
    getChildCnt: function () {
      return childs.length;
    }
  };

  function reload() {
    childs.forEach(function (child) {
      child.dispose();
    });
    childs = [];

    render(datas, columns);
  }
  function appendListLine(data, columns) {
    datas.push(data);
    setListLine(data, columns);
  }
  function setListLine(data, columns) {
    var liEl = createLi(crypto.randomUUID(), { data: data, columns: columns });

    childs.push(liEl);

    el.append(liEl.el);

  }

  function render(datas, columns) {
    datas.forEach(function (data) {
      setListLine(data, columns);
    });
  }

}
export var createList = widget(_createList);
export var createLi = widget(_createLi);