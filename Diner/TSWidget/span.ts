import { optionType } from "./widgetType.js";
import { widgetBox, removeControl } from "./core.js";

export class SpanEl extends widgetBox{
  constructor(id:string, option: optionType|null){
    super(id, "span", option);
    super.addControl(this);
    if(this.el && option)
      this.el.textContent = option.label as string;
  }

  dispose() {
    //DOM과 Controls에 모두 삭제하는 과정
    this.el.remove();
    removeControl(this.id);
  };
}
