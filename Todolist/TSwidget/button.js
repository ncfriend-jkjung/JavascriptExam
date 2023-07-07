"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonEl = void 0;
const core_js_1 = require("./core.js");
class ButtonEl extends core_js_1.widgetBox {
    constructor(id, option) {
        super(id, "button", option);
        super.addControl(this);
        if (option) {
            if (typeof option.label == "string") {
                this.el.textContent = option.label;
            }
            this.el.onclick = option.onClick;
        }
    }
    dispose() {
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        (0, core_js_1.removeControl)(this.id);
    }
    ;
}
exports.ButtonEl = ButtonEl;
