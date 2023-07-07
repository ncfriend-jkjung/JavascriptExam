import { mouseEventType, optionType } from "./widgetType.js";
import { widgetBox, removeControl } from "./core.js";

export class ButtonEl extends widgetBox{
  constructor(id:string, option: optionType|null){
    super(id, "button", option);
    super.addControl(this);
    if(option){
      if(typeof option.label == "string"){
        (this.el as HTMLInputElement).textContent = option.label;
      }
      (this.el as HTMLInputElement).onclick = option.onClick as mouseEventType;
    }
  }

  dispose() {
    //DOM과 Controls에 모두 삭제하는 과정
    this.el.remove();
    removeControl(this.id);
  };
}