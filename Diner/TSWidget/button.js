import { widgetBox, removeControl } from "./core.js";
export class ButtonEl extends widgetBox {
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
        removeControl(this.id);
    }
    ;
}
