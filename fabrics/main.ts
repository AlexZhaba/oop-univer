import {
  BeverageType,
  LargeVolumeFactory,
  MediumVolumeFactory,
  SmallVolumeFactory,
  VolumeFactory,
} from "./fabrics/volumes-factory";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { Beverage } from "./beverage";
import { BeverageDecorator } from "./beverage-decorator";
import { Milk, Mocha, Soy, Whip } from "./custom-beverage-decorators";

const volumeFactoryMap: Record<string, new () => VolumeFactory> = {
  1: SmallVolumeFactory,
  2: MediumVolumeFactory,
  3: LargeVolumeFactory,
};

const addonsByCode: Record<
  string,
  new (beverage: Beverage) => BeverageDecorator
> = {
  1: Milk,
  2: Mocha,
  3: Soy,
  4: Whip,
};

const main = async () => {
  const reader = createInterface({
    input,
    output,
  });

  const beverageType = (await reader.question(
    "Выберите напиток(tea, cocktail, fresh):"
  )) as BeverageType;

  const volumeText = `
    1) small
    2) medium
    3) large
  `;

  console.log(volumeText);

  const volumeCode = await reader.question("Номер:");

  const volumeFactory = new volumeFactoryMap[volumeCode]();

  let beverage = volumeFactory.createBeverage(beverageType);

  const addons = Object.keys(addonsByCode).map(
    (val) => `${val}): ${addonsByCode[val].prototype.constructor.name}`
  );
  addons.unshift("0) Без топингов");
  console.log("Топинги: \n", addons.join("\n"));

  const addonsCodesAsString = await reader.question(
    "Перечислите коды топингов через запятую: "
  );

  const addonsDecorators = addonsCodesAsString
    .replaceAll(" ", "")
    .split(",")
    .map((code) => addonsByCode[code]);

  for (const decorator of addonsDecorators) {
    beverage = new decorator(beverage);
  }

  console.log(`${beverage.getDescription()}: ${beverage.getCost()}$`);

  reader.close();
};

main();
