import { FlyBehavior } from "./interfaces";

export class FlyByWings implements FlyBehavior {
  public fly() {
    console.log("Я летаю на крыльях");
  }
}

export class FlyByRocket implements FlyBehavior {
  public fly() {
    console.log("Я летаю на ракете");
  }
}

export class FlyByRadioControl implements FlyBehavior {
  public fly() {
    console.log("Я летаю на радиоуправлении");
  }
}

export class FlyNoWay implements FlyBehavior {
  public fly() {
    console.log("Я не умею летать");
  }
}
