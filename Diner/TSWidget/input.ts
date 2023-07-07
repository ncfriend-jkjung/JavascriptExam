import { widgetBox, removeControl } from "./core.js";
import { optionType } from "./widgetType.js";
type controlType = {[key:string] : string|number|Function|HTMLElement};

export class InputEl extends widgetBox{
  constructor(id:string, option: optionType|null){
    super(id, "input", option);
    super.addControl(this);
  }

  getValue(){
    if("value" in this.el)
      return this.el.value;
  };
  focus() {
    this.el.focus();
  };
  clear() {
    if("value" in this.el)
      this.el.value = "";
  };
  dispose() {
    //DOM과 Controls에 모두 삭제하는 과정
    this.el.remove();
    removeControl(this.id);
  };
}
