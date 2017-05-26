import { expect } from 'chai'
import _noop from '../../src/utility/_noop'

describe('_noop', function() {

  it('is a function', function() {
    expect(_noop).to.be.a('function')
  })
  it('_noop() returns undefined when given 45', function() {
    expect(_noop(45)).to.be.undefined
  })
  it('_noop() returns undefined when given “any”', function() {
    expect(_noop('any')).to.be.undefined
  })
  it('_noop() returns undefined when given [1, 2]', function() {
    expect(_noop([1, 2])).to.be.undefined
  })
  it('_noop() returns undefined when given {a: 1}', function() {
    expect(_noop({a: 1})).to.be.undefined
  })
  it('_noop() returns undefined when given undefined', function() {
    expect(_noop(undefined)).to.be.undefined
  })
  it('_noop() returns undefined when given null', function() {
    expect(_noop(null)).to.be.undefined
  })
  it('_noop() returns undefined when given NaN', function() {
    expect(_noop(NaN)).to.be.undefined
  })
  it('_noop() returns undefined when given 2 arguments', function() {
    expect(_noop(4, 'a')).to.be.undefined
  })
  it('_noop() returns undefined when given no argument', function() {
    expect(_noop()).to.be.undefined
  })

})
