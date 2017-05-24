import chai from 'chai'
import { expect } from 'chai'
import _isNull from '../../src/objects/_isNull'

const testArray = [1, null, 3, 4]


describe('_isNull()', function() {
  it('should be a function', function() {
    expect(_isNull).to.be.a('function')
  })
  it('returns true if the value of object is null', function() {
    expect(_isNull(null)).to.be.true
  })
  it('returns false if the value of object is undefined', function() {
    expect(_isNull(undefined)).to.be.false
  })
  it('returns true if an array element is null', function() {
    expect(_isNull(testArray[1])).to.be.true
  })
  it('returns false if given a string', function() {
    expect(_isNull('howdy')).to.be.false
  })
  it('returns false if given a number', function() {
    expect(_isNull(2)).to.be.false
  })
  it('returns false if given no input', function() {
    expect(_isNull()).to.be.false
  })
  it('returns false if given empty array', function() {
    expect(_isNull([])).to.be.false
  })
  it('returns false if given empty object', function() {
    expect(_isNull({})).to.be.false
  })
})
