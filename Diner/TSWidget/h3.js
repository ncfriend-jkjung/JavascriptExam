import { widgetBox, removeControl } from "./core.js";
export class H3El extends widgetBox {
    constructor(id, option) {
        super(id, "h3", option);
        super.addControl(this);
        if (option) {
            if (typeof option.label == "string") {
                this.el.textContent = option.label;
            }
        }
    }
    rename(label) {
        this.el.textContent = label;
    }
    dispose() {
        //DOM과 Controls에 모두 삭제하는 과정
        this.el.remove();
        removeControl(this.id);
    }
    ;
}
