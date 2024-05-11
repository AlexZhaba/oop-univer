import { Beverage } from "../beverage";
import { BeverageComponentsFabric } from "./abstract-fabric";
import {
  FruitFreshComponentsFabric,
  NonAlcoholicCocktailComponentsFabric,
  TeaComponentsFabric,
} from "./fabrics";
import { Ingridient } from "./ingridients";

export interface BeverageWithIngridients extends Beverage {
  getIngridients(): Ingridient[];
}

abstract class BeverageWithFabric
  extends Beverage
  implements BeverageWithIngridients
{
  public abstract ingridientFabric: BeverageComponentsFabric;
  constructor(public volume: number) {
    super();
  }

  public getIngridients(): Ingridient[] {
    return [
      this.ingridientFabric.getBasement(),
      this.ingridientFabric.getMainIngridient(),
      this.ingridientFabric.getTopper(),
    ];
  }

  public getPureCost() {
    return this.getIngridients().reduce((acc, val) => val.getCost() + acc, 0);
  }

  public getCost(): number {
    return Math.floor(this.getPureCost() * this.volume);
  }
}

export class Tea extends BeverageWithFabric {
  public ingridientFabric = new TeaComponentsFabric();

  public getDescription(): string {
    return "Tea";
  }
}

export class NonAlcoholicCocktail extends BeverageWithFabric {
  public ingridientFabric = new NonAlcoholicCocktailComponentsFabric();

  public getDescription(): string {
    return "Non Alcoholic coctail";
  }
}

export class FruitFresh extends BeverageWithFabric {
  public ingridientFabric = new FruitFreshComponentsFabric();

  public getDescription(): string {
    return "Fruit fresh";
  }
}
