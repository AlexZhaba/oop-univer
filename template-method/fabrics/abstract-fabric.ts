import { Basement } from "./basement";
import { MainIngridient } from "./ingridients";
import { Topper } from "./toppers";

export abstract class BeverageComponentsFabric {
  public abstract getBasement(): Basement;
  public abstract getMainIngridient(): MainIngridient;
  public abstract getTopper(): Topper;
}
