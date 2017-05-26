import chai, { expect } from 'chai'
import _last from '../../src/arrays/_last'

describe('_last', function() {

  it('is a function', function() {
    expect(_last).to.be.a('function')
  })

  context('empty array', function() {
    it('_last() with no n argument returns undefined', function() {
      const emptyArray = []
      expect(_last(emptyArray)).to.be.undefined
    })
    it('_last() with a positive n argument returns undefined', function() {
      const emptyArray = []
      expect(_last(emptyArray, 5)).to.be.undefined
    })
    it('_last() with a negative n argument returns undefined', function() {
      const emptyArray = []
      expect(_last(emptyArray, -5)).to.be.undefined
    })
    it('_last() with a +infinity n argument returns undefined', function() {
      const emptyArray = []
      expect(_last(emptyArray, Infinity)).to.be.undefined
      expect(_last(emptyArray, Number.POSITIVE_INFINITY)).to.be.undefined
    })
    it('_last() with a -infinity n argument returns undefined', function() {
      const emptyArray = []
      expect(_last(emptyArray, - Infinity)).to.be.undefined
      expect(_last(emptyArray, Number.NEGATIVE_INFINITY)).to.be.undefined
    })
    it('_last() with n === 0 returns undefined', function() {
      const emptyArray = []
      expect(_last(emptyArray, 0)).to.be.undefined
    })
  })

  context('nonempty array', function() {
    it('_last() with no n argument returns last element', function() {
      let anArray = [undefined, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_last(anArray)).to.deep.equal({item: 7, thing: 8})
      anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}, undefined]
      expect(_last(anArray)).to.equal(undefined)
    })
    it(
      '_last() with 1 < n < length returns array of last n elements',
      function() {
        const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
        expect(_last(anArray, 2)).to.deep.equal(['6', {item: 7, thing: 8}])
        expect(_last(anArray, 3))
          .to.deep.equal([[4, 5], '6', {item: 7, thing: 8}])
        expect(_last(anArray, 4))
          .to.deep.equal([[3], [4, 5], '6', {item: 7, thing: 8}])
        expect(_last(anArray, 5))
          .to.deep.equal([2, [3], [4, 5], '6', {item: 7, thing: 8}])
      }
    )
    it(
      '_last() with n > length returns whole array', function() {
        const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
        expect(_last(anArray, 6))
          .to.deep.equal([2, [3], [4, 5], '6', {item: 7, thing: 8}])
      }
    )
    it('_last() with a negative n argument returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_last(anArray, -5)).to.be.undefined
    })
    it('_last() with a +infinity n argument returns the array', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_last(anArray, Infinity)).to.deep.equal(anArray)
      expect(_last(anArray, Number.POSITIVE_INFINITY)).to.deep.equal(anArray)
    })
    it('_last() with a -infinity n argument returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_last(anArray, - Infinity)).to.be.undefined
      expect(_last(anArray, Number.NEGATIVE_INFINITY)).to.be.undefined
    })
    it('_last() with n === 0 returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_last(anArray, 0)).to.be.undefined
    })
    it('_last() with non-integer n returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_last(anArray, 1.5)).to.be.undefined
    })
    it('_last() with non-number n returns undefined', function() {
      const anArray = [2, [3], [4, 5], '6', {item: 7, thing: 8}]
      expect(_last(anArray, '2')).to.be.undefined
    })
  })

  context('sparse array', function() {
    it('_last() with no n returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_last(anArray)).to.be.undefined
    })
    it('_last() with positive n returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_last(anArray, 1)).to.be.undefined
    })
  })

  context('nonarray', function() {
    it('_last() with no n argument returns undefined', function() {
      const nonArray = 2
      expect(_last(nonArray)).to.be.undefined
    })
    it('_last() with positive n argument returns undefined', function() {
      const nonArray = {item: 7, thing: 8}
      expect(_last(nonArray, 1)).to.be.undefined
    })
    it('_last() with negative n argument returns undefined', function() {
      const nonArray = 'aString'
      expect(_last(nonArray, -2)).to.be.undefined
    })
  })

})
