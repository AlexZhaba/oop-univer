import { ListNode } from "./linked-list";

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
  deleteLast(): void;
}

export class ArrayIterator<T> implements Iterator<T> {
  private index: number;
  private aggregates: T[];

  constructor(aggregates: T[]) {
    this.aggregates = aggregates;
    this.index = 0;
  }

  public next() {
    if (this.index >= this.aggregates.length) {
      throw new Error("End of iterator");
    }

    return this.aggregates[this.index++];
  }

  public hasNext() {
    return this.index < this.aggregates.length;
  }

  public deleteLast() {
    if (!this.aggregates[this.index - 1]) {
      throw new Error("delete error");
    }
    this.aggregates.splice(--this.index, 1);
    this.index--;
  }
}

export class LinkedListIterator<T> implements Iterator<T> {
  private linkedListHead: ListNode<T>;
  private curListPointer: ListNode<T> | null = null;
  private lastPointer: ListNode<T> | null = null;

  constructor(linkedListHead: ListNode<T>) {
    this.linkedListHead = linkedListHead;
  }

  public next() {
    if (!this.curListPointer) {
      this.curListPointer = this.linkedListHead;
      return this.curListPointer.data;
    }

    if (!this.curListPointer.next) {
      throw new Error("Iterator is end");
    }

    this.lastPointer = this.curListPointer;
    this.curListPointer = this.curListPointer.next;

    return this.curListPointer.data;
  }

  public hasNext() {
    return this.curListPointer?.next !== null;
  }

  public deleteLast() {
    this.lastPointer.next = this.curListPointer.next;
  }
}

export class HashMapIterator implements Iterator<string> {
  private flatHashMap: string[] | null = null;
  private index = 0;

  constructor(private hashMap: Record<string, string>) {}

  public next() {
    const aggregates = this.getFlatHashMap();
    if (this.index >= aggregates.length) {
      throw new Error("End of iterator");
    }

    return aggregates[this.index++];
  }

  public hasNext() {
    const aggregates = this.getFlatHashMap();

    return this.index < aggregates.length;
  }

  private getFlatHashMap(): string[] {
    if (this.flatHashMap) {
      return this.flatHashMap;
    }

    this.flatHashMap = Object.keys(this.hashMap).sort();
    return this.flatHashMap;
  }

  public deleteLast() {
    const aggregates = this.getFlatHashMap();
    if (!aggregates[this.index - 1]) {
      throw new Error("delete error");
    }
    this.flatHashMap.splice(--this.index, 1);
    this.index--;
  }
}
