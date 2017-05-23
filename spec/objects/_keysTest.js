import chai from 'chai'
import { expect } from 'chai'
import _keys from '../../src/objects/_keys'

const testObject = { one: 'foo', two: 'bar', three: 'foobar' }
const badData = 'this should not work.'

describe('_keys()', function() {
  it('should be a function', function() {
    expect(_keys).to.be.a('function')
  })
  it('should return the keys of the object', function() {
    expect(_keys(testObject)).to.eql(['one', 'two', 'three'])
  })
  it('should have a length of three', function() {
    expect(_keys(testObject)).to.have.lengthOf(3)
  })
  it('should return false if input is not an object', function() {
    expect(_keys(badData)).to.be.false
  })
})
