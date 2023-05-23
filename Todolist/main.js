
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
    var el = Widget.checkbox({
      checked: data.done,
      onChange: function (e) {
        data.done = e.target.checked;
        Widget.listContents[0].setData(todolist.filter(function (item) { return !item.done; }));
        Widget.listContents[1].setData(todolist.filter(function (item) { return item.done; }));
        Widget.listContents[0].reload();
        Widget.listContents[1].reload();
      }
    });
    return el;
  }
}, {
  render: function (data) {
    var el = Widget.span({
      label: data.contents
    });
    return el;
  }
}, {
  render: function (data) {
    var el = Widget.button({
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


var ControlContainer = document.getElementById("control-container");
var BodyContainer = document.getElementById("body-container");

var todolistControl = Widget.list({
  datas: todolist.filter(function (item) { return !item.done; }),
  columns: todolistColumns
});
var donelistControl = Widget.list({
  datas: todolist.filter(function (item) { return item.done; }),
  columns: todolistColumns
});
BodyContainer.append(todolistControl.el);
BodyContainer.append(donelistControl.el);


var inputControl = Widget.input({

});
var inputBtnControl = Widget.button({
  label: "입력",
  onClick: function () {
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


ControlContainer.append(inputControl.el);
ControlContainer.append(inputBtnControl.el);
