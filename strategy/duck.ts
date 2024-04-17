import { FlyBehavior, QuackBehavoir } from "./interfaces";

export class Duck {
  constructor(
    private flyBehavior: FlyBehavior,
    private quackBehavior: QuackBehavoir
  ) {}

  public showName() {
    console.log(this.constructor.name);
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public performFly() {
    this.flyBehavior.fly();
  }

  public setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavoir: QuackBehavoir) {
    this.quackBehavior = quackBehavoir;
  }
}
