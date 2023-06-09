//bundling 시작점
import { createButton } from "./button.js";
import { createCheckbox } from "./checkbox.js";
import { createList } from "./list.js";
import { createInput } from "./input.js";
import { createSpan } from "./span.js";
import { getControl } from "./core.js";
import { createDiv } from "./div.js";

window.Widget = {
  button: createButton,
  list: createList,
  input: createInput,
  checkbox: createCheckbox,
  span: createSpan,
  div: createDiv,
  getList: function () {
    return this.listContents;
  },
  getControl: getControl
};