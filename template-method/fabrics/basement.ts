import { Ingridient } from "./ingridients";

export interface Basement extends Ingridient {}

export class Water implements Basement {
  public getCost() {
    return 1;
  }

  public getName() {
    return "Water";
  }
}

export class Juice implements Basement {
  public getCost() {
    return 4;
  }

  public getName() {
    return "Juice";
  }
}
