//bundling 시작점
import { createButton } from "./button.js";
import { createCheckbox } from "./checkbox.js";
import { createList } from "./list.js";
import { createInput } from "./input.js";
import { createSpan } from "./span.js";

window.Widget = {
  button: createButton,
  list: createList,
  input: createInput,
  checkbox: createCheckbox,
  span: createSpan,
  listContents: [],
  getList: function () {
    return this.listContents;
  }
};