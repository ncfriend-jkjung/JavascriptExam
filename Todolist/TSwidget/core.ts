import * as Types from "./widgetType.js"

export let controls: Types.widgetAllType[] = [];

export class widgetBox implements Types.Iwidget{
  id: string;
  el: Types.nodeType;
  option: Types.optionType|null;
  constructor(id:string, elType: string, option:Types.optionType|null){
    this.id = id;
    this.el = document.createElement(elType);
    if(option)
      this.option = option;
    else
      this.option = null;
  }
  addControl(control: Types.widgetAllType) {
    controls.push(control);
  }
}


export function getControl(id: string) {
  return controls.find(function (control) {
    return control.id === id;
  });
}

export function removeControl(id: string) {
  let fIndex = controls.findIndex((control)=>{
    return control.id === id;
  });
  if(fIndex >= 0)
    controls.splice(fIndex, 1);
}


export function getUUID(){
  return crypto.randomUUID().split("-")[-1];
}