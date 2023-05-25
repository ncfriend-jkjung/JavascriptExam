//bundling 시작점
import { createButton } from "./button.js";
import { createCheckbox } from "./checkbox.js";
import { createList, createLi } from "./list.js";
import { createInput } from "./input.js";
import { createSpan } from "./span.js";
import { getControl } from "./core.js";
import { createDiv } from "./div.js";
import { createH3 } from "./h3.js";

window.Widget = {
  button: createButton,
  list: createList,
  li: createLi,
  input: createInput,
  checkbox: createCheckbox,
  span: createSpan,
  div: createDiv,
  h3: createH3,
  getList: function () {
    return this.listContents;
  },
  getControl: getControl
};