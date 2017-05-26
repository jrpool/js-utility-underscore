import { expect } from 'chai'
import _isUndefined from '../../src/objects/_isUndefined'

describe('_isUndefined()', function() {
  it('should be a function', function() {
    expect(_isUndefined).to.be.a('function')
  })
  it('returns true if the value is undefined', function() {
    expect(_isUndefined(global.targetNode)).to.be.true
  })
  it('returns true if no parameter is given', function() {
    expect(_isUndefined()).to.be.true
  })
  it('returns false if the value is defined', function() {
    var howSoonIs = 'now'
    expect(_isUndefined(howSoonIs)).to.be.false
  })
  it('returns false if the value is null', function() {
    expect(_isUndefined(null)).to.be.false
  })
})
