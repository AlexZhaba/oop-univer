import { QuackBehavoir } from "./interfaces";

export class QuackNoWay implements QuackBehavoir {
  public quack() {
    console.log("Я не умею крякать");
  }
}

export class QuackLoud implements QuackBehavoir {
  public quack() {
    console.log("Я крякаю громко");
  }
}

export class QuackSlowly implements QuackBehavoir {
  public quack() {
    console.log("Я крягаю протяжко");
  }
}

export class QuackRarely implements QuackBehavoir {
  public quack() {
    console.log("Я крякаю редко");
  }
}
