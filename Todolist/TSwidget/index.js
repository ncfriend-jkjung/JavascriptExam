"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const button_js_1 = require("./button.js");
const checkbox_js_1 = require("./checkbox.js");
const list_js_1 = require("./list.js");
const input_js_1 = require("./input.js");
const span_js_1 = require("./span.js");
const core_js_1 = require("./core.js");
const div_js_1 = require("./div.js");
class WidgetClass {
    constructor() {
    }
    getControl(id) {
        return (0, core_js_1.getControl)(id);
    }
    input(id, option) {
        let newInput = new input_js_1.InputEl(id, option);
        return newInput;
    }
    button(id, option) {
        let newInput = new button_js_1.ButtonEl(id, option);
        return newInput;
    }
    div(id, option) {
        let newInput = new div_js_1.DivEl(id, option);
        return newInput;
    }
    span(id, option) {
        let newInput = new span_js_1.SpanEl(id, option);
        return newInput;
    }
    checkbox(id, option) {
        let newInput = new checkbox_js_1.CheckboxEl(id, option);
        return newInput;
    }
    list(id, option) {
        let newInput = new list_js_1.ListEl(id, option);
        return newInput;
    }
    getList() {
        return core_js_1.controls;
    }
}
exports.Widget = new WidgetClass();
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
