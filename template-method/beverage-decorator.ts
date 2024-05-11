import { Beverage } from "./beverage";
import { BeverageWithIngridients } from "./fabrics/beverages";

export abstract class BeverageDecorator extends Beverage {
  protected beverage: BeverageWithIngridients;

  constructor(beverage: BeverageWithIngridients) {
    super();
    this.beverage = beverage;
  }

  public getIngridients() {
    return this.beverage.getIngridients();
  }
}
