import chai, { expect } from 'chai'
import _union from '../../src/arrays/_union'

describe('_union', function() {

  it('is a function', function() {
    expect(_union).to.be.a('function')
  })

  context('valid arguments', function() {

    it('_union() returns empty array when given an empty array', function() {
      expect(_union([])).to.deep.equal([])
    })
    it('_union() returns the union of 1 array', function() {
      expect(_union([1, 2, 'c'])).to.deep.equal([1, 2, 'c'])
    })
    it('_union() returns the union of 2 arrays', function() {
      expect(_union([1, Infinity, 2, 'c'], [2, 'b']))
        .to.deep.equal([1, Infinity, 2, 'c', 'b'])
    })
    it('_union() returns the union of 3 arrays', function() {
      expect(_union([1, 2, 1, 'c'], [2, 'b'], [undefined, 2, 7]))
        .to.deep.equal([1, 2, 'c', 'b', undefined, 7])
    })
    it(
      '_union() does not convert between number and a string or boolean',
      function() {
        expect(_union([1, 2, 'c'], ['2', true, 'b'], [undefined, 2, 7]))
          .to.deep.equal([1, 2, 'c', '2', true, 'b', undefined, 7])
      }
    )

  })

  context('invalid arguments', function() {

    it(
      '_union() returns undefined when there is no argument',
      function() {
        expect(_union()).to.be.undefined
      }
    )
    it(
      '_union() returns undefined when any argument is a sparse array',
      function() {
        const sparseArray = [];
        sparseArray[3] = 'fourth';
        expect(_union([1, 2], sparseArray)).to.be.undefined
      }
    )
    it(
      '_union() returns undefined when any argument contains an array',
      function() {
        expect(_union([1, 2], ['a', 'b', 1, 2, [3, 4]])).to.be.undefined
      }
    )
    it(
      '_union() returns undefined when any argument contains an object',
      function() {
        expect(_union(['a'], [1, 2, {a: 1, b: 2}])).to.be.undefined
      }
    )
    it(
      '_union() returns undefined when any argument contains null',
      function() {
        const anArray = [1, 2, 'a', [3]]
        expect(_union([5, null, 6], [5, 7, 6])).to.be.undefined
      }
    )
    it(
      '_union() returns undefined when any argument contains a function',
      function() {
        const fn = function() {return 'hello'};
        expect(_union([1, 2, 3, fn, 4, 5], [2, 3, 4])).to.be.undefined
      }
    )
    it(
      '_union() returns undefined when any argument is not an array',
      function() {
        const fn = function() {return 'hello'};
        expect(_union(1, [1, 2, 3])).to.be.undefined
        expect(_union([3, 4], 3)).to.be.undefined
        expect(_union([3, 4], '3')).to.be.undefined
        expect(_union([3, 4], null)).to.be.undefined
        expect(_union([3, 4], undefined)).to.be.undefined
        expect(_union([3, 4], fn)).to.be.undefined
        expect(_union([3, 4], NaN)).to.be.undefined
      }
    )
  })

})
