import { expect } from 'chai'
import _values from '../../src/objects/_values'

const testObject = { one: 'foo', two: 'bar', three: 'foobar', four: 'more stuff' }

describe('_values()', () => {
  it('should be a function', () => {
    expect(_values).to.be.a('function')
  })
  it('should return the values of the object', () => {
    expect(_values(testObject)).to.eql(['foo', 'bar', 'foobar', 'more stuff'])
  })
  it('test object should have a length of four', () => {
    expect(_values(testObject)).to.have.lengthOf(4)
  })
  it('should return an empty array if given a string', () => {
    expect(_values('what the heck?')).to.eql([])
  })
  it('should return an empty array if given a number', () => {
    expect(_values(42)).to.eql([])
  })
  it('should return an empty array if given no input', () => {
    expect(_values()).to.eql([])
  })
  it('should return an empty array if given an empty array object', () => {
    expect(_values([])).to.eql([])
  })
  it('should return an empty array if given an empty object', () => {
    expect(_values({})).to.eql([])
  })
})
