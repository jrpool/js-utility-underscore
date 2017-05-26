import chai, { expect } from 'chai'
import _escape from '../../src/utility/_escape'

describe('_escape', function() {

  it('is a function', function() {
    expect(_escape).to.be.a('function')
  })

  context('1 string argument', function() {
    it('returns a string', function() {
      expect(typeof _escape('cord')).to.equal('string')
    })
    it('returns an identical copy if there is nothing to escape', function() {
      expect(_escape('hello there')).to.equal('hello there')
    })
    it('escapes all required metacharacters', function() {
      expect(_escape('PG&E <<`electricity\'>> is "cheap"'))
      .to.equal(
        'PG&amp;E &lt;&lt;&#x60;electricity&#x27;&gt;&gt; is &quot;cheap&quot;'
      )
    })
    it('returns a blank string if given a blank string', function() {
      expect(_escape('')).to.equal('')
    })
  })

  context('no argument', function() {
    it('returns undefined when there is argument', function() {
      expect(_escape()).to.be.undefined
    })
  })

  context('1 nonstring argument', function() {
    it('returns undefined when argument 0 is a number', function() {
      expect(_escape(123)).to.be.undefined
    })
    it(
      'returns undefined when argument 0 is undefined',
      function() {
        expect(_escape(undefined)).to.be.undefined
      }
    )
    it(
      'returns undefined when argument 0 is an array',
      function() {
        expect(_escape(['string'])).to.be.undefined
      }
    )
    it(
      'returns undefined when argument 0 is null', function() {
        expect(_escape(null)).to.be.undefined
      }
    )
  })

})
