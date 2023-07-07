"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiEl = exports.ListEl = void 0;
const core_js_1 = require("./core.js");
class ListEl extends core_js_1.widgetBox {
    constructor(id, option) {
        super(id, "span", option);
        super.addControl(this);
        if (this.el.style) {
            this.el.style.listStyle = "none";
            this.el.style.padding = "0";
        }
        if (option) {
            this.datas = option.datas;
            this.columns = option.columns;
        }
        else {
            this.datas = [];
            this.columns = [];
        }
        this.childs = [];
        this.render(this.datas, this.columns);
    }
    render(datas, columns) {
        for (let data of datas) {
            const liEl = new LiEl(crypto.randomUUID(), null);
            this.childs.push(liEl);
            for (let column of columns) {
                let control = column.render(data);
                this.childs.push(control);
                liEl.el.append(control.el);
            }
            this.el.append(liEl.el);
        }
    }
    reload() {
        if (this.childs)
            this.childs.forEach(function (child) { child.dispose(); });
        this.render(this.datas, this.columns);
    }
    setData(inputdatas) {
        this.datas = inputdatas;
    }
    dispose() {
        //자기+ 자식 요소(li+alpha)를 삭제
        if (this.childs)
            this.childs.forEach(function (child) { child.dispose(); });
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        (0, core_js_1.removeControl)(this.id);
    }
}
exports.ListEl = ListEl;
class LiEl extends core_js_1.widgetBox {
    constructor(id, option) {
        super(id, "li", option);
        super.addControl(this);
    }
    append(child) {
        this.el.append(child);
    }
    dispose() {
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        (0, core_js_1.removeControl)(this.id);
    }
    ;
}
exports.LiEl = LiEl;
