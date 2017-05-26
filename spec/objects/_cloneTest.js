import chai from 'chai'
import { expect } from 'chai'
import _clone from '../../src/objects/_clone'

describe('clone()', function() {
  it('should be a function', function() {
    expect(_clone).to.be.a('function')
  })
  it('returns a shallow copy clone of a plain object', function() {
    expect(_clone({ name: 'Keith' })).to.eql({ name: 'Keith' })
  })
})
