import { Beverage } from "./beverage";

export abstract class BeverageDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
}
