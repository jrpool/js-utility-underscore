import { expect } from 'chai'
import _isArray from '../../src/objects/_isArray'

const testObject = { one: 'foo', two: 'bar', three: 'foobar' }
const testArray = [1, 2, 3, 4]
const badData = 'this should not return true.'

describe('_isArray()', () => {
  it('should be a function', () => {
    expect(_isArray).to.be.a('function')
  })
  it('should return true if given an array', () => {
    expect(_isArray(testArray)).to.be.true
  })
  it('should return false if given an object', () => {
    expect(_isArray(testObject)).to.be.false
  })
  it('should return false if given a function', () => {
    expect(_isArray(function() {})).to.be.false
  })
  it('should return false if given a string', () => {
    expect(_isArray(badData)).to.be.false
  })
  it('should return false if given a number', () => {
    expect(_isArray(2)).to.be.false
  })
  it('should return false if given no input', () => {
    expect(_isArray()).to.be.false
  })
  it('should return false if given empty object', () => {
    expect(_isArray({})).to.be.false
  })
  it('should return true if given empty array', () => {
    expect(_isArray([])).to.be.true
  })
})
