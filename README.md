# Conf Merge

Deep merges objects, concatenating arrays.

It's simply a wrapper around [lodash](https://lodash.com)'s [_.mergeWith](https://lodash.com/docs/4.17.4#mergeWith), with a custom customizer.

## Install

```shell
$ npm install --save conf-merge
```

## Usage

```js
import confMerge from 'conf-merge';

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
