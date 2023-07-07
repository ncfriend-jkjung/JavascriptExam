import { Widget } from './TSwidget/index.js';
import { getUUID } from './TSwidget/core.js';
import { ListEl } from './TSwidget/list.js';
import { InputEl } from './TSwidget/input.js';

type todoType = {id: number, contents: string, done: boolean};
type todoColumn = {render: (data: todoType) => void}
let todolist:todoType[] = [
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

function refreshTodoLists(){
  const todoListControl = Widget.getControl("todo-list") as ListEl;
  const doneListControl = Widget.getControl("done-list") as ListEl;
  if(todoListControl){
    todoListControl.setData(todolist.filter(function (item) { return !item.done; }));
    todoListControl.reload();
  }
  if(doneListControl){
    doneListControl.setData(todolist.filter(function (item) { return item.done; }));
    doneListControl.reload();
  }
}

const todolistColumns: todoColumn[] = [{
  render: function (data: todoType) {
    const el = Widget["checkbox"]("check" + data.id, {
      checked: data.done,
      onChange: function (e: Event) {
        if(e && e.target && e.target instanceof HTMLInputElement && "checked" in e.target)
          data.done = e.target.checked;
        else
          data.done = false;

        refreshTodoLists();
      }
    });
    return el;
  }
}, {
  render: function (data: todoType) {
    const el = Widget.span("span" + data.id, {
      label: data.contents
    });
    return el;
  }
}, {
  render: function (data: todoType) {
    const el = Widget.button("delBtn" + data.id, {
      label: "삭제",
      onClick: function () {
        todolist.splice(todolist.indexOf(data), 1);
        refreshTodoLists();
      }
    });
    return el;
  }
}
];


const ControlContainer = Widget.div("control-container", {});
const BodyContainer = Widget.div("body-container", {});
document.body.append(ControlContainer.el);
document.body.append(BodyContainer.el);



const todolistControl = Widget.list("todo-list", {
  datas: todolist.filter(function (item) { return !item.done; }),
  columns: todolistColumns
});
const donelistControl = Widget.list("done-list", {
  datas: todolist.filter(function (item) { return item.done; }),
  columns: todolistColumns
});
BodyContainer.append(todolistControl);
BodyContainer.append(donelistControl);


const inputControl = Widget.input("todo-contents", {
});
const inputBtnControl = Widget.button("todo-inputBtn", {

  label: "입력",
  onClick: function () {
    const inputControl = Widget.getControl("todo-contents") as InputEl;
    const context = inputControl.getValue() as string;
    todolist.push({
      id: parseInt(getUUID(), 16),
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
