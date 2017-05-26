import { expect } from 'chai'
import _isFinite from '../../src/objects/_isFinite'

describe('_isFinite()', () => {
  it('should be a function', () => {
    expect(_isFinite).to.be.a('function')
  })
  it('returns true if object is a positive finite number', () => {
    expect(_isFinite(344)).to.be.true
  })
  it('returns true if object is a negative finite number', () => {
    expect(_isFinite(-34)).to.be.true
  })
  it('returns true for finite hexadecimal number', () => {
    expect(_isFinite(2e64)).to.be.true
  })
  it('returns false if object is not a finite number', () => {
    expect(_isFinite(+Infinity)).to.be.false
  })
  it('returns false if object is negative infinity', () => {
    expect(_isFinite(-Infinity)).to.be.false
  })
  it('returns false if object is Not a Number', () => {
    expect(_isFinite(NaN)).to.be.false
  })
  it('edge case: returns false for infinity minus one', () => {
    expect(_isFinite(+Infinity - 1)).to.be.false
  })
  it('returns false if object is empty', () => {
    expect(_isFinite({})).to.be.false
  })
  it('returns false if no argument is given', () => {
    expect(_isFinite()).to.be.false
  })
  it('returns false if object is null', () => {
    expect(_isFinite(null)).to.be.false
  })
  it('returns true if given a number as a string', () => {
    expect(_isFinite('4')).to.be.true
  })
})
