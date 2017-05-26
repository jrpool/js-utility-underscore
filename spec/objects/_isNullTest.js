import { expect } from 'chai'
import _isNull from '../../src/objects/_isNull'

const testArray = [1, null, 3, 4]


describe('_isNull()', () => {
  it('should be a function', () => {
    expect(_isNull).to.be.a('function')
  })
  it('returns true if the value of object is null', () => {
    expect(_isNull(null)).to.be.true
  })
  it('returns false if the value of object is undefined', () => {
    expect(_isNull(undefined)).to.be.false
  })
  it('returns true if an array element is null', () => {
    expect(_isNull(testArray[1])).to.be.true
  })
  it('returns false if given a string', () => {
    expect(_isNull('howdy')).to.be.false
  })
  it('returns false if given a number', () => {
    expect(_isNull(2)).to.be.false
  })
  it('returns false if given no input', () => {
    expect(_isNull()).to.be.false
  })
  it('returns false if given empty array', () => {
    expect(_isNull([])).to.be.false
  })
  it('returns false if given empty object', () => {
    expect(_isNull({})).to.be.false
  })
})
