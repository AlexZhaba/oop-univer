import { Beverage } from "../beverage";
import { BeverageComponentsFabric } from "./abstract-fabric";
import {
  FruitFreshComponentsFabric,
  NonAlcoholicCocktailComponentsFabric,
  TeaComponentsFabric,
} from "./fabrics";

abstract class BeverageWithFabric extends Beverage {
  public abstract ingridientFabric: BeverageComponentsFabric;
  constructor(public volume: number) {
    super();
  }

  public getPureCost() {
    return (
      this.ingridientFabric.getBasement().getCost() +
      this.ingridientFabric.getMainIngridient().getCost() +
      this.ingridientFabric.getTopper().getCost()
    );
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
