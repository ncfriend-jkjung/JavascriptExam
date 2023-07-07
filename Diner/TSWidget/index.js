import { ButtonEl } from "./button.js";
import { CheckboxEl } from "./checkbox.js";
import { ListEl } from "./list.js";
import { InputEl } from "./input.js";
import { SpanEl } from "./span.js";
import { controls, getControl } from "./core.js";
import { DivEl } from "./div.js";
class WidgetClass {
    constructor() {
    }
    getControl(id) {
        return getControl(id);
    }
    input(id, option) {
        let newInput = new InputEl(id, option);
        return newInput;
    }
    button(id, option) {
        let newInput = new ButtonEl(id, option);
        return newInput;
    }
    div(id, option) {
        let newInput = new DivEl(id, option);
        return newInput;
    }
    span(id, option) {
        let newInput = new SpanEl(id, option);
        return newInput;
    }
    h3(id, option) {
        let newInput = new SpanEl(id, option);
        return newInput;
    }
    checkbox(id, option) {
        let newInput = new CheckboxEl(id, option);
        return newInput;
    }
    list(id, option) {
        let newInput = new ListEl(id, option);
        return newInput;
    }
    getList() {
        return controls;
    }
}
export const Widget = new WidgetClass();
// let Widget1 = {
//   button: createButton,
//   list: createList,
//   input: InputEl,
//   checkbox: createCheckbox,
//   span: createSpan,
//   div: createDiv,
//   getList: function () {
//     return this.listContents;
//   },
//   getControl: getControl
// };
