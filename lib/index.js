/**
*
*	VALIDATE: null
*
*
*	DESCRIPTION:
*		- Validates if a value is null.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: isNull( value )
	*	Validates if a value is null.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is null
	*/
	function isNull( value ) {
		return ( value === null );
	} // end FUNCTION isNull()


	// EXPORTS //

	module.exports = isNull;

})();