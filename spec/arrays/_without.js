import chai, { expect } from 'chai'
import _without from '../../src/arrays/_without'

describe('_without', function() {

  it('is a function', function() {
    expect(_without).to.be.a('function')
  })

  context('valid arguments', function() {

    it('_without() returns empty array when given an empty array', function() {
      const emptyArray = []
      expect(_without(emptyArray, 1)).to.deep.equal([])
    })

    it('_without() returns a pruned array with 2 arguments', function() {
      let anArray = [1, 2, 3]
      expect(_without(anArray, 2)).to.deep.equal([1, 3])
    })
    it('_without() returns a pruned array with 3 arguments', function() {
      let anArray = [1, 2, 3]
      expect(_without(anArray, 2, 1)).to.deep.equal([3])
    })
    it('_without() prunes multiple types', function() {
      let anArray = [
        '0', 1, 2, '3', false, true, undefined, Infinity
      ]
      expect(
        _without(
          anArray, '0', 7, 1, true, Infinity, undefined
        )
      ).to.deep.equal([2, '3', false])
    })
    it('_without() returns empty array if all values to be pruned', function() {
      let anArray = [1, 2, 3]
      expect(_without(anArray, 2, 1, 3)).to.deep.equal([])
    })
    it('_without() does not convert between number and string', function() {
      let anArray = [1, '2', 3]
      expect(_without(anArray, 2)).to.deep.equal([1, '2', 3])
    })
    it('_without() does not convert between number and boolean', function() {
      let anArray = [1, 2, 0, 3]
      expect(_without(anArray, false)).to.deep.equal([1, 2, 0, 3])
    })

  })

  context('invalid arguments', function() {

    it('_without() returns undefined when array contains an array', function() {
      const anArray = [1, 2, 'a', [3]]
      expect(_without(anArray, 1, 2)).to.be.undefined
      expect(_without(anArray, [3])).to.be.undefined
    })
    it('_without() returns undefined when array contains an object', function() {
      const anArray = [1, 2, 'a', {a: 1}]
      expect(_without(anArray, 1, 2)).to.be.undefined
      expect(_without(anArray, {a: 1})).to.be.undefined
    })
    it('_without() returns undefined when array contains null', function() {
      const anArray = [1, 2, null, 3]
      expect(_without(anArray, 1, 2)).to.be.undefined
      expect(_without(anArray, null)).to.be.undefined
    })
    it('_without() returns undefined when array contains a function', function() {
      const fn = function() {return 'hello'}
      const anArray = [1, 2, fn, 'a']
      expect(_without(anArray, 1, 2)).to.be.undefined
      expect(_without(anArray, fn, 2)).to.be.undefined
    })
    it('_without() returns undefined when array is sparse', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_without(anArray, 'third')).to.be.undefined
      expect(_without(anArray, 'fourth')).to.be.undefined
    })
    it('_without() returns undefined when argument 0 is a number', function() {
      const nonArray = 2
      expect(_without(nonArray, 2)).to.be.undefined
      expect(_without(nonArray, 'anything')).to.be.undefined
    })
    it('_without() returns undefined when argument 0 is a string', function() {
      const nonArray = 'stuff'
      expect(_without(nonArray, 'stuff')).to.be.undefined
    })
    it(
      '_without() returns undefined when argument 0 is a nonarray object',
      function() {
        const nonArray = {key: 1}
        expect(_without(nonArray, 'key')).to.be.undefined
      })

  })

})
