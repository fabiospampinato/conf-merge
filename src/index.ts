
/* IMPORT */

import isArray from 'lodash/isArray';
import mergeWith from 'lodash/mergeWith';

/* CONF MERGE */

function confMerge ( object, ...sources ) {

  return mergeWith ( object, ...sources, ( prev, next ) => {

    if ( !isArray ( prev ) || !isArray ( next ) ) return;

    return prev.concat ( next );

  });

}

/* EXPORT */

export = Object.assign ( confMerge, { default: confMerge } );
