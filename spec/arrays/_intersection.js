import { expect } from 'chai'
import _intersection from '../../src/arrays/_intersection'

describe('_intersection', function() {

  it('is a function', function() {
    expect(_intersection).to.be.a('function')
  })

  context('valid arguments', function() {

    it('_intersection() returns empty array when given an empty array', function() {
      expect(_intersection([])).to.deep.equal([])
    })
    it(
      '_intersection() returns empty array when any argument is an empty array',
      function() {
        expect(_intersection([], [1, 2, 3], [1, 2, 4])).to.deep.equal([])
        expect(_intersection([1, 2, 3], [], [1, 2, 4])).to.deep.equal([])
      }
    )
    it('_intersection() returns the intersection of 1 array', function() {
      expect(_intersection([1, 2, 'c'])).to.deep.equal([1, 2, 'c'])
    })
    it('_intersection() returns the intersection of 2 arrays', function() {
      expect(_intersection([1, Infinity, 2, 'c'], [2, 'b']))
        .to.deep.equal([2])
    })
    it('_intersection() returns the intersection of 3 arrays', function() {
      expect(
        _intersection([1, 2, 1, 'c'], [2, 'b', 'c', 1], [undefined, 2, 1, 7]))
        .to.deep.equal([1, 2])
    })
    it(
      '_intersection() does not convert between number and string or boolean',
      function() {
        expect(_intersection([1, 2, 'c'], [1, '2', 'c'], [true, 2, 'c']))
          .to.deep.equal(['c'])
      }
    )

  })

  context('invalid arguments', function() {

    it(
      '_intersection() returns undefined when there is no argument',
      function() {
        expect(_intersection()).to.be.undefined
      }
    )
    it(
      '_intersection() returns undefined when any argument is a sparse array',
      function() {
        const sparseArray = []
        sparseArray[3] = 'fourth'
        expect(_intersection([1, 2], sparseArray)).to.be.undefined
      }
    )
    it(
      '_intersection() returns undefined when any argument contains an array',
      function() {
        expect(_intersection([1, 2], ['a', 'b', 1, 2, [3, 4]])).to.be.undefined
      }
    )
    it(
      '_intersection() returns undefined when any argument contains an object',
      function() {
        expect(_intersection(['a'], [1, 2, {a: 1, b: 2}])).to.be.undefined
      }
    )
    it(
      '_intersection() returns undefined when any argument contains null',
      function() {
        expect(_intersection([5, null, 6], [5, 7, 6])).to.be.undefined
      }
    )
    it(
      '_intersection() returns undefined when any argument contains a function',
      function() {
        const fn = function() {return 'hello'}
        expect(_intersection([1, 2, 3, fn, 4, 5], [2, 3, 4])).to.be.undefined
      }
    )
    it(
      '_intersection() returns undefined when any argument is not an array',
      function() {
        const fn = function() {return 'hello'}
        expect(_intersection(1, [1, 2, 3])).to.be.undefined
        expect(_intersection([3, 4], 3)).to.be.undefined
        expect(_intersection([3, 4], '3')).to.be.undefined
        expect(_intersection([3, 4], null)).to.be.undefined
        expect(_intersection([3, 4], undefined)).to.be.undefined
        expect(_intersection([3, 4], fn)).to.be.undefined
        expect(_intersection([3, 4], NaN)).to.be.undefined
      }
    )
  })

})
