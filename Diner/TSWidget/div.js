import { widgetBox, removeControl } from "./core.js";
export class DivEl extends widgetBox {
    constructor(id, option) {
        super(id, "div", option);
        this.children = [];
    }
    append(control) {
        this.el.append(control.el);
        this.children.push(control);
    }
    dispose() {
        //연결된 자식 모두 삭제
        this.children.forEach(function (child) { child.dispose(); });
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        removeControl(this.id);
    }
    ;
}
