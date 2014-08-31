
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isNull = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-null', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isNull ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isNull( null ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				[],
				'5',
				function(){},
				true,
				{},
				NaN,
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( isNull( values[i] ) );
		}
	});

});