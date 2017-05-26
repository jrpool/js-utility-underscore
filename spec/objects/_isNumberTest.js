import { expect } from 'chai'
import _isNumber from '../../src/objects/_isNumber'

describe('_isNumber()', function() {
  it('should be a function', function() {
    expect(_isNumber).to.be.a('function')
  })
  it('returns true if the object is a number', function() {
    expect(_isNumber(592)).to.be.true
  })
  it('returns false if the object is a string', function() {
    expect(_isNumber('house')).to.be.false
  })
  it('returns false if given a number as a string', function() {
    expect(_isNumber('3')).to.be.false
  })
  it('returns true if an array element is a number', function() {
    const anArray = ['town', 253, 'somewhere', 4]
    expect(_isNumber(anArray[1])).to.be.true
  })
  it('returns false if no input parameter is given', function() {
    expect(_isNumber()).to.be.false
  })
  it('returns false if the object is undefined', function() {
    expect(_isNumber(undefined)).to.be.false
  })
  it('returns false if the object is null', function() {
    expect(_isNumber(null)).to.be.false
  })
  it('returns true if the object is NaN', function() {
    expect(_isNumber(NaN)).to.be.true
  })
  it('returns true if the object is a math equation', function() {
    expect(_isNumber(3.14 * 9000)).to.be.true
  })
  it('returns true if the object is an infinite number', function() {
    expect(_isNumber(Infinity)).to.be.true
  })
})
