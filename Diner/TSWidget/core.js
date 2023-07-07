export let controls = [];
export class widgetBox {
    constructor(id, elType, option) {
        this.id = id;
        this.el = document.createElement(elType);
        if (option)
            this.option = option;
        else
            this.option = null;
    }
    addControl(control) {
        controls.push(control);
    }
}
export function getControl(id) {
    return controls.find(function (control) {
        return control.id === id;
    });
}
export function removeControl(id) {
    let fIndex = controls.findIndex((control) => {
        return control.id === id;
    });
    if (fIndex >= 0)
        controls.splice(fIndex, 1);
}
export function getUUID() {
    return crypto.randomUUID().split("-")[-1];
}
