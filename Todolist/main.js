"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./TSwidget/index.js");
const core_js_1 = require("./TSwidget/core.js");
let todolist = [
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
function refreshTodoLists() {
    const todoListControl = index_js_1.Widget.getControl("todo-list");
    const doneListControl = index_js_1.Widget.getControl("done-list");
    if (todoListControl) {
        todoListControl.setData(todolist.filter(function (item) { return !item.done; }));
        todoListControl.reload();
    }
    if (doneListControl) {
        doneListControl.setData(todolist.filter(function (item) { return item.done; }));
        doneListControl.reload();
    }
}
const todolistColumns = [{
        render: function (data) {
            const el = index_js_1.Widget["checkbox"]("check" + data.id, {
                checked: data.done,
                onChange: function (e) {
                    if (e && e.target && e.target instanceof HTMLInputElement && "checked" in e.target)
                        data.done = e.target.checked;
                    else
                        data.done = false;
                    refreshTodoLists();
                }
            });
            return el;
        }
    }, {
        render: function (data) {
            const el = index_js_1.Widget.span("span" + data.id, {
                label: data.contents
            });
            return el;
        }
    }, {
        render: function (data) {
            const el = index_js_1.Widget.button("delBtn" + data.id, {
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
const ControlContainer = index_js_1.Widget.div("control-container", {});
const BodyContainer = index_js_1.Widget.div("body-container", {});
document.body.append(ControlContainer.el);
document.body.append(BodyContainer.el);
const todolistControl = index_js_1.Widget.list("todo-list", {
    datas: todolist.filter(function (item) { return !item.done; }),
    columns: todolistColumns
});
const donelistControl = index_js_1.Widget.list("done-list", {
    datas: todolist.filter(function (item) { return item.done; }),
    columns: todolistColumns
});
BodyContainer.append(todolistControl);
BodyContainer.append(donelistControl);
const inputControl = index_js_1.Widget.input("todo-contents", {});
const inputBtnControl = index_js_1.Widget.button("todo-inputBtn", {
    label: "입력",
    onClick: function () {
        const inputControl = index_js_1.Widget.getControl("todo-contents");
        const context = inputControl.getValue();
        todolist.push({
            id: parseInt((0, core_js_1.getUUID)(), 16),
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
