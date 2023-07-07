import { eventType, optionType } from "./widgetType.js";
import { widgetBox, removeControl } from "./core.js";

export class CheckboxEl extends widgetBox{
  constructor(id:string, option: optionType|null){
    super(id, "input", option);
    super.addControl(this);
    if(option){
      (this.el as HTMLInputElement).type = "checkbox";
      (this.el as HTMLInputElement).onchange = option.onChange as eventType;
      (this.el as HTMLInputElement).checked = option.checked as boolean;
      }
  }

  dispose() {
    //DOM과 Controls에 모두 삭제하는 과정
    this.el.remove();
    removeControl(this.id);
  };
}
