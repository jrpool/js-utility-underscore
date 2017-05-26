import { expect } from 'chai'
import _keys from '../../src/objects/_keys'

const testObject = { one: 'foo', two: 'bar', three: 'foobar' }
const testArray = ['stuff', 'things', 'testing']

describe('_keys()', () => {
  it('should be a function', () => {
    expect(_keys).to.be.a('function')
  })
  it('should return the keys of the object', () => {
    expect(_keys(testObject)).to.eql(['one', 'two', 'three'])
  })
  it('should return the array indexes if given an array', () => {
    expect(_keys(testArray)).to.eql(['0', '1', '2'])
  })
  it('test object should have a length of three', () => {
    expect(_keys(testObject)).to.have.lengthOf(3)
  })
  it('should return an empty array if given an empty object', () => {
    expect(_keys({})).to.eql([])
  })
  it('should return an empty array if given an empty array object', () => {
    expect(_keys([])).to.eql([])
  })
  it('should return an empty array if given no input', () => {
    expect(_keys()).to.eql([])
  })
  it('should return an empty array if given a string', () => {
    expect(_keys('hello there!')).to.eql([])
  })
  it('should return an empty array if given a number', () => {
    expect(_keys(2)).to.eql([])
  })

})
