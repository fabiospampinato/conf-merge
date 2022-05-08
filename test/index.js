
/* IMPORT */

import _ from 'lodash';
import {describe} from 'fava';
import merge from '../dist/index.js';

/* MAIN */

describe ( 'merge', it => {

  it ( 'Deep merges objects, concatenating arrays', t => {

    const obj1 = { foo: true, bar: [1, 2], baz: { qux: false } };
    const obj2 = { bar: [3, 4], baz: { qux: true } };
    const merged = _.merge ( {}, obj1, obj2, { bar: [1, 2, 3, 4] } );

    t.deepEqual ( merge ( {}, obj1, obj2 ), merged );

  });

  it ( 'Concatenate arrays only if both values are arrays', t => {

    const obj1 = { foo: true, bar: [1, 2], baz: { qux: false } };
    const obj2 = { bar: true, baz: { qux: true } };
    const merged = _.merge ( {}, obj1, obj2 );

    t.deepEqual ( merge ( {}, obj1, obj2 ), merged );

  });

});
