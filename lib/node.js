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
   * @param {any} value
   * @param {Node} [next]
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
