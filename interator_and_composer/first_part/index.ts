import {
  ArrayIterator,
  HashMapIterator,
  Iterator,
  LinkedListIterator,
} from "./iterator";
import { LinkedList } from "./linked-list";

class MenuShower<T> {
  constructor(private menuLists: Iterator<T>[]) {}

  public show() {
    for (const menuList of this.menuLists) {
      while (menuList.hasNext()) {
        const el = menuList.next();
        console.log(el);
      }
    }
  }
}

const arrayIterator = new ArrayIterator(["Pizza #1", "Pizza #2", "Pizza #3"]);
const hashMapIterator = new HashMapIterator({
  "Pelmen 1": "1",
  "Pelmen 2": "2",
  "Pelmen 3": "3",
});

const linkedList = new LinkedList<string>();
linkedList.append("Coffee #1");
linkedList.append("Coffee #2");
linkedList.append("Coffee #3");

const linkedListIterator = new LinkedListIterator(linkedList.getHead());

const menuShower = new MenuShower([
  arrayIterator,
  hashMapIterator,
  linkedListIterator,
]);

menuShower.show();
