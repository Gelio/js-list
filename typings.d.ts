interface Node {
  value: any;
  next?: Node;
}

interface reduceCallback {
  (acc: Node | any, current: Node | any): any;
}

declare class List {
  constructor(initialValue?: any);
  getLength(): number;
  getHead(): Node;
  getTail(): Node;
  reduce(callback: (acc: any, current: any) => any, startingValue: any, extractValues: boolean): any;
  forEach(callback: (value: any) => any);
  map(callback: (value: any) => any): List;
  get(targetIndex: number): Node;
  pushBack(newValue: any): List;
  push(value: any, index: number): List;
  remove(value: any): List;
  find(value: any): Node;
  getValues(): any[];
}

export = List;
