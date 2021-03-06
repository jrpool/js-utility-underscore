import { expect } from 'chai'
import _isObject from '../../src/objects/_isObject'

const testObject = { one: 'foo', two: 'bar', three: 'foobar' }
const testArray = [1, 2, 3, 4]
const badData = 'this should not return true.'

describe('_isObject()', () => {
  it('should be a function', () => {
    expect(_isObject).to.be.a('function')
  })
  it('should return true if given an object', () => {
    expect(_isObject(testObject)).to.be.true
  })
  it('should return true if given an array', () => {
    expect(_isObject(testArray)).to.be.true
  })
  it('should return true if given a function', () => {
    expect(_isObject(function() {})).to.be.true
  })
  it('should return false if given a string', () => {
    expect(_isObject(badData)).to.be.false
  })
  it('should return false if given a number', () => {
    expect(_isObject(2)).to.be.false
  })
  it('should return false if given no input', () => {
    expect(_isObject()).to.be.false
  })
  it('should return true if given empty array', () => {
    expect(_isObject([])).to.be.true
  })
  it('should return true if given empty object', () => {
    expect(_isObject({})).to.be.true
  })
})
