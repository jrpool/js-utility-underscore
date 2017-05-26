import { expect } from 'chai'
import _clone from '../../src/objects/_clone'

describe('clone()', () => {
  it('should be a function', () => {
    expect(_clone).to.be.a('function')
  })
  it('returns a shallow copy clone of a plain object', () => {
    expect(_clone({ name: 'Keith' })).to.eql({ name: 'Keith' })
  })
  it('returns an empty object if given an empty object', () => {
    expect(_clone({})).to.eql({})
  })
  it('returns an empty array obejct when given an empty array as input', () => {
    expect(_clone([])).to.eql([])
  })
  it('returns a clone of a string', () => {
    expect(_clone('things')).to.eql('things')
  })
  it('returns a clone of an object that has nested properties', () => {
    expect(_clone({ 'blah': { 'stuff': 'things' }, 'first': 1, 'second': 2, 'third': 3 }))
      .to.eql({ 'blah': { 'stuff': 'things' }, 'first': 1, 'second': 2, 'third': 3 })
  })
  it('returns a clone of an array object', () => {
    expect(_clone([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5])
  })
  it('returns a clone of an array object that is an array of arrays', () => {
    expect(_clone([1, 2, 3, 4, [9, 10, 11, 12], 6])).to.eql([1, 2, 3, 4, [9, 10, 11, 12], 6])
  })
})
