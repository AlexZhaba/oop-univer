import { Beverage } from "./beverage";

export class HouseBlend extends Beverage {
  public getDescription(): string {
    return "House Blend";
  }

  public getCost(): number {
    return 10;
  }
}

export class DarkRoast extends Beverage {
  public getDescription(): string {
    return "Dark roast";
  }

  public getCost(): number {
    return 12;
  }
}

export class Expresso extends Beverage {
  public getDescription(): string {
    return "Expresso";
  }

  public getCost(): number {
    return 8;
  }
}

export class Decaf extends Beverage {
  public getDescription(): string {
    return "Decaf";
  }

  public getCost(): number {
    return 15;
  }
}
