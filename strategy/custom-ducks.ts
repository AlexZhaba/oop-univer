import { Duck } from "./duck";
import { FlyByWings, FlyNoWay } from "./fly-impl";
import { QuackLoud, QuackNoWay, QuackRarely, QuackSlowly } from "./quack-impl";

export class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new QuackNoWay());
  }
}

export class BaitDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new QuackLoud());
  }
}

export class RedHeadedDuck extends Duck {
  constructor() {
    super(new FlyByWings(), new QuackNoWay());
  }
}

export class SaxonDuck extends Duck {
  constructor() {
    super(new FlyByWings(), new QuackRarely());
  }
}

export class AlbinoDuck extends Duck {
  constructor() {
    super(new FlyByWings(), new QuackSlowly());
  }
}
