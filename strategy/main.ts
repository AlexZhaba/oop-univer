import {
  AlbinoDuck,
  BaitDuck,
  RedHeadedDuck,
  RubberDuck,
  SaxonDuck,
} from "./custom-ducks";
import { Duck } from "./duck";
import { FlyByRadioControl } from "./fly-impl";
import { QuackSlowly } from "./quack-impl";

const rubberDuck = new RubberDuck();
const baitDuck = new BaitDuck();
const redHeadedDuck = new RedHeadedDuck();
const saxonDuck = new SaxonDuck();
const albinoDuck = new AlbinoDuck();

const ducks: Duck[] = [
  rubberDuck,
  baitDuck,
  redHeadedDuck,
  saxonDuck,
  albinoDuck,
];

for (const duck of ducks) {
  duck.showName();
  duck.performFly();
  duck.performQuack();
}

baitDuck.showName();
baitDuck.setFlyBehavior(new FlyByRadioControl());
baitDuck.performFly();

redHeadedDuck.showName();
redHeadedDuck.setQuackBehavior(new QuackSlowly());
redHeadedDuck.performQuack();
