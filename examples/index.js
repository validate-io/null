'use strict';

var isNull = require( './../lib' );

console.log( isNull( null ) );
// returns true

console.log( isNull( undefined ) );
// returns false