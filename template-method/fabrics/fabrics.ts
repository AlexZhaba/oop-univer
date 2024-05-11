import { BeverageComponentsFabric } from "./abstract-fabric";
import { Basement, Juice, Water } from "./basement";
import { Fruit, MainIngridient, TeaLeaves } from "./ingridients";
import { Cream, Syrup, Topper } from "./toppers";

export class TeaComponentsFabric extends BeverageComponentsFabric {
  public getBasement(): Basement {
    return new Water();
  }

  public getMainIngridient() {
    return new TeaLeaves();
  }

  public getTopper(): Topper {
    return new Cream();
  }
}

export class NonAlcoholicCocktailComponentsFabric extends BeverageComponentsFabric {
  public getBasement(): Basement {
    return new Juice();
  }

  public getMainIngridient(): MainIngridient {
    return new Fruit();
  }

  public getTopper(): Topper {
    return new Syrup();
  }
}

export class FruitFreshComponentsFabric extends BeverageComponentsFabric {
  public getBasement(): Basement {
    return new Juice();
  }

  public getMainIngridient(): MainIngridient {
    return new Fruit();
  }

  public getTopper(): Topper {
    return new Syrup();
  }
}
