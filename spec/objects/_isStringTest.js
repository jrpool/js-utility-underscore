import { expect } from 'chai'
import _isString from '../../src/objects/_isString'

describe('_isString()', function() {
  it('should be a function', function() {
    expect(_isString).to.be.a('function')
  })
  it('returns true if the object is a string', function() {
    expect(_isString('house')).to.be.true
  })
  it('returns false if the object is a number', function() {
    expect(_isString(592)).to.be.false
  })
  it('returns true if an array element is a string', function() {
    const anArray = [35, 'place', 2, 4]
    expect(_isString(anArray[1])).to.be.true
  })
  it('returns false if no input parameter is given', function() {
    expect(_isString()).to.be.false
  })
  it('returns false if the object is undefined', function() {
    expect(_isString(undefined)).to.be.false
  })
  it('returns false if the object is null', function() {
    expect(_isString(null)).to.be.false
  })
})
