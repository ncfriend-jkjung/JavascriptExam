"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputEl = void 0;
const core_js_1 = require("./core.js");
class InputEl extends core_js_1.widgetBox {
    constructor(id, option) {
        super(id, "input", option);
        super.addControl(this);
    }
    getValue() {
        if ("value" in this.el)
            return this.el.value;
    }
    ;
    focus() {
        this.el.focus();
    }
    ;
    clear() {
        if ("value" in this.el)
            this.el.value = "";
    }
    ;
    dispose() {
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        (0, core_js_1.removeControl)(this.id);
    }
    ;
}
exports.InputEl = InputEl;
