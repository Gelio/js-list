# js-list
> Javascript list implementation

## Installation

```sh
$ npm install --save js-list
```

## Usage

```js
var List = require('js-list');

var myList = new List();
myList.pushBack(1);
myList.pushBack(8);
console.log(myList.getValues());  // [ 1, 8 ]
```
For a complete API, see [the docs](https://gelio.github.io/js-list/).

## License

MIT © [Grzegorz Rozdzialik](voreny.gelio@gmail.com)
