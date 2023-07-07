export class Menu{
  name: string;
  cookTime: number;
  constructor(name: string, cookTime?: number){
    this.name = name;
    if(cookTime)
      this.cookTime = cookTime;
    else 
      this.cookTime = 0;
  }
}
