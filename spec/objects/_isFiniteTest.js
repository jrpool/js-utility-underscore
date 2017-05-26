import { expect } from 'chai'
import _isFinite from '../../src/objects/_isFinite'

describe('_isFinite()', function() {
  it('should be a function', function() {
    expect(_isFinite).to.be.a('function')
  })
  it('returns true if object is a positive finite number', function() {
    expect(_isFinite(344)).to.be.true
  })
  it('returns true if object is a negative finite number', function() {
    expect(_isFinite(-34)).to.be.true
  })
  it('returns true for finite hexadecimal number', function() {
    expect(_isFinite(2e64)).to.be.true
  })
  it('returns false if object is not a finite number', function() {
    expect(_isFinite(+Infinity)).to.be.false
  })
  it('returns false if object is negative infinity', function() {
    expect(_isFinite(-Infinity)).to.be.false
  })
  it('returns false if object is Not a Number', function() {
    expect(_isFinite(NaN)).to.be.false
  })
  it('edge case: returns false for infinity minus one', function() {
    expect(_isFinite(+Infinity - 1)).to.be.false
  })
  it('returns false if object is empty', function() {
    expect(_isFinite({})).to.be.false
  })
  it('returns false if no argument is given', function() {
    expect(_isFinite()).to.be.false
  })
  it('returns false if object is null', function() {
    expect(_isFinite(null)).to.be.false
  })
  it('returns true if given a number as a string', function() {
    expect(_isFinite('4')).to.be.true
  })
})
