import { expect } from 'chai'
import _now from '../../src/utility/_now'

describe('_now', function() {

  it('is a function', function() {
    expect(_now).to.be.a('function')
  })

  context('no argument', function() {
    it('returns an integer', function() {
      const thisNum = _now()
      expect(Math.ceil(thisNum)).to.be.equal(Math.floor(thisNum))
    })
    it('returns a time no smaller than an earlier time', function() {
      const earlier = Date.now()
      expect(_now()).to.be.least(earlier)
    })
    it('returns a time no more than 1 second after earlier time', function() {
      const earlier = Date.now()
      expect(_now()).to.be.most(earlier + 1000)
    })
  })

  context('arguments', function() {
    it('returns undefined when an argument is given', function() {
      expect(_now(1)).to.be.undefined
    })
  })

})
