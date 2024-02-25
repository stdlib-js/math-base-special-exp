<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# exp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Natural [exponential function][exponential-function].

<section class="intro">

The natural [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:natural_exponential_function" align="center" raw="y = e^x" alt="Natural exponential function definition"> -->

```math
y = e^x
```

<!-- <div class="equation" align="center" data-raw-text="y = e^x" data-equation="eq:natural_exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@117273e7c4f27b0835723c2940d9675af0e14cb7/lib/node_modules/@stdlib/math/base/special/exp/docs/img/equation_natural_exponential_function.svg" alt="Natural exponential function definition">
    <br>
</div> -->

<!-- </equation> -->

where `e` is [Euler's][@stdlib/constants/float64/e] number.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
exp = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var exp = require( 'path/to/vendor/umd/math-base-special-exp/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.exp;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    console.log( 'e^%d = %d', x, exp( x ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/exp10`][@stdlib/math/base/special/exp10]</span><span class="delimiter">: </span><span class="description">base 10 exponential function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/exp2`][@stdlib/math/base/special/exp2]</span><span class="delimiter">: </span><span class="description">base 2 exponential function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/expm1`][@stdlib/math/base/special/expm1]</span><span class="delimiter">: </span><span class="description">compute exp(x) - 1.</span>
-   <span class="package-name">[`@stdlib/math-base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-exp.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-exp

[test-image]: https://github.com/stdlib-js/math-base-special-exp/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-special-exp/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-exp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-exp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-exp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-exp/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-exp/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-exp/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-exp/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-exp/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-exp/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-exp/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-exp/blob/main/branches.md

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

[@stdlib/constants/float64/e]: https://github.com/stdlib-js/constants-float64-e/tree/umd

<!-- <related-links> -->

[@stdlib/math/base/special/exp10]: https://github.com/stdlib-js/math-base-special-exp10/tree/umd

[@stdlib/math/base/special/exp2]: https://github.com/stdlib-js/math-base-special-exp2/tree/umd

[@stdlib/math/base/special/expm1]: https://github.com/stdlib-js/math-base-special-expm1/tree/umd

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
