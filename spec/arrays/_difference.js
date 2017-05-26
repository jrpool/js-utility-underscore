import chai, { expect } from 'chai'
import _difference from '../../src/arrays/_difference'

describe('_difference', function() {

  it('is a function', function() {
    expect(_difference).to.be.a('function')
  })

  context('valid arguments', function() {

    it('_difference() returns empty array when given an empty array', function() {
      expect(_difference([])).to.deep.equal([])
    })
    it(
      '_difference() returns empty array when argument 0 is an empty array',
      function() {
        expect(_difference([], [1, 2, 3], [1, 2, 4])).to.deep.equal([])
      }
    )
    it('_difference() returns the difference of 1 array', function() {
      expect(_difference([1, 2, 'c'])).to.deep.equal([1, 2, 'c'])
    })
    it('_difference() returns the difference of 2 arrays', function() {
      expect(_difference([1, Infinity, 2, 'c'], [2, 'b']))
        .to.deep.equal([1, Infinity, 'c'])
    })
    it(
      '_difference() returns the difference of an array from 2 others',
      function() {
        expect(
          _difference(
            [1, -33, 2, 1, - Infinity, 'c'], [2, 'b', 'c', 1],
            [undefined, 2, 1, 7]
          )
        ).to.deep.equal([-33, - Infinity])
      }
    )
    it(
      '_difference() does not convert between number and string or boolean',
      function() {
        expect(_difference([1, 2, 'c'], [true, '2', 'c']))
          .to.deep.equal([1, 2])
      }
    )

  })

  context('invalid arguments', function() {

    it(
      '_difference() returns undefined when there is no argument',
      function() {
        expect(_difference()).to.be.undefined
      }
    )
    it(
      '_difference() returns undefined when any argument is a sparse array',
      function() {
        const sparseArray = []
        sparseArray[3] = 'fourth'
        expect(_difference([1, 2], sparseArray)).to.be.undefined
      }
    )
    it(
      '_difference() returns undefined when any argument contains an array',
      function() {
        expect(_difference([1, 2], ['a', 'b', 1, 2, [3, 4]])).to.be.undefined
      }
    )
    it(
      '_difference() returns undefined when any argument contains an object',
      function() {
        expect(_difference(['a'], [1, 2, {a: 1, b: 2}])).to.be.undefined
      }
    )
    it(
      '_difference() returns undefined when any argument contains null',
      function() {
        expect(_difference([5, null, 6], [5, 7, 6])).to.be.undefined
      }
    )
    it(
      '_difference() returns undefined when any argument contains a function',
      function() {
        const fn = function() {return 'hello'}
        expect(_difference([1, 2, 3, fn, 4, 5], [2, 3, 4])).to.be.undefined
      }
    )
    it(
      '_difference() returns undefined when any argument is not an array',
      function() {
        const fn = function() {return 'hello'}
        expect(_difference(1, [2, 3])).to.be.undefined
        expect(_difference([3, 4], 3)).to.be.undefined
        expect(_difference([3, 4], '3')).to.be.undefined
        expect(_difference([3, 4], null)).to.be.undefined
        expect(_difference([3, 4], undefined)).to.be.undefined
        expect(_difference([3, 4], fn)).to.be.undefined
        expect(_difference([3, 4], NaN)).to.be.undefined
      }
    )
  })

})
