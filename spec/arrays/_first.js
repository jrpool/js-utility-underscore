import chai, { expect } from 'chai'
import _first from '../../src/arrays/_first'

describe('_first', function() {
  'use strict'

  it('is a function', function() {
    expect(_first).to.be.a('function')
  })

  context('empty array', function() {
    it('_first() with no n argument returns undefined', function() {
      const emptyArray = []
      expect(_first(emptyArray)).to.be.undefined
    })
    it('_first() with a positive n argument returns undefined', function() {
      const emptyArray = []
      expect(_first(emptyArray, 5)).to.be.undefined
    })
    it('_first() with a negative n argument returns undefined', function() {
      const emptyArray = []
      expect(_first(emptyArray, -5)).to.be.undefined
    })
    it('_first() with a +infinity n argument returns undefined', function() {
      const emptyArray = []
      expect(_first(emptyArray, Infinity)).to.be.undefined
      expect(_first(emptyArray, Number.POSITIVE_INFINITY)).to.be.undefined
    })
    it('_first() with a -infinity n argument returns undefined', function() {
      const emptyArray = []
      expect(_first(emptyArray, - Infinity)).to.be.undefined
      expect(_first(emptyArray, Number.NEGATIVE_INFINITY)).to.be.undefined
    })
    it('_first() with n === 0 returns undefined', function() {
      const emptyArray = []
      expect(_first(emptyArray, 0)).to.be.undefined
    })
  })

  context('nonempty array', function() {
    it('_first() with no n argument returns first element', function() {
      let anArray = [undefined, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_first(anArray)).to.equal(undefined)
      anArray = []
      anArray[4] = 'fifth'
      expect(_first(anArray)).to.equal(undefined)
      anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_first(anArray)).to.equal(2)
    })
    it(
      '_first() with 0 < n < length returns array of first n elements',
      function() {
        const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
        expect(_first(anArray, 2)).to.deep.equal([2, [3]])
        expect(_first(anArray, 3)).to.deep.equal([2, [3], [4, 5]])
        expect(_first(anArray, 4)).to.deep.equal([2, [3], [4, 5], '6'])
        expect(_first(anArray, 5)).to.deep.equal(
          [2, [3], [4, 5], '6', {item: 7, thing: 8}]
        )
      }
    )
    it(
      '_first() with n > length returns whole array', function() {
        const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
        expect(_first(anArray, 6))
          .to.deep.equal([2, [3], [4, 5], '6', {item: 7, thing: 8}])
      }
    )
    it('_first() with a negative n argument returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_first(anArray, -5)).to.be.undefined
    })
    it('_first() with a +infinity n argument returns the array', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_first(anArray, Infinity)).to.deep.equal(anArray)
      expect(_first(anArray, Number.POSITIVE_INFINITY)).to.deep.equal(anArray)
    })
    it('_first() with a -infinity n argument returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_first(anArray, - Infinity)).to.be.undefined
      expect(_first(anArray, Number.NEGATIVE_INFINITY)).to.be.undefined
    })
    it('_first() with n === 0 returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_first(anArray, 0)).to.be.undefined
    })
    it('_first() with non-integer n returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_first(anArray, 1.5)).to.be.undefined
    })
    it('_first() with non-number n returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_first(anArray, '2')).to.be.undefined
    })
  })

  context('sparse array', function() {
    it('_first() with no n returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_first(anArray)).to.be.undefined
    })
    it('_first() with positive n returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_first(anArray, 1)).to.be.undefined
    })
  })

  context('nonarray', function() {
    it('_first() with no n argument returns undefined', function() {
      const nonArray = 2
      expect(_first(nonArray)).to.be.undefined
    })
    it('_first() with positive n argument returns undefined', function() {
      const nonArray = {item: 7, thing: 8}
      expect(_first(nonArray, 1)).to.be.undefined
    })
    it('_first() with negative n argument returns undefined', function() {
      const nonArray = 'aString'
      expect(_first(nonArray, -2)).to.be.undefined
    })
  })

})
