import { widgetBox, removeControl } from "./core.js";
export class CheckboxEl extends widgetBox {
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
        removeControl(this.id);
    }
    ;
}
