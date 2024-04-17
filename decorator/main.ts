import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { Beverage } from "./beverage";
import { BeverageDecorator } from "./beverage-decorator";
import { Milk, Mocha, Soy, Whip } from "./custom-beverage-decorators";
import { DarkRoast, Decaf, Expresso, HouseBlend } from "./custom-beverages";

const beverageByCode: Record<string, new () => Beverage> = {
  1: HouseBlend,
  2: DarkRoast,
  3: Expresso,
  4: Decaf,
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

  console.log(
    "Напитки:\n",
    Object.keys(beverageByCode)
      .map(
        (val) => `${val}): ${beverageByCode[val].prototype.constructor.name}`
      )
      .join("\n")
  );
  const beverageCode = await reader.question("Выберите код напитка: ");
  if (!(beverageCode in beverageByCode)) {
    throw new Error("Invalid input");
  }

  let beverage = new beverageByCode[beverageCode]();

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
