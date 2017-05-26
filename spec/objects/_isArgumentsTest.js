import { expect } from 'chai'
import _isArguments from '../../src/objects/_isArguments'

const testFunction = (() => { return _isArguments(arguments) })(7, 9, 20)
const tooManyArguments = (() => { return _isArguments(arguments) })(7, 9, 20, 3)


describe('_isArguments()', () => {
  it('should be a function', () => {
    expect(_isArguments).to.be.a('function')
  })
  it('returns false if no input is given', () => {
    expect(_isArguments()).to.be.false
  })
  it('returns false if the function is given undefined as the input', () => {
    expect(_isArguments(undefined)).to.be.false
  })
  it('returns false if the function is given null as the input', () => {
    expect(_isArguments(null)).to.be.false
  })
  it('returns false if an object is not an arguments object', () => {
    expect(_isArguments({ a: 1, b: 2, c: 3 })).to.be.false
  })
  it('returns false if an array object is not an arguments object', () => {
    expect(_isArguments([9, 3, 4, 5, 24, 9])).to.be.false
  })
  it('returns true if the object is an arguments object', () => {
    expect(testFunction).to.be.true
  })
  it('still returns true if too many arguments are provided', () => {
    expect(tooManyArguments).to.be.true
  })
})
