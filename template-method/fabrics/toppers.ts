import { Ingridient } from "./ingridients";

export interface Topper extends Ingridient {}

export class Cream implements Topper {
  public getCost() {
    return 10;
  }

  public getName() {
    return "Cream";
  }
}

export class Syrup implements Topper {
  public getCost() {
    return 7;
  }

  public getName() {
    return "Syrup";
  }
}
