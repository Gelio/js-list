import {Node} from './node';

export class List {
  /**
   * Creates an instance of List.
   *
   * @param {any} initialValue
   */
  constructor(initialValue) {
    if (initialValue) {
      this.head = new Node(initialValue);
    }
  }

  /**
   * Computes the length of the list
   *
   * @returns {number}
   */
  getLength() {
    let current = this.head;
    let length = 0;

    while (current) {
      current = current.next;
      length += 1;
    }

    return length;
  }

  /**
   * Returns the head of the list (the first element)
   *
   * @returns {Node}
   */
  getHead() {
    return this.head;
  }

  /**
   * Returns the tail of the list (the last element)
   *
   * @returns {Node}
   */
  getTail() {
    return this.reduce((_, node) => node, undefined, false);
  }

  /**
   * @callback reduceCallbackFn
   * @param {any} accumulated
   * @param {any} current
   * @returns {any}
   */

  /**
   * Reduces the list to a single value
   *
   * @param {reduceCallbackFN} callbackFn
   * @param {any} [startingValue]
   * @returns {any}
   */
  reduce(callbackFn, startingValue, extractValues = true) {
    let currentNode;
    let accumulated;

    let extractorFn;
    if (extractValues) {
      extractorFn = node => node.value;
    } else {
      extractorFn = node => node;
    }

    if (!this.head) {
      return startingValue;
    }

    if (startingValue === undefined) {
      currentNode = this.head.next;
      accumulated = extractorFn(this.head);
    } else {
      currentNode = this.head;
      accumulated = startingValue;
    }

    while (currentNode) {
      accumulated = callbackFn(accumulated, extractorFn(currentNode));
      currentNode = currentNode.next;
    }

    return accumulated;
  }

  /**
   * @callback valueCallbackFn
   * @param {any} value
   * @param {number} index
   */

  /**
   * Traverses the list and executes the callback function for each element in the list.
   * The first argument of the callback function is the node's value, the second one is the index.
   *
   * @param {valueCallbackFn} callbackFn
   */
  forEach(callbackFn) {
    let index = 0;

    this.reduce((_, value) => {
      callbackFn(value, index);
      index += 1;
      return null;
    });
  }

  /**
   * Executes callbackFn on each item from the list and returns the results as another list.
   *
   * @param {valueCallbackFn} callbackFn
   * @returns {List}
   */
  map(callbackFn) {
    let outputList = new List();

    this.forEach((value, index) => {
      let transformedValue = callbackFn(value, index);
      outputList.pushBack(transformedValue);
    });

    return outputList;
  }

  pushBack(newValue) {
    let newNode = new Node(newValue);
    let tail = this.getTail();

    if (tail) {
      tail.next = newNode;
    } else {
      this.head = newNode;
    }

    return this;
  }

}
