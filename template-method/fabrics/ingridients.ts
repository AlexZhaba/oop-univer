export interface MainIngridient {
  getCost(): number;
}

export class TeaLeaves implements MainIngridient {
  public getCost() {
    return 5;
  }
}

export class Coffee implements MainIngridient {
  public getCost() {
    return 8;
  }
}

export class Fruit implements MainIngridient {
  public getCost() {
    return 3;
  }
}
