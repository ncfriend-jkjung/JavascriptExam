import { widgetBox, removeControl } from "./core.js";
import { Menu } from "../TSComponents/Menu.js";
export class ListEl extends widgetBox {
    constructor(id, option) {
        super(id, "list", option);
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
    append(data) {
        this.datas.push(data);
        this.setListLine(data, this.columns);
    }
    pop(menu) {
        return this.datas.splice(this.datas.indexOf(menu), 1)[0];
    }
    setListLine(data, columns) {
        const newLi = new LiEl(crypto.randomUUID(), { data: data, columns: columns });
        this.childs.push(newLi);
        this.el.append(newLi.el);
    }
    render(datas, columns) {
        for (let data of datas) {
            this.setListLine(data, columns);
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
        removeControl(this.id);
    }
}
export class LiEl extends widgetBox {
    constructor(id, option) {
        super(id, "li", option);
        this.children = [];
        super.addControl(this);
        if (option)
            this.data = option.data;
        else
            this.data = new Menu("더미");
        if (option && option.columns) {
            this.columns = option.columns;
        }
        else
            this.columns = [];
        if (this.columns) {
            for (let column of this.columns) {
                const control = column.render(this.data);
                this.children.push(control);
                this.el.append(control.el);
            }
            this.columns.forEach(function (column) {
            });
        }
    }
    append(child) {
        this.el.append(child);
    }
    dispose() {
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        removeControl(this.id);
    }
    ;
}
