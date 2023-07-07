import { widgetAllType, optionType } from "./widgetType.js";
import { widgetBox, removeControl } from "./core.js";

export class DivEl extends widgetBox{
  children: widgetAllType[];
  constructor(id:string, option: optionType|null){
    super(id, "div", option);
    this.children = [];
  }

  append(control: widgetAllType){
    this.el.append(control.el);
    this.children.push(control);
  }

  dispose() {
    //연결된 자식 모두 삭제
    this.children.forEach(function (child) { child.dispose(); });
    //DOM과 Controls에 모두 삭제하는 과정
    this.el.remove();
    removeControl(this.id);
  };
}
