import chai, { expect } from 'chai'
import _random from '../../src/utility/_random'

describe('_random', function() {

  it('is a function', function() {
    expect(_random).to.be.a('function')
  })

  context('2 arguments', function() {
    it('returns an integer', function() {
      const thisNum = _random(45, 50)
      expect(Math.ceil(thisNum)).to.be.equal(Math.floor(thisNum))
    })
    it('returns a number within the specified range', function() {
      expect(_random(45, 50)).to.be.within(45, 50)
    })
    it('returns min when max === min', function() {
      expect(_random(50, 50)).to.equal(50)
    })
    it('returns undefined when min > max', function() {
      expect(_random(30, 20)).to.be.undefined
    })
    it('returns a correct number when an argument < 0', function() {
      expect(_random(-5, 50)).to.be.within(-5, 50)
    })
    it(
      'returns a correct number when both arguments < 0',
      function() {
        expect(_random(-5, -1)).to.be.within(-5, -1)
      }
    )
    it(
      'returns undefined when either argument is undefined',
      function() {
       expect(_random(undefined)).to.equal(undefined)
      }
    )
    it(
      'returns undefined when either argument is a string',
      function() {
       expect(_random('5', 10)).to.equal(undefined)
      }
    )
    it(
      'returns undefined when either argument is an array',
      function() {
       expect(_random(5, [10])).to.equal(undefined)
      }
    )
    it(
      'returns undefined when either argument is null', function() {
        expect(_random(null, 20)).to.be.undefined
      }
    )
  })

  context('1 argument', function() {
    it('returns an integer', function() {
      const thisNum = _random(50)
      expect(Math.ceil(thisNum)).to.be.equal(Math.floor(thisNum))
    })
    it('returns a number within the specified range', function() {
      expect(_random(50)).to.be.within(0, 50)
    })
    it('returns min when max === min', function() {
      expect(_random(0)).to.equal(0)
    })
    it('returns undefined when argument 0 < 0', function() {
      expect(_random(-5)).to.be.undefined
    })
    it(
      'returns undefined when argument 0 is not a number',
      function() {
       expect(_random(undefined)).to.be.undefined
      }
    )
    it(
      'returns undefined when argument 0 is an array',
      function() {
       expect(_random([10, 20])).to.be.undefined
      }
    )
  })

  context('no argument', function() {
    it('returns undefined when there is argument', function() {
      expect(_random(-5)).to.be.undefined
    })
  })

})
