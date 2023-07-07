"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpanEl = void 0;
const core_js_1 = require("./core.js");
class SpanEl extends core_js_1.widgetBox {
    constructor(id, option) {
        super(id, "span", option);
        super.addControl(this);
        if (this.el && option)
            this.el.textContent = option.label;
    }
    dispose() {
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        (0, core_js_1.removeControl)(this.id);
    }
    ;
}
exports.SpanEl = SpanEl;
