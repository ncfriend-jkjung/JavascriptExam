import { InputEl } from "./input";
import { ButtonEl } from "./button";
import { DivEl } from "./div";
import { ListEl } from "./list";
import { SpanEl } from "./span";
import { CheckboxEl } from "./checkbox";


export type todoType = {id: number, contents: string, done: boolean};
export type todoColumn = {render: (data: todoType) => widgetAllType}
export type nodeType = HTMLElement|HTMLInputElement;
export type controlType = {[key:string] : string|number|Function|HTMLElement};
export interface controlBase{
  id: string;
  el: HTMLElement;
}
export interface controlFuncs{
  [key: string]: Function;
}

export interface Iwidget{
  id: string;
  el: HTMLElement | HTMLInputElement;
  option: optionType|null;
}
export type controlBox = controlBase & controlFuncs;
export type widgetType = {[key: string]: (id: string, option?: optionType)=>void | Iwidget};
export type optionType = {[key: string]: string|number|boolean|Function| controlType | todoColumn[] | todoType[] | null};

export type widgetAllType = InputEl| ButtonEl| DivEl| ListEl | SpanEl | CheckboxEl;
export type eventType = (this: GlobalEventHandlers, ev: Event) => any;
export type mouseEventType = (this: GlobalEventHandlers, ev: MouseEvent) => any;

