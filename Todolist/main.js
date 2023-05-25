
var todolist = [
  {
    id: 1,
    contents: "할일...",
    done: false
  },
  {
    id: 2,
    contents: "완료...",
    done: true
  }
];

var todolistColumns = [{
  render: function (data) {
    var el = Widget.checkbox("check" + data.id, {
      checked: data.done,
      onChange: function (e) {
        data.done = e.target.checked;
        Widget.getControl("todo-list").setData(todolist.filter(function (item) { return !item.done; }));
        Widget.getControl("done-list").setData(todolist.filter(function (item) { return item.done; }));
        Widget.getControl("todo-list").reload();
        Widget.getControl("done-list").reload();
      }
    });
    return el;
  }
}, {
  render: function (data) {
    var el = Widget.span("span" + data.id, {
      label: data.contents
    });
    return el;
  }
}, {
  render: function (data) {
    var el = Widget.button("delBtn" + data.id, {
      label: "삭제",
      onClick: function () {
        todolist.splice(todolist.indexOf(data), 1);
        Widget.listContents[0].setData(todolist.filter(function (item) { return !item.done; }));
        Widget.listContents[1].setData(todolist.filter(function (item) { return item.done; }));
        Widget.listContents[0].reload();
        Widget.listContents[1].reload();
      }
    });
    return el;
  }
}
];


//var ControlContainer = document.getElementById("control-container");
//var BodyContainer = document.getElementById("body-container");

var ControlContainer = Widget.div("control-container", {});
var BodyContainer = Widget.div("body-container", {});
document.body.append(ControlContainer.el);
document.body.append(BodyContainer.el);

var todolistControl = Widget.list("todo-list", {
  datas: todolist.filter(function (item) { return !item.done; }),
  columns: todolistColumns
});
var donelistControl = Widget.list("done-list", {
  datas: todolist.filter(function (item) { return item.done; }),
  columns: todolistColumns
});
BodyContainer.append(todolistControl);
BodyContainer.append(donelistControl);


var inputControl = Widget.input("todo-contents", {
});
var inputBtnControl = Widget.button("todo-inputBtn", {

  label: "입력",
  onClick: function () {
    var inputControl = Widget.getControl("todo-contents");
    var context = inputControl.getValue();
    todolist.push({
      id: crypto.randomUUID(),
      contents: context,
      done: false
    });
    todolistControl.setData(todolist.filter(function (item) { return !item.done; }));
    todolistControl.reload();
    inputControl.clear();
    inputControl.focus();
  }
});


ControlContainer.append(inputControl);
ControlContainer.append(inputBtnControl);
