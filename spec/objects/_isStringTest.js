import { expect } from 'chai'
import _isString from '../../src/objects/_isString'

describe('_isString()', () => {
  it('should be a function', () => {
    expect(_isString).to.be.a('function')
  })
  it('returns true if the object is a string', () => {
    expect(_isString('house')).to.be.true
  })
  it('returns false if the object is a number', () => {
    expect(_isString(592)).to.be.false
  })
  it('returns true if an array element is a string', () => {
    const anArray = [35, 'place', 2, 4]
    expect(_isString(anArray[1])).to.be.true
  })
  it('returns false if no input parameter is given', () => {
    expect(_isString()).to.be.false
  })
  it('returns false if the object is undefined', () => {
    expect(_isString(undefined)).to.be.false
  })
  it('returns false if the object is null', () => {
    expect(_isString(null)).to.be.false
  })
})
