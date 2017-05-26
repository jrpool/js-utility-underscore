import { expect } from 'chai'
import _lastIndexOf from '../../src/arrays/_last_index_of'

describe('_lastIndexOf', function() {

  it('is a function', function() {
    expect(_lastIndexOf).to.be.a('function')
  })

  context('fromIndex not supplied', function() {
    it('returns -1 when array is empty', function() {
      expect(_lastIndexOf([], 'stuff')).to.equal(-1)
    })
    it('returns -1 when array does not include value', function() {
      expect(_lastIndexOf(['a', 'b', 'stuf'], 'stuff')).to.equal(-1)
    })
    it('returns index when array includes 1 instance', function() {
      expect(_lastIndexOf(['a', 'b', 'stuf'], 'b')).to.equal(1)
    })
    it('returns last index when array includes 2 instances', function() {
      expect(_lastIndexOf(['a', 'b', 'stuf', 'b'], 'b')).to.equal(3)
    })
    it('returns last index when array includes 3 instances', function() {
      expect(_lastIndexOf(['b', 7, 'b', 'stuf', 'b'], 'b')).to.equal(4)
    })
    it('matches numeric instances', function() {
      expect(_lastIndexOf(['b', 7, 'b', 'stuf', 'b'], 7)).to.equal(1)
    })
    it('matches undefined instances', function() {
      expect(_lastIndexOf([undefined, 7, 'b', 'stuf', undefined], undefined))
        .to.equal(4)
    })
    it('matches Infinity instances', function() {
      expect(_lastIndexOf(['b', 7, - Infinity, 'stuf'], - Infinity))
        .to.equal(2)
    })
    it('matches NaN instances', function() {
      expect(_lastIndexOf([NaN, 7, - Infinity, NaN, 'stuf'], - Infinity))
        .to.equal(2)
    })
  })

  context('fromIndex supplied', function() {
    it('returns same result when fromIndex is 0', function() {
      expect(_lastIndexOf(['a', 'b', 'stuf', 'b'], 'b', 0)).to.equal(3)
    })
    it('returns -1 when fromIndex is after last instance', function() {
      expect(_lastIndexOf(['a', 'b', 'stuf', 33], 'stuff', 3)).to.equal(-1)
    })
    it('returns -1 when fromIndex is after array end', function() {
      expect(_lastIndexOf(['a', 'b', 'stuf', 33], 'stuf', 8)).to.equal(-1)
    })
    it(
      'returns same result when fromIndex is not after last instance',
      function() {
        expect(_lastIndexOf(['a', 'b', 'stuf', 33], 'stuf', 1)).to.equal(2)
      }
    )
  })

  context('sparse array', function() {
    it('with no fromIndex returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_lastIndexOf(anArray, 'third')).to.be.undefined
    })
    it('with fromIndex returns undefined', function() {
      const anArray = []
      anArray[2] = 'third'
      expect(_lastIndexOf(anArray, 'third', 1)).to.be.undefined
    })
  })

  context('invalid arguments', function() {
    it('with argument 0 a number returns undefined', function() {
      expect(_lastIndexOf(2)).to.be.undefined
    })
    it('with argument 0 a string returns undefined', function() {
      expect(_lastIndexOf('[1, 2]')).to.be.undefined
    })
    it('with argument 0 a string and fromIndex returns undefined', function() {
      expect(_lastIndexOf('[1, 2]', 0)).to.be.undefined
    })
    it('with argument 0 an object returns undefined', function() {
      expect(_lastIndexOf({a: 1})).to.be.undefined
    })
    it('with argument 0 null returns undefined', function() {
      expect(_lastIndexOf(null)).to.be.undefined
    })
    it('with argument 0 undefined returns undefined', function() {
      expect(_lastIndexOf(undefined)).to.be.undefined
    })
    it('with 1 argument returns undefined', function() {
      expect(_lastIndexOf([1, 2, 3])).to.be.undefined
    })
    it('with no argument returns undefined', function() {
      expect(_lastIndexOf()).to.be.undefined
    })
    it('with argument 2 a string returns undefined', function() {
      expect(_lastIndexOf([1, 2, 3], 2, '0')).to.be.undefined
    })
    it('with argument 2 a non-integer returns undefined', function() {
      expect(_lastIndexOf([1, 2, 3], 2, 1.5)).to.be.undefined
    })
    it('with argument 2 negative returns undefined', function() {
      expect(_lastIndexOf([1, 2, 3], 2, -1)).to.be.undefined
    })
    it('with argument 0 including an array returns undefined', function() {
      expect(_lastIndexOf([1, 2, [3, 4], 5], 2)).to.be.undefined
    })
    it('with argument 0 including an object returns undefined', function() {
      expect(_lastIndexOf([1, 2, {a: 3}, 5], 2, 1)).to.be.undefined
    })
  })

})
