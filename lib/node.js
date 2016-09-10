/**
 * Node class
 *
 * @export
 * @class Node
 */
export class Node {
  /**
   * Creates an instance of Node.
   *
   * @param {any} value   Node's value
   * @param {Node} [next] The next Node in the list
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
