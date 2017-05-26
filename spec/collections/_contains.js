import chai, { expect } from 'chai'
import _contains from '../../src/collections/_contains'

describe('_contains', function() {

  it('is a function', function() {
    expect(_contains).to.be.a('function')
  })

  context('2 arguments', function() {
    it('returns true when given [1, 2, "3", 10] and 1', function() {
      expect(_contains([1, 2, '3', 10], 1)).to.be.true
    })
    it('returns true when given {alpha: 1, beta: 2} and “alpha”', function() {
      expect(_contains([1, 2, '3', 10], 1)).to.be.true
    })
    it('returns true when given [1, 2, "3", 10] and 2', function() {
      expect(_contains([1, 2, '3', 10], 2)).to.be.true
    })
    it('returns true when given [1, 2, "3", 2, 10] and 2', function() {
      expect(_contains([1, 2, '3', 2, 10], 2)).to.be.true
    })
    it('returns true when given [1, 2, "3", 2, 10] and 10', function() {
      expect(_contains([1, 2, '3', 2, 10], 10)).to.be.true
    })
    it('returns true when given [1, 2, "3", 2.54, 10] and 2.54', function() {
      expect(_contains([1, 2, '3', 2, 10], 10)).to.be.true
    })
    it('returns true when given {alpha: 1, beta: 2} and “beta”', function() {
      expect(_contains([1, 2, '3', 10], 1)).to.be.true
    })
    it('returns false when given [1, 2, "3", 10] and 3', function() {
      expect(_contains([1, 2, '3', 10], 3)).to.be.false
    })
    it('returns false when given {alpha: 1, beta: 2} and 2', function() {
      expect(_contains([1, 2, '3', 10], 1)).to.be.true
    })
    it('returns false when given [] and “element”', function() {
      expect(_contains([], 'element')).to.be.false
    })
    it('returns true when given [""] and “”', function() {
      expect(_contains(['x', ''], '')).to.be.true
    })
    it('returns false when given [] and “”', function() {
      expect(_contains([], '')).to.be.false
    })
    it('returns false when given {} and “element”', function() {
      expect(_contains([], 'element')).to.be.false
    })
    it('returns true when given {"": "zilch", x: "stuff"} and “”', function() {
      expect(_contains({"": "zilch", x: "stuff"}, '')).to.be.true
    })
    it('returns false when given {} and “”', function() {
      expect(_contains({}, '')).to.be.false
    })
    it('returns false when given {a: 1} and NaN', function() {
      expect(_contains({a: 1}, NaN)).to.be.false
    })
  })

  context('3 arguments', function() {
    it('returns true when given [1, 2, "3", 10], 1, and 0', function() {
      expect(_contains([1, 2, '3', 10], 1, 0)).to.be.true
    })
    it(
      'returns true when given {alpha: 1, beta: 2}, “alpha”, and 0',
      function() {
        expect(_contains([1, 2, '3', 10], 1, 0)).to.be.true
      }
    )
    it('returns true when given [1, 2, "3", 10], 2, and 0', function() {
      expect(_contains([1, 2, '3', 10], 2, 1)).to.be.true
    })
    it(
      'returns true when given {alpha: 1, beta: 2}, “beta”, and 1',
      function() {
        expect(_contains({alpha: 1, beta: 2}, 'beta', 1)).to.be.true
      }
    )
    it(
      'returns true when given {alpha: 1, beta: 2, gamma: 3}, “beta”, and 1',
      function() {
        expect(_contains({alpha: 1, beta: 2, gamma: 3}, 'beta', 1))
        .to.be.true
      }
    )
    it('returns false when given [1, 2, "3", 10], 3, and 1', function() {
      expect(_contains([1, 2, '3', 10], 3, 1)).to.be.false
    })
    it('returns false when given {alpha: 1, beta: 2}, 2, and 0', function() {
      expect(_contains([1, 2, '3', 10], 1, 0)).to.be.true
    })
    it('returns false when given [], “element”, and 0', function() {
      expect(_contains([], 'element', 0)).to.be.false
    })
    it('returns true when given [""], “”, and 0', function() {
      expect(_contains(['x', ''], '', 0)).to.be.true
    })
    it('returns false when given [], “”, and 0', function() {
      expect(_contains([], '', 0)).to.be.false
    })
    it('returns false when given {}, “element”, and 0', function() {
      expect(_contains([], 'element', 0)).to.be.false
    })
    it(
      'returns true when given {"": "zilch", x: "stuff"}, “”, and 0',
      function() {
        expect(_contains({"": "zilch", x: "stuff"}, '')).to.be.true
      }
    )
    it('returns false when given {}, “”, and 0', function() {
      expect(_contains({}, '', 0)).to.be.false
    })
    it('returns false when given {a: 1}, NaN, and 0', function() {
      expect(_contains({a: 1}, NaN, 0)).to.be.false
    })
    it('returns true when given [8, undefined], undefined, and 1', function() {
      expect(_contains([8, undefined], undefined, 1)).to.be.true
    })
  })

  context('invalid arguments', function() {
    it('returns undefined when given [1, 5] and null', function() {
      expect(_contains([1, 5], null)).to.be.undefined
    })
    it('returns undefined when given [1, 5], null, and 1', function() {
      expect(_contains([1, 5], null, 1)).to.be.undefined
    })
    it('returns undefined when given "[2, 9, 2, 4]" and 2', function() {
      expect(_contains('[2, 9, 2, 4]', 2)).to.be.undefined
    })
    it('returns undefined when given "[2, 9, 2, 4]", 2, and 1', function() {
      expect(_contains('[2, 9, 2, 4]', 2, 1)).to.be.undefined
    })
    it('returns undefined when given 1, 5, and 0', function() {
      expect(_contains(1, 5, 0)).to.be.undefined
    })
    it('returns undefined when given 1, 5, 8, 8, and 0', function() {
      expect(_contains(1, 5, 8, 8, 0)).to.be.undefined
    })
    it('returns undefined when given [1, 5, 8, 8], 8, and -1', function() {
      expect(_contains([1, 5, 8, 8], 8, -1)).to.be.undefined
    })
    it('returns undefined when given [1, 5, 8, 8], 8, and 2.5', function() {
      expect(_contains([1, 5, 8, 8], 8, 2.5)).to.be.undefined
    })
  })

})
