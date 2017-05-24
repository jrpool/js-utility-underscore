import chai from 'chai'
import { expect } from 'chai'
import _has from '../../src/objects/_has'

const testObject = { a: 1, b: 2, c: 3 }

describe('_has()', function() {
  it('should be a function', function() {
    expect(_has).to.be.a('function')
  })
  it('returns true if a given object key is found', function() {
    expect(_has(testObject, "b")).to.be.true
  })
  it('returns false if the object key is not found', function() {
    expect(_has(testObject, "q")).to.be.false
  })
  it('returns false if search param is a case mismatch', function() {
    expect(_has({ a: 4, b: 35, c: 59 }, "C")).to.be.false
  })
  it('returns false if no search parameter is given', function() {
    expect(_has(testObject)).to.be.false
  })
  it('returns false if given an empty object', function() {
    expect(_has({})).to.be.false
  })
  it('returns false if given an empty array object', function() {
    expect(_has([])).to.be.false
  })
  it('returns false if given a null value instead of an object', function() {
    expect(_has(null, null)).to.be.false
  })
})
