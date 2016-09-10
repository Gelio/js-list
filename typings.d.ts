interface Node {
  value: any;
  next?: Node;
}

interface reduceCallback {
  (acc: Node | any, current: Node | any): any;
}

declare class jsList {
  constructor(initialValue?: any);
  getLength(): number;
  getHead(): Node;
  getTail(): Node;
  reduce(callback: (acc: any, current: any) => any, startingValue: any, extractValues: boolean): any;
  forEach(callback: (value: any) => any);
  map(callback: (value: any) => any): jsList;
  get(targetIndex: number): Node;
  pushBack(newValue: any): jsList;
  push(value: any, index: number): jsList;
  remove(value: any): jsList;
  find(value: any): Node;
  getValues(): any[];
}

export = jsList;
