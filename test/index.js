
/* IMPORT */

import * as _ from 'lodash';
import {describe} from 'ava-spec';
import merge from './merge';

/* CONF MERGE */

describe ( 'confMerge', it => {

  it ( 'Deep merges objects, concatenating arrays', t => {

    const obj1 = { foo: true, bar: [1, 2], baz: { qux: false } },
          obj2 = { bar: [3, 4], baz: { qux: true } },
          merged = _.merge ( {}, obj1, obj2, { bar: [1, 2, 3, 4] } );

    t.deepEqual ( merge ( {}, obj1, obj2 ), merged );

  });

  it ( 'Concatenate arrays only if both values are arrays', t => {

    const obj1 = { foo: true, bar: [1, 2], baz: { qux: false } },
          obj2 = { bar: true, baz: { qux: true } },
          merged = _.merge ( {}, obj1, obj2 );

    t.deepEqual ( merge ( {}, obj1, obj2 ), merged );

  });

});
