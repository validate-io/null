null
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is null.


## Installation

``` bash
$ npm install validate.io-null
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isNull = require( 'validate.io-null' );
```

#### isNull( value )

Validates if a `value` is `null`.

``` javascript
var value = null;

var bool = isNull( value );
// returns true
```


## Examples


``` javascript
console.log( isNull( null ) );
// returns true

console.log( isNull( undefined ) );
// returns false
```


To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-null.svg
[npm-url]: https://npmjs.org/package/validate.io-null

[travis-image]: http://img.shields.io/travis/validate-io/null/master.svg
[travis-url]: https://travis-ci.org/validate-io/null

[coveralls-image]: https://img.shields.io/coveralls/validate-io/null/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/null?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/null.svg
[dependencies-url]: https://david-dm.org/validate-io/null

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/null.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/null

[github-issues-image]: http://img.shields.io/github/issues/validate-io/null.svg
[github-issues-url]: https://github.com/validate-io/null/issues
