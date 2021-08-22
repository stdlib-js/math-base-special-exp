<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Natural Exponential Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Natural [exponential function][exponential-function].

<section class="intro">

The natural [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:natural_exponential_function" align="center" raw="y = e^x" alt="Natural exponential function definition"> -->

<div class="equation" align="center" data-raw-text="y = e^x" data-equation="eq:natural_exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/exp/docs/img/equation_natural_exponential_function.svg" alt="Natural exponential function definition">
    <br>
</div>

<!-- </equation> -->

where `e` is [Euler's][@stdlib/constants/float64/e] number.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-exp
```

</section>

<section class="usage">

## Usage

```javascript
var exp = require( '@stdlib/math-base-special-exp' );
```

#### exp( x )

Evaluates the natural [exponential function][exponential-function].

```javascript
var v = exp( 4.0 );
// returns ~54.5982

v = exp( -9.0 );
// returns ~1.234e-4

v = exp( 0.0 );
// returns 1.0

v = exp( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var exp = require( '@stdlib/math-base-special-exp' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    console.log( 'e^%d = %d', x, exp( x ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-exp.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-exp

[test-image]: https://github.com/stdlib-js/math-base-special-exp/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-exp/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-exp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-exp?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-exp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-exp/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-exp/main/LICENSE

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

[@stdlib/constants/float64/e]: https://github.com/stdlib-js/constants-float64-e

</section>

<!-- /.links -->
