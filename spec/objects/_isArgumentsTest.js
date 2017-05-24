import chai from 'chai'
import { expect } from 'chai'
import _isArguments from '../../src/objects/_isArguments'

const testFunction = (function() { return _isArguments(arguments); })(7, 9, 20);
const tooManyArguments = (function() { return _isArguments(arguments); })(7, 9, 20, 3);


describe('_isArguments()', function() {
  it('should be a function', function() {
    expect(_isArguments).to.be.a('function')
  })
  it('returns false if no input is given', function() {
    expect(_isArguments()).to.be.false
  })
  it('returns false if the function is given undefined as the input', function() {
    expect(_isArguments(undefined)).to.be.false
  })
  it('returns false if the function is given null as the input', function() {
    expect(_isArguments(null)).to.be.false
  })
  it('returns false if an object is not an arguments object', function() {
    expect(_isArguments({ a: 1, b: 2, c: 3 })).to.be.false
  })
  it('returns false if an array object is not an arguments object', function() {
    expect(_isArguments([9, 3, 4, 5, 24, 9])).to.be.false
  })
  it('returns true if the object is an arguments object', function() {
    expect(testFunction).to.be.true
  })
  it('still returns true if too many arguments are provided', function() {
    expect(tooManyArguments).to.be.true
  })
})
