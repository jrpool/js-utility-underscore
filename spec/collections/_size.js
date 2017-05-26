import chai, { expect } from 'chai'
import _size from '../../src/collections/_size'

describe('_size', function() {

  it('is a function', function() {
    expect(_size).to.be.a('function')
  })
  it('_size() returns 4 when given [1, 2, "3", 10]', function() {
    expect(_size([1, 2, '3', 10])).to.equal(4)
  })
  it('_size() returns 3 when given {a: 1, b: "2", c: [5, 6, 7]}', function() {
    expect(_size({a: 1, b: '2', c: [5, 6, 7]})).to.equal(3)
  })
  it('_size() returns 0 when given an empty array', function() {
    expect(_size([])).to.equal(0)
  })
  it('_size() returns undefined when given null', function() {
    expect(_size(null)).to.be.undefined
  })
  it('_size() returns undefined when given NaN', function() {
    expect(_size(NaN)).to.be.undefined
  })
  it('_size() returns undefined when given undefined', function() {
    expect(_size(undefined)).to.be.undefined
  })
  it('_size() returns undefined when there is no argument', function() {
    expect(_size()).to.be.undefined
  })
  it('_size() returns undefined when there are 2+ arguments', function() {
    expect(_size([1, 2, 3], [4, 5, 6, 7])).to.be.undefined
  })

})
