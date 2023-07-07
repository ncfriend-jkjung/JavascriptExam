"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxEl = void 0;
const core_js_1 = require("./core.js");
class CheckboxEl extends core_js_1.widgetBox {
    constructor(id, option) {
        super(id, "input", option);
        super.addControl(this);
        if (option) {
            this.el.type = "checkbox";
            this.el.onchange = option.onChange;
            this.el.checked = option.checked;
        }
    }
    dispose() {
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        (0, core_js_1.removeControl)(this.id);
    }
    ;
}
exports.CheckboxEl = CheckboxEl;
