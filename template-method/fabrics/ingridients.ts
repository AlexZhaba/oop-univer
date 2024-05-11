export interface Ingridient {
  getCost(): number;
  getName(): string;
}

export interface MainIngridient extends Ingridient {}

export class TeaLeaves implements MainIngridient {
  public getCost() {
    return 5;
  }

  public getName() {
    return "Tea leaves";
  }
}

export class Coffee implements MainIngridient {
  public getCost() {
    return 8;
  }

  public getName() {
    return "Coffee";
  }
}

export class Fruit implements MainIngridient {
  public getCost() {
    return 3;
  }

  public getName() {
    return "Fruit";
  }
}
