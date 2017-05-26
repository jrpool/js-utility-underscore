import chai from 'chai'
import { expect } from 'chai'
import _keys from '../../src/objects/_keys'

const testObject = { one: 'foo', two: 'bar', three: 'foobar' }
const testArray = ['stuff', 'things', 'testing']

describe('_keys()', function() {
  it('should be a function', function() {
    expect(_keys).to.be.a('function')
  })
  it('should return the keys of the object', function() {
    expect(_keys(testObject)).to.eql(['one', 'two', 'three'])
  })
  it('should return the array indexes if given an array', function() {
    expect(_keys(testArray)).to.eql(['0', '1', '2'])
  })
  it('test object should have a length of three', function() {
    expect(_keys(testObject)).to.have.lengthOf(3)
  })
  it('should return an empty array if given an empty object', function() {
    expect(_keys({})).to.eql([])
  })
  it('should return an empty array if given an empty array object', function() {
    expect(_keys([])).to.eql([])
  })
  it('should return an empty array if given no input', function() {
    expect(_keys()).to.eql([])
  })
  it('should return an empty array if given a string', function() {
    expect(_keys('hello there!')).to.eql([])
  })
  it('should return an empty array if given a number', function() {
    expect(_keys(2)).to.eql([])
  })

})
