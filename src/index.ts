
/* IMPORT */

import * as _ from 'lodash';

/* CONF MERGE */

function confMerge ( object, ...sources ) {

  return _.mergeWith ( object, ...sources, ( prev, next ) => {

    if ( !_.isArray ( prev ) || !_.isArray ( next ) ) return;

    return prev.concat ( next );

  });

}

/* EXPORT */

export default confMerge;
