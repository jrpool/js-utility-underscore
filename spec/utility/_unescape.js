import { expect } from 'chai'
import _unescape from '../../src/utility/_unescape'

describe('_unescape', function() {

  it('is a function', function() {
    expect(_unescape).to.be.a('function')
  })

  context('1 string argument', function() {
    it('returns a string', function() {
      expect(typeof _unescape('cord')).to.equal('string')
    })
    it('returns an identical copy if there is nothing to unescape', function() {
      expect(_unescape('hello there')).to.equal('hello there')
    })
    it('unescapes all required entities', function() {
      expect(_unescape('PG&amp;E &lt;&lt;&#x60;electricity&#x27;&gt;&gt; is &quot;cheap&quot;'))
        .to.equal('PG&E <<`electricity\'>> is "cheap"')
    })
    it('unescapes all required entities if &#x60; is decimalized', function() {
      expect(_unescape('PG&amp;E &lt;&lt;&#96;electricity&#x27;&gt;&gt; is &quot;cheap&quot;'))
        .to.equal('PG&E <<`electricity\'>> is "cheap"')
    })
    it('returns a blank string if given a blank string', function() {
      expect(_unescape('')).to.equal('')
    })
  })

  context('no argument', function() {
    it('returns undefined when there is argument', function() {
      expect(_unescape()).to.be.undefined
    })
  })

  context('1 nonstring argument', function() {
    it('returns undefined when argument 0 is a number', function() {
      expect(_unescape(123)).to.be.undefined
    })
    it(
      'returns undefined when argument 0 is undefined',
      function() {
        expect(_unescape(undefined)).to.be.undefined
      }
    )
    it(
      'returns undefined when argument 0 is an array',
      function() {
        expect(_unescape(['string'])).to.be.undefined
      }
    )
    it(
      'returns undefined when argument 0 is null',
      function() {
        expect(_unescape(null)).to.be.undefined
      }
    )
  })

})
