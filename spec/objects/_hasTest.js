import { expect } from 'chai'
import _has from '../../src/objects/_has'

const testObject = { a: 1, b: 2, c: 3 }

describe('_has()', () => {
  it('should be a function', () => {
    expect(_has).to.be.a('function')
  })
  it('returns true if a given object key is found', () => {
    expect(_has(testObject, 'b')).to.be.true
  })
  it('returns false if the object key is not found', () => {
    expect(_has(testObject, 'q')).to.be.false
  })
  it('returns false if search param is a case mismatch', () => {
    expect(_has({ a: 4, b: 35, c: 59 }, 'C')).to.be.false
  })
  it('returns false if no search parameter is given', () => {
    expect(_has(testObject)).to.be.false
  })
  it('returns false if given an empty object', () => {
    expect(_has({})).to.be.false
  })
  it('returns false if given an empty array object', () => {
    expect(_has([])).to.be.false
  })
  it('returns false if given a null value instead of an object', () => {
    expect(_has(null, null)).to.be.false
  })
})
