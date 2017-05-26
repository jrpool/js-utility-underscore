import { expect } from 'chai'
import _values from '../../src/objects/_values'

const testObject = { one: 'foo', two: 'bar', three: 'foobar', four: 'more stuff' }

describe('_values()', function() {
  it('should be a function', function() {
    expect(_values).to.be.a('function')
  })
  it('should return the values of the object', function() {
    expect(_values(testObject)).to.eql(['foo', 'bar', 'foobar', 'more stuff'])
  })
  it('test object should have a length of four', function() {
    expect(_values(testObject)).to.have.lengthOf(4)
  })
  it('should return an empty array if given a string', function() {
    expect(_values('what the heck?')).to.eql([])
  })
  it('should return an empty array if given a number', function() {
    expect(_values(42)).to.eql([])
  })
  it('should return an empty array if given no input', function() {
    expect(_values()).to.eql([])
  })
  it('should return an empty array if given an empty array object', function() {
    expect(_values([])).to.eql([])
  })
  it('should return an empty array if given an empty object', function() {
    expect(_values({})).to.eql([])
  })
})
