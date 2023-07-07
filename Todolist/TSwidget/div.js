"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivEl = void 0;
const core_js_1 = require("./core.js");
class DivEl extends core_js_1.widgetBox {
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
        (0, core_js_1.removeControl)(this.id);
    }
    ;
}
exports.DivEl = DivEl;
