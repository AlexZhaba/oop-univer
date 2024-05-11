import readline from "node:readline";

export interface Compositable {
  name: string;
  referenceToParent?: MenuList;
  cost: number;
  showMenu(indent?: string): void;
  detach(): void;
}

export class MenuItem implements Compositable {
  referenceToParent?: MenuList = undefined;
  constructor(public name: string, public cost: number) {}

  public showMenu(indent: string = ""): void {
    const parent = this.referenceToParent
      ? this.referenceToParent.name
      : "none";
    console.log(indent + this.name);
  }

  public detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
    }
  }
}

export class MenuList implements Compositable {
  referenceToParent?: MenuList;
  components: Compositable[];
  name: string;
  cost = 0;

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }

  public showMenu(indent = ""): void {
    const parent = this.referenceToParent
      ? this.referenceToParent.name
      : "none";
    console.log(`${indent}${this.name}`);
    this.components.forEach((component) => {
      component.showMenu(indent + "..");
    });
  }

  public attach(component: Compositable): void {
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }

  public delete(component: Compositable): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  public detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }
}

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export interface StackPosition {
  root: MenuList;
  position: number;
}

export class MenuListIterator implements Iterator<MenuItem> {
  private parentStack: StackPosition[] = [];

  constructor(rootMenuList: MenuList) {
    this.parentStack.push({ root: rootMenuList, position: -1 });
  }

  public next(): MenuItem {
    const { position, root } = this.parentStack.pop() ?? {};

    if (typeof position === "undefined" || typeof root === "undefined") {
      throw new Error("Iterator was stopped");
    }

    const nextPosition = position + 1;
    const nextElement = root.components[nextPosition];

    if (!nextElement) {
      return this.next();
    }

    if (nextElement instanceof MenuList) {
      this.parentStack.push({ root: root, position: nextPosition });
      this.parentStack.push({ root: nextElement, position: -1 });
      return this.next();
    }

    this.parentStack.push({ root, position: nextPosition });

    return nextElement;
  }

  public hasNext() {
    // console.log(
    //   "hasNext1",
    //   this.parentStack.map((st) => [st.position, st.root.components.length])
    // );
    return (
      this.parentStack.length !== 0 &&
      this.parentStack.some(
        (stackVal) => stackVal.position < stackVal.root.components.length - 1
      )
    );
  }
}

const rootMenu = new MenuList("Корень");

const pizzas = new MenuList("Пиццерия");
const pizza1 = new MenuItem("Pizza #1", 2);
const pizza2 = new MenuItem("Pizza #2", 5);
const pizza3 = new MenuItem("Pizza #3", 10);

pizzas.attach(pizza1);
pizzas.attach(pizza2);
pizzas.attach(pizza3);

const coffee = new MenuList("Кофейня");
const latte = new MenuItem("Латте", 22);
const americano = new MenuItem("Американо", 12);

coffee.attach(latte);
coffee.attach(americano);

const coffee_desert = new MenuList("Десерты");
const sertaki = new MenuItem("Сертаки", 3);
const medovik = new MenuItem("Медовик", 8);

coffee_desert.attach(sertaki);
coffee_desert.attach(medovik);
coffee.attach(coffee_desert);

const dumplings = new MenuList("Пельменная");

const dumpling_1 = new MenuItem("Жареные пельмени", 1);
const dumpling_2 = new MenuItem("Вареные пельмени", 9);

dumplings.attach(dumpling_1);
dumplings.attach(dumpling_2);

const dumplings_wine = new MenuList("Винная карта");
const wine1 = new MenuItem("Wine #1", 10);
const wine2 = new MenuItem("Wine #2", 21);
const wine3 = new MenuItem("Wine #3", 9);

dumplings_wine.attach(wine1);
dumplings_wine.attach(wine2);
dumplings_wine.attach(wine3);

dumplings.attach(dumplings_wine);

rootMenu.attach(pizzas);
rootMenu.attach(coffee);
rootMenu.attach(dumplings);

rootMenu.showMenu();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const waitForKeypress = () =>
  new Promise<{ name: string }>((resolve) => {
    process.stdin.on("keypress", (_, key) => {
      if (key.ctrl === true && key.name === "d") {
        process.exit(0);
      }

      resolve(key);
    });
  });

const basket: MenuItem[] = [];

async function main() {
  let menuListIterator = new MenuListIterator(rootMenu);
  while (true) {
    console.clear();
    rootMenu.showMenu();

    if (!menuListIterator.hasNext()) {
      menuListIterator = new MenuListIterator(rootMenu);
    }

    const val = menuListIterator.next();

    console.log(
      "\x1b[33m%s\x1b[0m",
      `Basket: ${basket.map((v) => v.name).join(", ")}`
    );

    console.log(
      "For adding to basket, press 'Enter'. Press any key for next item"
    );
    console.log("\x1b[36m%s\x1b[0m", `Selected menu item: ${val.name}`);

    const key = await waitForKeypress();

    if (key.name === "space") {
      basket.push(val);
    }

    if (key.name === "return") {
      console.log(
        "\x1b[33m%s\x1b[0m",
        `Ваш заказ: ${basket.map((v) => v.name).join(", ")}`
      );
      console.log(
        "\x1b[33m%s\x1b[0m",
        `Общая цена: ${basket.reduce((acc, v) => v.cost + acc, 0)}`
      );

      return;
    }
  }
}

main();
