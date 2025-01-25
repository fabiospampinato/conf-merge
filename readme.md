# Conf Merge

Deep merges objects, concatenating arrays.

## Install

```sh
npm install conf-merge
```

## Usage

```js
import confMerge from 'conf-merge';

// Let's create some objects to merge

const obj1 = {
  foo: [1, 2],
  bar: {
    baz: true
  }
};

const obj2 = {
  foo: [3, 4],
  bar: {
    qux: true
  }
};

// Let's merge them

confMerge ( {}, obj1, obj2 );
// => {
//   foo: [1, 2, 3, 4],
//   bar: {
//     baz: true,
//     qux: true
//   }
// }
```

## License

MIT © Fabio Spampinato
