import { expect } from 'chai'
import _isEmpty from '../../src/objects/_isEmpty'

function testArguments() {
  return arguments
}

describe('_isEmpty()', () => {
  it('should be a function', () => {
    expect(_isEmpty).to.be.a('function')
  })
  it('returns false if given an array that is not empty', () => {
    expect(_isEmpty([4, 5, 'car', 'stuff', 42])).to.be.false
  })
  it('returns true if given array has no values', () => {
    expect(_isEmpty([])).to.be.true
  })
  it('returns false if given an object that is not empty', () => {
    expect(_isEmpty({ a: 1, b: 2, c: 3 })).to.be.false
  })
  it('returns true if given object has no keys or values', () => {
    expect(_isEmpty({})).to.be.true
  })
  it('returns false if given a string with a length < 0', () => {
    expect(_isEmpty('some words')).to.be.false
  })
  it('returns true when given a zero length string', () => {
    expect(_isEmpty('')).to.be.true
  })
  it('returns true if null', () => {
    expect(_isEmpty(null)).to.be.true
  })
  it('returns false if the argument object is not empty', () => {
    expect(_isEmpty(testArguments(1, 2, 3))).to.be.false
  })
  it('returns true if the argument object is emtpy', () => {
    expect(_isEmpty(testArguments())).to.be.true
  })
})
