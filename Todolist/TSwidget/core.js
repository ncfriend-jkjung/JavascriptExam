"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = exports.removeControl = exports.getControl = exports.widgetBox = exports.controls = void 0;
exports.controls = [];
class widgetBox {
    constructor(id, elType, option) {
        this.id = id;
        this.el = document.createElement(elType);
        if (option)
            this.option = option;
        else
            this.option = null;
    }
    addControl(control) {
        exports.controls.push(control);
    }
}
exports.widgetBox = widgetBox;
function getControl(id) {
    return exports.controls.find(function (control) {
        return control.id === id;
    });
}
exports.getControl = getControl;
function removeControl(id) {
    let fIndex = exports.controls.findIndex((control) => {
        return control.id === id;
    });
    if (fIndex >= 0)
        exports.controls.splice(fIndex, 1);
}
exports.removeControl = removeControl;
function getUUID() {
    return crypto.randomUUID().split("-")[-1];
}
exports.getUUID = getUUID;
