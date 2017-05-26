# Common JS Utility Functions - Underscore

ES2015 reimplementation of a portion of the Underscore library

Project Team : fancy-thrasher

Project Members:

[Keith Oppel](https://github.com/mistakeets)

[Jonathan Pool](https://github.com/jrpool)

## Notes

Syntactic and stylistic differences between modules, not in conflict with the
specifications, exist in this project.

Any test files in which arrow function expressions could be but are not used
are written to conform with the [recommendation][mocha] that “Passing arrow
functions … to Mocha is discouraged”.

## Installation and Setup

0. These instructions presuppose that npm (https://nodejs.org/en/) is installed.

1. Clone this repository into a local directory.

2. In the local directory, install required dependencies (see package.json) by executing:

    npm i

3. In the local directory, perform the provided tests by executing:

    npm test

4. In the local directory, perform linting on the files in the `src` and `spec`
directories by executing:

    npm run eslint

## Functions

```
### arrays
_compact.js
_difference.js
_first.js
_flatten.js
_initial.js
_intersection.js
_last_index_of.js
_last.js
_rest.js
_union.js
_without.js
### collections
_contains.js
_size.js
### objects
_allKeys.js
_clone.js
_extend.js
_has.js
_isArguments.js
_isArray.js
_isEmpty.js
_isFinite.js
_isNull.js
_isNumber.js
_isObject.js
_isString.js
_isUndefined.js
_keys.js
_values.js
### utility
_escape.js
_identity.js
_noop.js
_now.js
_random.js
_unescape.js
```

## Challenge Rubric

This goal will likely be within your ZPD if you...

- Can write JavaScript programs for Node.js
- Can use problem decomposition to split difficult problems into smaller parts
- Have used pseudocode as an intermediary step in writing a program
- Are familiar with common JavaScript packages/libraries like Underscore or Lodash
- Are interested in testing and test-driven-development (TDD)
- Are interested in understanding how many of the most common utility functions actually work
- Are interested in understanding how developers write high-level code for others to use
- Are interested in reading and interpreting technical documentation
- Are interested in writing ES2015

## Description

Create a library of commonly used JavaScript utility functions by reverse engineering the popular [Underscore][underscore] library.

Use the documentation to build a smaller clone of the [Underscore API][underscore] (current version: 1.8.3) with ES2015. Publish the code as a package to NPM (stretch).

In addition to implementing the functions themselves, write tests for each of the functions. Luckily for you, _most of the work of writing tests has already been done for you_. Use the descriptions and examples from the documentation to make your tests.

For example, a test for the [`_.sortBy()`](http://underscorejs.org/#sortBy) Collection method could look like this (using the Node.js builtin `assert` library):

```javascript
const assert = require('assert')
const _ = require('collections.js')

assert.deepEqual(
  _.sortBy([1, 2, 3, 4, 5, 6], (num) => Math.sin(num)),
  [5, 4, 6, 3, 1, 2],
  "Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee."
)

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

assert.deepEqual(
  _.sortBy(stooges, 'name'),
  [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}],
  "Iteratee may also be the string name of the property to sort by (eg. length)"
)
```

Note that the code and messages were shamelessly copied directly from the [Underscore docs][underscore].

## Context

This project will take you into the realm of real a JavaScript library used by thousands (maybe millions) of developers across the world. You'll have to think like an open-source software developer and learn the benefits and constraints of such a role.

In addition, your code may be used by other developers to make their jobs easier. Hopefully this project helps you better understand how to contribute to the open source community so that you can be an active member throughout your career.

The questions that this project will raise are:
- What happens "under the hood" of the most common utility functions?
- How do we write packages that are easy to understand and simple to use out of the box?
- How to publish a package to NPM? (part of stretch goal)

This goal is the sister goal of [Common JS Utility Functions - Lodash](37-Common_JS_Utility_Functions-Lodash.md).

## Specifications

- [x] Tests and correct implementations exist for **32** (not all) utility functions from the Underscore library.
- [x] Functions are organized into files with the same names as the function groups from Underscore (e.g. "Collections", "Functions", "Objects").
- [x] All code is written with ES2015.
- [x] Includes a README listing each method written and which file it is in.
- [x] Code uses a linter and there are no linting errors.
- [x] Code is well tested and all tests are passing.
- [x] All package dependencies are properly declared in `package.json`.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] Every pull request has been reviewed by at least one other person.
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

### Stretch

- [ ] An additional **16** utility functions have tests and correct implementations.
- [ ] Package is published to [NPM][npm].
- [ ] All source code has inline documentation using [JSDoc][jsdoc] format.
- [ ] Documentation is published a simple [GitHub Pages][github-pages] site (hint: use a builder like the [documentation package][npm-documentation]).

## Resources

- [Underscore site][underscore]
- [JS Doc][jsdoc]
- [Documentation generator][npm-documentation]

[underscore]: http://underscorejs.org/
[github-pages]: https://pages.github.com/
[jsdoc]: http://usejsdoc.org/
[npm]: https://www.npmjs.com/
[npm-documentation]: https://www.npmjs.com/package/documentation
[mocha]: https://mochajs.org/#arrow-functions
