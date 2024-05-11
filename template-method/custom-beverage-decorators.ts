import { BeverageDecorator } from "./beverage-decorator";

export class Milk extends BeverageDecorator {
  public getCost() {
    return this.beverage.getCost() + 3;
  }

  public getDescription() {
    return this.beverage.getDescription() + ", milk";
  }
}

export class Mocha extends BeverageDecorator {
  public getCost() {
    return this.beverage.getCost() + 5;
  }

  public getDescription() {
    return this.beverage.getDescription() + ", mocha";
  }
}

export class Soy extends BeverageDecorator {
  public getCost() {
    return this.beverage.getCost() + 2;
  }

  public getDescription() {
    return this.beverage.getDescription() + ", soy";
  }
}

export class Whip extends BeverageDecorator {
  public getCost() {
    return this.beverage.getCost() + 1;
  }

  public getDescription() {
    return this.beverage.getDescription() + ", whip";
  }
}
