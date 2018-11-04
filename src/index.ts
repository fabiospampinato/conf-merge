
/* IMPORT */

import * as isArray from 'lodash.isarray';
import * as mergeWith from 'lodash.mergewith';

/* CONF MERGE */

function confMerge ( object, ...sources ) {

  return mergeWith ( object, ...sources, ( prev, next ) => {

    if ( !isArray ( prev ) || !isArray ( next ) ) return;

    return prev.concat ( next );

  });

}

/* EXPORT */

export = Object.assign ( confMerge, { default: confMerge } );
