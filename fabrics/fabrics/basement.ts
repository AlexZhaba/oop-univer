export interface Basement {
  getCost(): number;
}

export class Water implements Basement {
  public getCost() {
    return 1;
  }
}

export class Juice implements Basement {
  public getCost() {
    return 4;
  }
}
