import { expect } from 'chai'
import _identity from '../../src/utility/_identity'

describe('_identity', function() {

  it('is a function', function() {
    expect(_identity).to.be.a('function')
  })
  it('_identity() returns 45 when given 45', function() {
    expect(_identity(45)).to.equal(45)
  })
  it('_identity() returns “hello” when given “hello”', function() {
    expect(_identity('hello')).to.equal('hello')
  })
  it('_identity() returns null when given null', function() {
    expect(_identity(null)).to.equal(null)
  })
  it('_identity() returns NaN when given NaN', function() {
    expect(isNaN(_identity(NaN))).to.be.true
  })
  it('_identity() returns undefined when given undefined', function() {
    expect(_identity(undefined)).to.equal(undefined)
  })
  it('_identity() returns empty array when given an empty array', function() {
    expect(_identity([])).to.deep.equal([])
  })
  it('_identity() returns equivalent array when given an array', function() {
    expect(_identity([1, 2, 3])).to.deep.equal([1, 2, 3])
  })
  it('_identity() returns ref to same array when given an array', function() {
    const thisArray = [1, 2, 3]
    expect(_identity(thisArray)).to.equal(thisArray)
  })
  it('_identity() returns empty object when given an empty object', function() {
    expect(_identity({})).to.deep.equal({})
  })
  it('_identity() returns equivalent object when given an object', function() {
    expect(_identity({a: 1, b: 2})).to.deep.equal({a: 1, b: 2})
  })
  it('_identity() returns ref to same object when given an object', function() {
    const thisObject = {a: 1, b: 2}
    expect(_identity(thisObject)).to.equal(thisObject)
  })
  it('_identity() returns undefined when there is no argument', function() {
    expect(_identity()).to.be.undefined
  })
  it('_identity() returns undefined when there are 2+ arguments', function() {
    expect(_identity(3, 6)).to.be.undefined
  })

})
