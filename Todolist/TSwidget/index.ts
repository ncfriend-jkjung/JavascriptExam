//bundling 시작점
import * as Types from "./widgetType.js"
import { ButtonEl } from "./button.js";
import { CheckboxEl } from "./checkbox.js";
import { ListEl } from "./list.js";
import { InputEl } from "./input.js";
import { SpanEl } from "./span.js";
import { controls, getControl } from "./core.js";
import { DivEl } from "./div.js";


class WidgetClass{
  constructor(){
  }
  getControl(id: string){
    return getControl(id);
  }
  input(id: string, option: Types.optionType|null){
    let newInput = new InputEl(id, option);
    return newInput;
  }
  button(id: string, option: Types.optionType|null){
    let newInput = new ButtonEl(id, option);
    return newInput;
  }
  div(id: string, option: Types.optionType|null){
    let newInput = new DivEl(id, option);
    return newInput;
  }
  span(id: string, option: Types.optionType|null){
    let newInput = new SpanEl(id, option);
    return newInput;
  }
  checkbox(id: string, option: Types.optionType|null){
    let newInput = new CheckboxEl(id, option);
    return newInput;
  }
  list(id: string, option: Types.optionType|null){
    let newInput = new ListEl(id, option);
    return newInput;
  }
  getList(){
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