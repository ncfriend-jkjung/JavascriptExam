import { InputEl } from "./input";
import { ButtonEl } from "./button";
import { DivEl } from "./div";
import { ListEl} from "./list";
import { H3El} from "./h3";
import { CheckboxEl } from "./checkbox";
import { SpanEl } from "./span";
import { Menu } from "../TSComponents/Menu";
import { Chef } from "../TSComponents/Chef";
import { Server } from "../TSComponents/Server";


export type dinerType = Menu | Chef | Server;
export type dinerColumn = {render: ((data: Menu | Chef|Server) => SpanEl)}
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
export type optionType = {[key: string]: string|number|boolean|Function| controlType | dinerType | Menu[]| Chef[]| Server[] | dinerColumn[] | null};

export type widgetAllType = InputEl| ButtonEl| DivEl| ListEl | SpanEl | CheckboxEl | H3El;
export type eventType = (this: GlobalEventHandlers, ev: Event) => any;
export type mouseEventType = (this: GlobalEventHandlers, ev: MouseEvent) => any;

