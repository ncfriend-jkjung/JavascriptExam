import { todoColumn, todoType, optionType } from "./widgetType.js";
import { getUUID, widgetBox, removeControl } from "./core.js";

export class ListEl extends widgetBox{
  datas: todoType[];
  childs: LiEl[];
  columns: todoColumn[];
  constructor(id:string, option: optionType|null){
    super(id, "span", option);
    super.addControl(this);
    
    if(this.el.style){
      this.el.style.listStyle = "none";
      this.el.style.padding = "0";
    }
    if(option){
      this.datas = option.datas as todoType[];
      this.columns = option.columns as todoColumn[];
    }else{
      this.datas = [];
      this.columns = [];
    }
    this.childs = [];
    this.render(this.datas, this.columns);
  }

  render(datas: todoType[], columns: todoColumn[]) {
    for(let data of datas){
      const liEl = new LiEl(crypto.randomUUID(), null);
      this.childs.push(liEl);

      for(let column of columns){
        let control = column.render(data);
        this.childs.push(control as LiEl);
        liEl.el.append(control.el);
      }
      this.el.append(liEl.el);
    }
  }
  reload() {
    if(this.childs)
      this.childs.forEach(function (child) { child.dispose(); });

    this.render(this.datas, this.columns);
  }
  setData(inputdatas: todoType[]) {
    this.datas = inputdatas;
  }
  dispose() {
    //자기+ 자식 요소(li+alpha)를 삭제
    if(this.childs)
      this.childs.forEach(function (child) { child.dispose(); });
    //DOM과 Controls에 모두 삭제하는 과정
    this.el.remove();
    removeControl(this.id);
  }
}
export class LiEl extends widgetBox{
  constructor(id:string, option: optionType|null){
    super(id, "li", option);
    super.addControl(this);
    
  }
  append(child: HTMLInputElement) {
    this.el.append(child);
  }
  dispose() {
    //DOM과 Controls에 모두 삭제하는 과정
    this.el.remove();
    removeControl(this.id);
  };
}

