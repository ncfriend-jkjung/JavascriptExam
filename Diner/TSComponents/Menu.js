export class Menu {
    constructor(name, cookTime) {
        this.name = name;
        if (cookTime)
            this.cookTime = cookTime;
        else
            this.cookTime = 0;
    }
}
