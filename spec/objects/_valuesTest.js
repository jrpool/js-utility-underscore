import chai from 'chai'
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
  it('should have a length of four', function() {
    expect(_values(testObject)).to.have.lengthOf(4)
  })
})
